'use client';

import { useEffect, useState } from 'react';
import { defaultEmployeeData } from '../../types';
import Link from 'next/link';
import Image from 'next/image';

export default function EmployeeDetail({ params }) {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vCardData, setVCardData] = useState('');

  useEffect(() => {
    // Fetch employee data from API
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/employees/${params.id}`);
        
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
  }, [params.id]);

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-600">Loading contact information...</p>
        </div>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-xl font-bold text-gray-800 mb-2">Contact Not Found</h1>
          <p className="text-gray-600 mb-4">{error || "The contact information you're looking for doesn't exist or has been removed."}</p>
          <Link href="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6 text-center relative overflow-hidden" style={{ backgroundColor: employee.backgroundColor }}>
        <h1 className="text-2xl font-bold mb-1">{employee.name}</h1>
        <p className="text-lg">{employee.position}</p>
        <p className="text-base">{employee.company}</p>
        
        <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-white/10 rounded-full z-0"></div>
        <div className="absolute -top-3 -left-3 w-16 h-16 bg-white/10 rounded-full z-0"></div>
      </div>
      
      {/* Profile Photo */}
      <div className="relative z-10 -mt-12 flex justify-center pt-14">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white">
          {employee.photo ? (
            <Image 
              src={employee.photo} 
              alt={employee.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">{employee.name.charAt(0)}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Contact Actions */}
      <div className="max-w-md mx-auto p-4 mb-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {employee.phone && (
            <a 
              href={`tel:${employee.phone}`}
              className="bg-gray-900 text-white rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Phone</span>
            </a>
          )}
          
          {employee.email && (
            <a 
              href={`mailto:${employee.email}`}
              className="bg-gray-900 text-white rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
          )}
          
          {employee.website && (
            <a 
              href={employee.website.startsWith('http') ? employee.website : `https://${employee.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>Website</span>
            </a>
          )}
        </div>
        
        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-5">
          {employee.phone && (
            <div className="flex items-center p-3 border-b border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Phone (Mobile)</p>
                <p className="font-medium">{employee.phone}</p>
              </div>
            </div>
          )}
          
          {employee.workPhone && (
            <div className="flex items-center p-3 border-b border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Phone (Work)</p>
                <p className="font-medium">{employee.workPhone}</p>
              </div>
            </div>
          )}
          
          {employee.email && (
            <div className="flex items-center p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium">{employee.email}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Save Contact Button */}
        <button 
          onClick={downloadVCard}
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Save to contacts
        </button>
      </div>
    </div>
  );
}
