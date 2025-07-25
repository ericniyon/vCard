'use client';

import { useEffect, useState, use } from 'react';
import { defaultEmployeeData } from '../../types';
import Link from 'next/link';
import Image from 'next/image';

// ICT Chamber brand colors
const PRIMARY = '#0A3161'; // Deep blue
const YELLOW = '#F9B233'; // Gold
const DARK_BG = '#121212'; // Dark background
const CARD_BG = '#FFFFFF'; // Card background
const LIGHT_BG = '#F5F6FA'; // Subtle light gray for inner backgrounds

export default function EmployeeDetail({ params }) {
  // Unwrap params if it's a promise (Next.js 15+)
  const { id } = typeof params?.then === 'function' ? use(params) : params;
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vCardData, setVCardData] = useState('');

  useEffect(() => {
    // Fetch employee data from API
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/employees/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Employee not found');
          } else {
            setError('Failed to load employee data');
          }
          setEmployee(null);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        setEmployee(data.employee);
        generateVCard(data.employee);
      } catch (error) {
        console.error('Error fetching employee:', error);
        setError('An error occurred while loading employee data');
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  // Generate vCard format
  const generateVCard = (data) => {
    let vcard = 'BEGIN:VCARD\n';
    vcard += 'VERSION:3.0\n';
    vcard += `FN:${data.name}\n`;
    vcard += `ORG:${data.company}\n`;
    vcard += `TITLE:${data.position}\n`;
    
    if (data.phone) {
      vcard += `TEL;TYPE=CELL:${data.phone}\n`;
    }
    
    if (data.workPhone) {
      vcard += `TEL;TYPE=WORK:${data.workPhone}\n`;
    }
    
    if (data.email) {
      vcard += `EMAIL:${data.email}\n`;
    }
    
    if (data.website) {
      vcard += `URL:${data.website}\n`;
    }
    
    vcard += 'END:VCARD';
    setVCardData(vcard);
  };

  // Download vCard
  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${employee?.name || 'contact'}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DARK_BG }}>
        <div className="text-center">
          <div
            className="w-12 h-12 rounded-full animate-spin mx-auto mb-3"
            style={{ borderWidth: '4px', borderStyle: 'solid', borderColor: `${YELLOW}`, borderTopColor: 'transparent' }}
          ></div>
          <p className="text-white font-medium">Loading contact information...</p>
        </div>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DARK_BG }}>
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" style={{ color: YELLOW }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Contact Not Found</h1>
          <p className="text-gray-600 mb-6">{error || "The contact information you're looking for doesn't exist or has been removed."}</p>
          <button onClick={downloadVCard} className="inline-block" style={{ background: PRIMARY, color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 600, boxShadow: '0 2px 8px rgba(10,49,97,0.08)' }}>
            Save Contact
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2" style={{ background: DARK_BG }}>
      <div className="w-full max-w-lg" style={{ background: CARD_BG }}>
        {/* Header with gradient and profile photo */}
        <div className="relative" style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${YELLOW} 100%)`, height: '11rem' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundColor: employee.backgroundColor }} />
          <div className="absolute top-4 left-4 text-white/90 text-sm font-medium tracking-wide">{employee.company}</div>
          <div className="absolute top-4 right-4">
            <button onClick={downloadVCard} style={{ background: PRIMARY, color: 'white', fontWeight: 700, borderRadius: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem', boxShadow: '0 2px 8px rgba(10,49,97,0.08)' }} className="hover:opacity-90 transition-all flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: YELLOW }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Save Contact
            </button>
          </div>
          <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 z-10">
            <div className="w-28 h-28 rounded-full border-4" style={{ borderColor: YELLOW, background: 'white', boxShadow: '0 4px 16px rgba(10,49,97,0.10)' }}>
              {employee.photo ? (
                <Image 
                  src={employee.photo.startsWith('http') ? employee.photo : employee.photo}
                  alt={employee.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full"
                  unoptimized={employee.photo.startsWith('data:image/')}
                />
              ) : (
                <span className="text-4xl" style={{ color: PRIMARY, fontWeight: 700 }}>{employee.name.charAt(0)}</span>
              )}
            </div>
          </div>
        </div>
        <div className="pt-20 pb-8 px-6">
          <h1 className="text-3xl font-extrabold text-center mb-1" style={{ color: PRIMARY }}>{employee.name}</h1>
          <p className="text-lg text-center font-medium mb-2" style={{ color: YELLOW }}>{employee.position}</p>
          <div className="flex justify-center gap-3 mb-6">
            {employee.phone && (
              <a href={`tel:${employee.phone}`} style={{ background: PRIMARY, color: 'white' }} className="hover:opacity-90 rounded-full p-3 shadow transition-all flex flex-col items-center" title="Call">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: YELLOW }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-xs font-semibold">Phone</span>
              </a>
            )}
            {employee.email && (
              <a href={`mailto:${employee.email}`} style={{ background: PRIMARY, color: 'white' }} className="hover:opacity-90 rounded-full p-3 shadow transition-all flex flex-col items-center" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: YELLOW }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-xs font-semibold">Email</span>
              </a>
            )}
            {employee.website && (
              <a href={employee.website.startsWith('http') ? employee.website : `https://${employee.website}`} target="_blank" rel="noopener noreferrer" style={{ background: YELLOW, color: PRIMARY }} className="hover:opacity-90 rounded-full p-3 shadow transition-all flex flex-col items-center" title="Website">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: YELLOW }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <span className="text-xs font-semibold">Website</span>
              </a>
            )}
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-inner p-6 mb-6" style={{ background: LIGHT_BG }}>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ background: YELLOW, color: PRIMARY }} className="rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: PRIMARY }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <div>
                <p className="text-xs text-gray-500">Phone (Mobile)</p>
                <p className="font-medium text-gray-900">{employee.phone || <span className="text-gray-400">N/A</span>}</p>
              </div>
            </div>
            {employee.workPhone && (
              <div className="flex items-center gap-3 mb-3">
                <span style={{ background: YELLOW, color: PRIMARY }} className="rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: PRIMARY }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <div>
                  <p className="text-xs text-gray-500">Phone (Work)</p>
                  <p className="font-medium text-gray-900">{employee.workPhone}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 mb-3">
              <span style={{ background: YELLOW, color: PRIMARY }} className="rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: PRIMARY }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{employee.email || <span className="text-gray-400">N/A</span>}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ background: YELLOW, color: PRIMARY }} className="rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: PRIMARY }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </span>
              <div>
                <p className="text-xs text-gray-500">Website</p>
                <p className="font-medium text-gray-900">
                  {employee.website ? (
                    <a href={employee.website.startsWith('http') ? employee.website : `https://${employee.website}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600 transition-colors">{employee.website}</a>
                  ) : <span className="text-gray-400">N/A</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={downloadVCard} style={{ background: PRIMARY, color: 'white', fontWeight: 700, borderRadius: '0.5rem', padding: '0.75rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(10,49,97,0.08)' }} className="hover:opacity-90 transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: YELLOW }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
