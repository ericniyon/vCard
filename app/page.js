'use client';

import { useState, useEffect, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import { QRCodeSVG } from 'qrcode.react';
import { defaultEmployeeData } from './types';

export default function Home() {
  const [employee, setEmployee] = useState(defaultEmployeeData);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const qrCodeRef = useRef(null);
  
  // Generate a unique ID for initial preview
  useEffect(() => {
    generateNewId();
  }, []);

  // Generate a new unique ID
  const generateNewId = () => {
    const uniqueId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setEmployeeId(uniqueId);
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    setPreviewUrl(`${baseUrl}/employee/${uniqueId}`);
    return uniqueId;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle background type change
  const handleBackgroundTypeChange = (type) => {
    setEmployee(prev => ({ ...prev, backgroundType: type }));
  };

  // Clear photo
  const clearPhoto = () => {
    setEmployee(prev => ({ ...prev, photo: null }));
  };

  // Download QR code as image
  const downloadQRCode = (id) => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.querySelector('canvas');
      if (!canvas) {
        const svg = qrCodeRef.current.querySelector('svg');
        if (svg) {
          const svgData = new XMLSerializer().serializeToString(svg);
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `${employee.name || 'employee'}_qrcode.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
          };
          img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
        }
      } else {
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `${employee.name || 'employee'}_qrcode.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    }
  };

  // Save employee data
  const handleSave = async () => {
    try {
      setSaving(true);
      
      // Generate a new unique ID for this save
      const newId = generateNewId();
      
      // Save to JSON file on server
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: newId,
          data: employee
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save employee data');
      }
      
      // Also save to localStorage as backup
      localStorage.setItem(`employee_${newId}`, JSON.stringify(employee));
      
      // Download QR code
      downloadQRCode(newId);
      
      // Reset form for new entry
      setEmployee({...defaultEmployeeData});
      
      alert(`Employee vCard created! It is accessible at: ${window.location.origin}/employee/${newId}\nQR Code has been downloaded.`);
    } catch (error) {
      console.error('Error saving employee:', error);
      alert('Failed to save employee data. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className='bg-gray-900 p-2 flex justify-center items-center mb-5'>
      <h1 className="text-2xl font-bold text-center mb-6">ICT Chamber  vCard</h1>
      </div>
      
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#e9eef2] p-12">
        {/* Form Section - Left and Middle columns */}
        <div className="lg:col-span-2 space-y-5">
          {/* Personal Information */}
          <div className="bg-white p-5 rounded-lg  mb-5">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={employee.company}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="Company Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={employee.website}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="https://www.example.com"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={employee.position}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="Job Title"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-5 rounded-lg  mb-5">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700 mb-1">Work Phone</label>
                <input
                  type="tel"
                  id="workPhone"
                  name="workPhone"
                  value={employee.workPhone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  placeholder="Work Phone"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                placeholder="Email Address"
              />
            </div>
          </div>

          {/* Photo Upload */}
          <div className="bg-white p-5 rounded-lg  mb-5">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Photo</h2>
            <div className="border border-gray-100 rounded-lg p-4 text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border border-gray-200 bg-gray-100">
                {employee.photo ? (
                  <img 
                    src={employee.photo} 
                    alt="Employee" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Photo
                  </div>
                )}
              </div>
              <div className="mt-3">
                <label className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 cursor-pointer transition-colors">
                  Upload
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handlePhotoUpload}
                  />
                </label>
                <button 
                  onClick={clearPhoto}
                  className="ml-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Background Color */}
          <div className="bg-white p-5 rounded-lg  mb-5">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Background Color</h2>
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={employee.backgroundType === 'solid'}
                    onChange={() => handleBackgroundTypeChange('solid')}
                    className="mr-2"
                  />
                  Solid Color
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={employee.backgroundType === 'gradient'}
                    onChange={() => handleBackgroundTypeChange('gradient')}
                    className="mr-2"
                  />
                  Gradient
                </label>
              </div>
              
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-8 h-8 rounded-md border border-gray-100 cursor-pointer transition-transform hover:scale-105"
                    style={{ backgroundColor: employee.backgroundColor }}
                    onClick={() => setShowColorPicker(!showColorPicker)}
                  />
                  <input
                    type="text"
                    value={employee.backgroundColor}
                    onChange={(e) => setEmployee(prev => ({ ...prev, backgroundColor: e.target.value }))}
                    className="w-full max-w-xs p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                  />
                </div>
                
                {showColorPicker && (
                  <div className="absolute z-10 mt-2 bg-white rounded-lg  p-2 border border-gray-200">
                    <HexColorPicker
                      color={employee.backgroundColor}
                      onChange={(color) => setEmployee(prev => ({ ...prev, backgroundColor: color }))}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section - Right column */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="flex flex-col items-center">
              {/* Phone Preview */}
              <div className="w-[260px] h-[520px] rounded-[30px] overflow-hidden relative shadow-md border-4 border-gray-900 mx-auto bg-white transition-transform hover:-translate-y-1">
                <div className="bg-gray-900 text-white p-5 text-center relative overflow-hidden" style={{ backgroundColor: employee.backgroundColor }}>
                  <h2 className="text-xl font-bold">{employee.name || 'Your Name'}</h2>
                  <p className="text-sm">{employee.position || 'Position'}</p>
                  <p className="text-sm mt-1">{employee.company || 'Company'}</p>
                  
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full z-0"></div>
                </div>
                
                <div className="p-4 bg-white h-[calc(100%-110px)] overflow-y-auto pt-14">
                  <div className="w-32 h-32 rounded-full -mt-12 mb-4 mx-auto overflow-hidden border-2 border-white  relative z-10 bg-gray-100">
                    {employee.photo ? (
                      <img 
                        src={employee.photo} 
                        alt={employee.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Photo</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </div>
                    <div className="bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </div>
                    <div className="bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Website
                    </div>
                  </div>
                  
                  {employee.phone && (
                    <div className="flex items-center p-2 mb-2 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-0.5">Phone (Mobile)</p>
                        <p className="text-sm font-medium">{employee.phone}</p>
                      </div>
                    </div>
                  )}
                  
                  {employee.workPhone && (
                    <div className="flex items-center p-2 mb-2 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-0.5">Phone (Work)</p>
                        <p className="text-sm font-medium">{employee.workPhone}</p>
                      </div>
                    </div>
                  )}
                  
                  <button className="w-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-2 mt-4 text-sm font-medium transition-all hover:bg-gray-100 hover:">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Save to contacts
                  </button>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="text-center p-4 bg-white rounded-lg  mt-5" ref={qrCodeRef}>
                <h3 className="font-medium mb-2 text-sm">QR Code</h3>
                <div className="inline-block border border-gray-200 p-3 rounded-lg bg-white my-2">
                  <QRCodeSVG 
                    value={previewUrl}
                    size={130}
                    level="H"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Scan to view vCard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="mt-6 text-center">
        <button 
          className={`px-5 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors ${saving ? 'opacity-75 cursor-not-allowed' : ''}`}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save vCard & Download QR'}
        </button>
      </div>
    </main>
  );
}
