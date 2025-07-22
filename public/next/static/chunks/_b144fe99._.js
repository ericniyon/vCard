(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Default employee data structure
__turbopack_context__.s({
    "defaultEmployeeData": (()=>defaultEmployeeData)
});
const defaultEmployeeData = {
    name: '',
    company: '',
    position: '',
    phone: '',
    workPhone: '',
    email: '',
    website: '',
    photo: null,
    backgroundType: 'solid',
    backgroundColor: '#222326'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-colorful/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const [employee, setEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEmployeeData"]);
    const [showColorPicker, setShowColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [employeeId, setEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const qrCodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Generate a unique ID for initial preview
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            generateNewId();
        }
    }["Home.useEffect"], []);
    // Generate a new unique ID
    const generateNewId = ()=>{
        const uniqueId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setEmployeeId(uniqueId);
        const baseUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : ("TURBOPACK unreachable", undefined);
        setPreviewUrl(`${baseUrl}/employee/${uniqueId}`);
        return uniqueId;
    };
    // Handle form input changes
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setEmployee((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Handle photo upload
    const handlePhotoUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setEmployee((prev)=>({
                        ...prev,
                        photo: reader.result
                    }));
            };
            reader.readAsDataURL(file);
        }
    };
    // Handle background type change
    const handleBackgroundTypeChange = (type)=>{
        setEmployee((prev)=>({
                ...prev,
                backgroundType: type
            }));
    };
    // Clear photo
    const clearPhoto = ()=>{
        setEmployee((prev)=>({
                ...prev,
                photo: null
            }));
    };
    // Download QR code as image
    const downloadQRCode = (id)=>{
        if (qrCodeRef.current) {
            const canvas = qrCodeRef.current.querySelector('canvas');
            if (!canvas) {
                const svg = qrCodeRef.current.querySelector('svg');
                if (svg) {
                    const svgData = new XMLSerializer().serializeToString(svg);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    img.onload = ()=>{
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
    const handleSave = async ()=>{
        try {
            setSaving(true);
            // Generate a new unique ID for this save
            const newId = generateNewId();
            // Save to JSON file on server
            const response = await fetch('/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: newId,
                    data: employee
                })
            });
            if (!response.ok) {
                throw new Error('Failed to save employee data');
            }
            // Also save to localStorage as backup
            localStorage.setItem(`employee_${newId}`, JSON.stringify(employee));
            // Download QR code
            downloadQRCode(newId);
            // Reset form for new entry
            setEmployee({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEmployeeData"]
            });
            alert(`Employee vCard created! It is accessible at: ${window.location.origin}/employee/${newId}\nQR Code has been downloaded.`);
        } catch (error) {
            console.error('Error saving employee:', error);
            alert('Failed to save employee data. Please try again.');
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 p-2 flex justify-center items-center mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center mb-6",
                    children: "ICT Chamber  vCard"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 136,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#e9eef2] p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-5 rounded-lg  mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold mb-3 text-gray-800 border-b pb-2",
                                        children: "Personal Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        value: employee.name,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "John Doe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "company",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "company",
                                                        name: "company",
                                                        value: employee.company,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "Company Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "website",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        id: "website",
                                                        name: "website",
                                                        value: employee.website,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "https://www.example.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 176,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "position",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Position"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "position",
                                                        name: "position",
                                                        value: employee.position,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "Job Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 188,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-5 rounded-lg  mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold mb-3 text-gray-800 border-b pb-2",
                                        children: "Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phone",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Mobile Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        id: "phone",
                                                        name: "phone",
                                                        value: employee.phone,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "workPhone",
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Work Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        id: "workPhone",
                                                        name: "workPhone",
                                                        value: employee.workPhone,
                                                        onChange: handleChange,
                                                        className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                        placeholder: "Work Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                value: employee.email,
                                                onChange: handleChange,
                                                className: "w-full p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors",
                                                placeholder: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-5 rounded-lg  mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold mb-3 text-gray-800 border-b pb-2",
                                        children: "Photo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-100 rounded-lg p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border border-gray-200 bg-gray-100",
                                                children: employee.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: employee.photo,
                                                    alt: "Employee",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full flex items-center justify-center text-gray-400",
                                                    children: "No Photo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 cursor-pointer transition-colors",
                                                        children: [
                                                            "Upload",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                className: "hidden",
                                                                onChange: handlePhotoUpload
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 264,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 262,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: clearPhoto,
                                                        className: "ml-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors",
                                                        children: "Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-5 rounded-lg  mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold mb-3 text-gray-800 border-b pb-2",
                                        children: "Background Color"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                checked: employee.backgroundType === 'solid',
                                                                onChange: ()=>handleBackgroundTypeChange('solid'),
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 287,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Solid Color"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                checked: employee.backgroundType === 'gradient',
                                                                onChange: ()=>handleBackgroundTypeChange('gradient'),
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 296,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Gradient"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-md border border-gray-100 cursor-pointer transition-transform hover:scale-105",
                                                                style: {
                                                                    backgroundColor: employee.backgroundColor
                                                                },
                                                                onClick: ()=>setShowColorPicker(!showColorPicker)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 308,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: employee.backgroundColor,
                                                                onChange: (e)=>setEmployee((prev)=>({
                                                                            ...prev,
                                                                            backgroundColor: e.target.value
                                                                        })),
                                                                className: "w-full max-w-xs p-2 border border-gray-100 rounded-md  focus:ring-1 focus:ring-blue-200 focus:border-blue-200 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 313,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 307,
                                                        columnNumber: 17
                                                    }, this),
                                                    showColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute z-10 mt-2 bg-white rounded-lg  p-2 border border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexColorPicker"], {
                                                            color: employee.backgroundColor,
                                                            onChange: (color)=>setEmployee((prev)=>({
                                                                        ...prev,
                                                                        backgroundColor: color
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[260px] h-[520px] rounded-[30px] overflow-hidden relative shadow-md border-4 border-gray-900 mx-auto bg-white transition-transform hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-900 text-white p-5 text-center relative overflow-hidden",
                                                style: {
                                                    backgroundColor: employee.backgroundColor
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold",
                                                        children: employee.name || 'Your Name'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: employee.position || 'Position'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mt-1",
                                                        children: employee.company || 'Company'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 343,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full z-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white h-[calc(100%-110px)] overflow-y-auto pt-14",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-32 h-32 rounded-full -mt-12 mb-4 mx-auto overflow-hidden border-2 border-white  relative z-10 bg-gray-100",
                                                        children: employee.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: employee.photo,
                                                            alt: employee.name,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full bg-gray-200 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "Photo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 358,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-2 mb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-5 w-5 mb-1",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 366,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 365,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Phone"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-5 w-5 mb-1",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 372,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 371,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Email"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 370,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-900 text-white rounded-lg p-2 flex flex-col items-center justify-center text-xs transition-all hover:-translate-y-0.5 hover:",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-5 w-5 mb-1",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 378,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 377,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Website"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    employee.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center p-2 mb-2 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4 text-gray-600 mr-2 flex-shrink-0",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 387,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mb-0.5",
                                                                        children: "Phone (Mobile)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 390,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: employee.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 391,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 389,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 385,
                                                        columnNumber: 21
                                                    }, this),
                                                    employee.workPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center p-2 mb-2 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4 text-gray-600 mr-2 flex-shrink-0",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 399,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 398,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mb-0.5",
                                                                        children: "Phone (Work)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 402,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: employee.workPhone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 403,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-2 mt-4 text-sm font-medium transition-all hover:bg-gray-100 hover:",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4 mr-2",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 410,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 409,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Save to contacts"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-white rounded-lg  mt-5",
                                        ref: qrCodeRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-2 text-sm",
                                                children: "QR Code"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block border border-gray-200 p-3 rounded-lg bg-white my-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                                    value: previewUrl,
                                                    size: 130,
                                                    level: "H"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 421,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1",
                                                children: "Scan to view vCard"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `px-5 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors ${saving ? 'opacity-75 cursor-not-allowed' : ''}`,
                    onClick: handleSave,
                    disabled: saving,
                    children: saving ? 'Saving...' : 'Save vCard & Download QR'
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 435,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(Home, "dTJ0ljwsDBMyRheVC74Du1166YM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/react-colorful/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HexAlphaColorPicker": (()=>ne),
    "HexColorInput": (()=>Oe),
    "HexColorPicker": (()=>Z),
    "HslColorPicker": (()=>ie),
    "HslStringColorPicker": (()=>fe),
    "HslaColorPicker": (()=>ae),
    "HslaStringColorPicker": (()=>ue),
    "HsvColorPicker": (()=>pe),
    "HsvStringColorPicker": (()=>_e),
    "HsvaColorPicker": (()=>de),
    "HsvaStringColorPicker": (()=>me),
    "RgbColorPicker": (()=>Ne),
    "RgbStringColorPicker": (()=>ye),
    "RgbaColorPicker": (()=>Ce),
    "RgbaStringColorPicker": (()=>He),
    "setNonce": (()=>G)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function u() {
    return (u = Object.assign || function(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = arguments[r];
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
    }).apply(this, arguments);
}
function c(e, r) {
    if (null == e) return {};
    var t, n, o = {}, a = Object.keys(e);
    for(n = 0; n < a.length; n++)r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
    return o;
}
function i(e) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(function(e) {
        t.current && t.current(e);
    });
    return t.current = e, n.current;
}
var s = function(e, r, t) {
    return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
}, f = function(e) {
    return "touches" in e;
}, v = function(e) {
    return e && e.ownerDocument.defaultView || self;
}, d = function(e, r, t) {
    var n = e.getBoundingClientRect(), o = f(r) ? function(e, r) {
        for(var t = 0; t < e.length; t++)if (e[t].identifier === r) return e[t];
        return e[0];
    }(r.touches, t) : r;
    return {
        left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
        top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height)
    };
}, h = function(e) {
    !f(e) && e.preventDefault();
}, m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function(o) {
    var a = o.onMove, l = o.onKey, s = c(o, [
        "onMove",
        "onKey"
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), g = i(a), p = i(l), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var e = function(e) {
            h(e), (f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current ? g(d(m.current, e, b.current)) : t(!1);
        }, r = function() {
            return t(!1);
        };
        function t(t) {
            var n = _.current, o = v(m.current), a = t ? o.addEventListener : o.removeEventListener;
            a(n ? "touchmove" : "mousemove", e), a(n ? "touchend" : "mouseup", r);
        }
        return [
            function(e) {
                var r = e.nativeEvent, n = m.current;
                if (n && (h(r), !function(e, r) {
                    return r && !f(e);
                }(r, _.current) && n)) {
                    if (f(r)) {
                        _.current = !0;
                        var o = r.changedTouches || [];
                        o.length && (b.current = o[0].identifier);
                    }
                    n.focus(), g(d(n, r, b.current)), t(!0);
                }
            },
            function(e) {
                var r = e.which || e.keyCode;
                r < 37 || r > 40 || (e.preventDefault(), p({
                    left: 39 === r ? .05 : 37 === r ? -.05 : 0,
                    top: 40 === r ? .05 : 38 === r ? -.05 : 0
                }));
            },
            t
        ];
    }, [
        p,
        g
    ]), C = x[0], E = x[1], H = x[2];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return H;
    }, [
        H
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        onTouchStart: C,
        onMouseDown: C,
        className: "react-colorful__interactive",
        ref: m,
        onKeyDown: E,
        tabIndex: 0,
        role: "slider"
    }));
}), g = function(e) {
    return e.filter(Boolean).join(" ");
}, p = function(r) {
    var t = r.color, n = r.left, o = r.top, a = void 0 === o ? .5 : o, l = g([
        "react-colorful__pointer",
        r.className
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: l,
        style: {
            top: 100 * a + "%",
            left: 100 * n + "%"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
            backgroundColor: t
        }
    }));
}, b = function(e, r, t) {
    return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, _ = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}, x = function(e) {
    return L(C(e));
}, C = function(e) {
    return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
        r: parseInt(e[0] + e[0], 16),
        g: parseInt(e[1] + e[1], 16),
        b: parseInt(e[2] + e[2], 16),
        a: 4 === e.length ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1
    } : {
        r: parseInt(e.substring(0, 2), 16),
        g: parseInt(e.substring(2, 4), 16),
        b: parseInt(e.substring(4, 6), 16),
        a: 8 === e.length ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
    };
}, E = function(e, r) {
    return void 0 === r && (r = "deg"), Number(e) * (_[r] || 1);
}, H = function(e) {
    var r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? N({
        h: E(r[1], r[2]),
        s: Number(r[3]),
        l: Number(r[4]),
        a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, M = H, N = function(e) {
    var r = e.s, t = e.l;
    return {
        h: e.h,
        s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0,
        v: t + r,
        a: e.a
    };
}, w = function(e) {
    return K(I(e));
}, y = function(e) {
    var r = e.s, t = e.v, n = e.a, o = (200 - r) * t / 100;
    return {
        h: b(e.h),
        s: b(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
        l: b(o / 2),
        a: b(n, 2)
    };
}, q = function(e) {
    var r = y(e);
    return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, k = function(e) {
    var r = y(e);
    return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, I = function(e) {
    var r = e.h, t = e.s, n = e.v, o = e.a;
    r = r / 360 * 6, t /= 100, n /= 100;
    var a = Math.floor(r), l = n * (1 - t), u = n * (1 - (r - a) * t), c = n * (1 - (1 - r + a) * t), i = a % 6;
    return {
        r: b(255 * [
            n,
            u,
            l,
            l,
            c,
            n
        ][i]),
        g: b(255 * [
            c,
            n,
            n,
            u,
            l,
            l
        ][i]),
        b: b(255 * [
            l,
            l,
            c,
            n,
            n,
            u
        ][i]),
        a: b(o, 2)
    };
}, O = function(e) {
    var r = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? A({
        h: E(r[1], r[2]),
        s: Number(r[3]),
        v: Number(r[4]),
        a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, j = O, z = function(e) {
    var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? L({
        r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
        g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
        b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
        a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, B = z, D = function(e) {
    var r = e.toString(16);
    return r.length < 2 ? "0" + r : r;
}, K = function(e) {
    var r = e.r, t = e.g, n = e.b, o = e.a, a = o < 1 ? D(b(255 * o)) : "";
    return "#" + D(r) + D(t) + D(n) + a;
}, L = function(e) {
    var r = e.r, t = e.g, n = e.b, o = e.a, a = Math.max(r, t, n), l = a - Math.min(r, t, n), u = l ? a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l : 0;
    return {
        h: b(60 * (u < 0 ? u + 6 : u)),
        s: b(a ? l / a * 100 : 0),
        v: b(a / 255 * 100),
        a: o
    };
}, A = function(e) {
    return {
        h: b(e.h),
        s: b(e.s),
        v: b(e.v),
        a: b(e.a, 2)
    };
}, S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function(r) {
    var t = r.hue, n = r.onChange, o = g([
        "react-colorful__hue",
        r.className
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: o
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            n({
                h: 360 * e.left
            });
        },
        onKey: function(e) {
            n({
                h: s(t + 360 * e.left, 0, 360)
            });
        },
        "aria-label": "Hue",
        "aria-valuenow": b(t),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__hue-pointer",
        left: t / 360,
        color: q({
            h: t,
            s: 100,
            v: 100,
            a: 1
        })
    })));
}), T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function(r) {
    var t = r.hsva, n = r.onChange, o = {
        backgroundColor: q({
            h: t.h,
            s: 100,
            v: 100,
            a: 1
        })
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__saturation",
        style: o
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            n({
                s: 100 * e.left,
                v: 100 - 100 * e.top
            });
        },
        onKey: function(e) {
            n({
                s: s(t.s + 100 * e.left, 0, 100),
                v: s(t.v - 100 * e.top, 0, 100)
            });
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + b(t.s) + "%, Brightness " + b(t.v) + "%"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__saturation-pointer",
        top: 1 - t.v / 100,
        left: t.s / 100,
        color: q(t)
    })));
}), F = function(e, r) {
    if (e === r) return !0;
    for(var t in e)if (e[t] !== r[t]) return !1;
    return !0;
}, P = function(e, r) {
    return e.replace(/\s/g, "") === r.replace(/\s/g, "");
}, X = function(e, r) {
    return e.toLowerCase() === r.toLowerCase() || F(C(e), C(r));
};
function Y(e, t, l) {
    var u = i(l), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(function() {
        return e.toHsva(t);
    }), s = c[0], f = c[1], v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        color: t,
        hsva: s
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!e.equal(t, v.current.color)) {
            var r = e.toHsva(t);
            v.current = {
                hsva: r,
                color: t
            }, f(r);
        }
    }, [
        t,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var r;
        F(s, v.current.hsva) || e.equal(r = e.fromHsva(s), v.current.color) || (v.current = {
            hsva: s,
            color: r
        }, u(r));
    }, [
        s,
        e,
        u
    ]);
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        f(function(r) {
            return Object.assign({}, r, e);
        });
    }, []);
    return [
        s,
        d
    ];
}
var R, V = "undefined" != typeof window ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"], $ = function() {
    return R || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
}, G = function(e) {
    R = e;
}, J = new Map, Q = function(e) {
    V(function() {
        var r = e.current ? e.current.ownerDocument : document;
        if (void 0 !== r && !J.has(r)) {
            var t = r.createElement("style");
            t.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', J.set(r, t);
            var n = $();
            n && t.setAttribute("nonce", n), r.head.appendChild(t);
        }
    }, []);
}, U = function(t) {
    var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i = t.onChange, s = c(t, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    Q(f);
    var v = Y(o, l, i), d = v[0], h = v[1], m = g([
        "react-colorful",
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        ref: f,
        className: m
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(T, {
        hsva: d,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        hue: d.h,
        onChange: h,
        className: "react-colorful__last-control"
    }));
}, W = {
    defaultColor: "000",
    toHsva: x,
    fromHsva: function(e) {
        return w({
            h: e.h,
            s: e.s,
            v: e.v,
            a: 1
        });
    },
    equal: X
}, Z = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: W
    }));
}, ee = function(r) {
    var t = r.className, n = r.hsva, o = r.onChange, a = {
        backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, n, {
            a: 0
        })) + ", " + k(Object.assign({}, n, {
            a: 1
        })) + ")"
    }, l = g([
        "react-colorful__alpha",
        t
    ]), u = b(100 * n.a);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: l
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "react-colorful__alpha-gradient",
        style: a
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        onMove: function(e) {
            o({
                a: e.left
            });
        },
        onKey: function(e) {
            o({
                a: s(n.a + e.left)
            });
        },
        "aria-label": "Alpha",
        "aria-valuetext": u + "%",
        "aria-valuenow": u,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        className: "react-colorful__alpha-pointer",
        left: n.a,
        color: k(n)
    })));
}, re = function(t) {
    var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i = t.onChange, s = c(t, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    Q(f);
    var v = Y(o, l, i), d = v[0], h = v[1], m = g([
        "react-colorful",
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", u({}, s, {
        ref: f,
        className: m
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(T, {
        hsva: d,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        hue: d.h,
        onChange: h
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ee, {
        hsva: d,
        onChange: h,
        className: "react-colorful__last-control"
    }));
}, te = {
    defaultColor: "0001",
    toHsva: x,
    fromHsva: w,
    equal: X
}, ne = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: te
    }));
}, oe = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0,
        a: 1
    },
    toHsva: N,
    fromHsva: y,
    equal: F
}, ae = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: oe
    }));
}, le = {
    defaultColor: "hsla(0, 0%, 0%, 1)",
    toHsva: H,
    fromHsva: k,
    equal: P
}, ue = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: le
    }));
}, ce = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0
    },
    toHsva: function(e) {
        return N({
            h: e.h,
            s: e.s,
            l: e.l,
            a: 1
        });
    },
    fromHsva: function(e) {
        return {
            h: (r = y(e)).h,
            s: r.s,
            l: r.l
        };
        "TURBOPACK unreachable";
        var r;
    },
    equal: F
}, ie = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: ce
    }));
}, se = {
    defaultColor: "hsl(0, 0%, 0%)",
    toHsva: M,
    fromHsva: q,
    equal: P
}, fe = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: se
    }));
}, ve = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    },
    toHsva: function(e) {
        return e;
    },
    fromHsva: A,
    equal: F
}, de = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: ve
    }));
}, he = {
    defaultColor: "hsva(0, 0%, 0%, 1)",
    toHsva: O,
    fromHsva: function(e) {
        var r = A(e);
        return "hsva(" + r.h + ", " + r.s + "%, " + r.v + "%, " + r.a + ")";
    },
    equal: P
}, me = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: he
    }));
}, ge = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0
    },
    toHsva: function(e) {
        return {
            h: e.h,
            s: e.s,
            v: e.v,
            a: 1
        };
    },
    fromHsva: function(e) {
        var r = A(e);
        return {
            h: r.h,
            s: r.s,
            v: r.v
        };
    },
    equal: F
}, pe = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: ge
    }));
}, be = {
    defaultColor: "hsv(0, 0%, 0%)",
    toHsva: j,
    fromHsva: function(e) {
        var r = A(e);
        return "hsv(" + r.h + ", " + r.s + "%, " + r.v + "%)";
    },
    equal: P
}, _e = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: be
    }));
}, xe = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    toHsva: L,
    fromHsva: I,
    equal: F
}, Ce = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: xe
    }));
}, Ee = {
    defaultColor: "rgba(0, 0, 0, 1)",
    toHsva: z,
    fromHsva: function(e) {
        var r = I(e);
        return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
    },
    equal: P
}, He = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(re, u({}, r, {
        colorModel: Ee
    }));
}, Me = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0
    },
    toHsva: function(e) {
        return L({
            r: e.r,
            g: e.g,
            b: e.b,
            a: 1
        });
    },
    fromHsva: function(e) {
        return {
            r: (r = I(e)).r,
            g: r.g,
            b: r.b
        };
        "TURBOPACK unreachable";
        var r;
    },
    equal: F
}, Ne = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: Me
    }));
}, we = {
    defaultColor: "rgb(0, 0, 0)",
    toHsva: B,
    fromHsva: function(e) {
        var r = I(e);
        return "rgb(" + r.r + ", " + r.g + ", " + r.b + ")";
    },
    equal: P
}, ye = function(r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, u({}, r, {
        colorModel: we
    }));
}, qe = /^#?([0-9A-F]{3,8})$/i, ke = function(r) {
    var t = r.color, l = void 0 === t ? "" : t, s = r.onChange, f = r.onBlur, v = r.escape, d = r.validate, h = r.format, m = r.process, g = c(r, [
        "color",
        "onChange",
        "onBlur",
        "escape",
        "validate",
        "format",
        "process"
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(function() {
        return v(l);
    }), b = p[0], _ = p[1], x = i(s), C = i(f), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        var r = v(e.target.value);
        _(r), d(r) && x(m ? m(r) : r);
    }, [
        v,
        m,
        d,
        x
    ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        d(e.target.value) || _(v(l)), C(e);
    }, [
        l,
        v,
        d,
        C
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        _(v(l));
    }, [
        l,
        v
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", u({}, g, {
        value: h ? h(b) : b,
        spellCheck: "false",
        onChange: E,
        onBlur: H
    }));
}, Ie = function(e) {
    return "#" + e;
}, Oe = function(r) {
    var t = r.prefixed, n = r.alpha, o = c(r, [
        "prefixed",
        "alpha"
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        return e.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
    }, [
        n
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        return function(e, r) {
            var t = qe.exec(e), n = t ? t[1].length : 0;
            return 3 === n || 6 === n || !!r && 4 === n || !!r && 8 === n;
        }(e, n);
    }, [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ke, u({}, o, {
        escape: l,
        format: t ? Ie : void 0,
        process: Ie,
        validate: i
    }));
};
;
 //# sourceMappingURL=index.module.js.map
}}),
"[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "QRCodeCanvas": (()=>QRCodeCanvas),
    "QRCodeSVG": (()=>QRCodeSVG)
});
// src/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)){
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
;
// src/third-party/qrcodegen/index.ts
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var qrcodegen;
((qrcodegen2)=>{
    const _QrCode = class _QrCode {
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code with the given version number,
        // error correction level, data codeword bytes, and mask number.
        // This is a low-level API that most users should not use directly.
        // A mid-level API is the encodeSegments() function.
        constructor(version, errorCorrectionLevel, dataCodewords, msk){
            this.version = version;
            this.errorCorrectionLevel = errorCorrectionLevel;
            // The modules of this QR Code (false = light, true = dark).
            // Immutable after constructor finishes. Accessed through getModule().
            this.modules = [];
            // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
            this.isFunction = [];
            if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
            if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
            this.size = version * 4 + 17;
            let row = [];
            for(let i = 0; i < this.size; i++)row.push(false);
            for(let i = 0; i < this.size; i++){
                this.modules.push(row.slice());
                this.isFunction.push(row.slice());
            }
            this.drawFunctionPatterns();
            const allCodewords = this.addEccAndInterleave(dataCodewords);
            this.drawCodewords(allCodewords);
            if (msk == -1) {
                let minPenalty = 1e9;
                for(let i = 0; i < 8; i++){
                    this.applyMask(i);
                    this.drawFormatBits(i);
                    const penalty = this.getPenaltyScore();
                    if (penalty < minPenalty) {
                        msk = i;
                        minPenalty = penalty;
                    }
                    this.applyMask(i);
                }
            }
            assert(0 <= msk && msk <= 7);
            this.mask = msk;
            this.applyMask(msk);
            this.drawFormatBits(msk);
            this.isFunction = [];
        }
        /*-- Static factory functions (high level) --*/ // Returns a QR Code representing the given Unicode text string at the given error correction level.
        // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
        // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
        // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
        // ecl argument if it can be done without increasing the version.
        static encodeText(text, ecl) {
            const segs = qrcodegen2.QrSegment.makeSegments(text);
            return _QrCode.encodeSegments(segs, ecl);
        }
        // Returns a QR Code representing the given binary data at the given error correction level.
        // This function always encodes using the binary segment mode, not any text mode. The maximum number of
        // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
        // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
        static encodeBinary(data, ecl) {
            const seg = qrcodegen2.QrSegment.makeBytes(data);
            return _QrCode.encodeSegments([
                seg
            ], ecl);
        }
        /*-- Static factory functions (mid level) --*/ // Returns a QR Code representing the given segments with the given encoding parameters.
        // The smallest possible QR Code version within the given range is automatically
        // chosen for the output. Iff boostEcl is true, then the ECC level of the result
        // may be higher than the ecl argument if it can be done without increasing the
        // version. The mask number is either between 0 to 7 (inclusive) to force that
        // mask, or -1 to automatically choose an appropriate mask (which may be slow).
        // This function allows the user to create a custom sequence of segments that switches
        // between modes (such as alphanumeric and byte) to encode text in less space.
        // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
        static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
            if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
            let version;
            let dataUsedBits;
            for(version = minVersion;; version++){
                const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
                const usedBits = QrSegment.getTotalBits(segs, version);
                if (usedBits <= dataCapacityBits2) {
                    dataUsedBits = usedBits;
                    break;
                }
                if (version >= maxVersion) throw new RangeError("Data too long");
            }
            for (const newEcl of [
                _QrCode.Ecc.MEDIUM,
                _QrCode.Ecc.QUARTILE,
                _QrCode.Ecc.HIGH
            ]){
                if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
            }
            let bb = [];
            for (const seg of segs){
                appendBits(seg.mode.modeBits, 4, bb);
                appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
                for (const b of seg.getData())bb.push(b);
            }
            assert(bb.length == dataUsedBits);
            const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
            assert(bb.length <= dataCapacityBits);
            appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
            appendBits(0, (8 - bb.length % 8) % 8, bb);
            assert(bb.length % 8 == 0);
            for(let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)appendBits(padByte, 8, bb);
            let dataCodewords = [];
            while(dataCodewords.length * 8 < bb.length)dataCodewords.push(0);
            bb.forEach((b, i)=>dataCodewords[i >>> 3] |= b << 7 - (i & 7));
            return new _QrCode(version, ecl, dataCodewords, mask);
        }
        /*-- Accessor methods --*/ // Returns the color of the module (pixel) at the given coordinates, which is false
        // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
        // If the given coordinates are out of bounds, then false (light) is returned.
        getModule(x, y) {
            return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
        }
        // Modified to expose modules for easy access
        getModules() {
            return this.modules;
        }
        /*-- Private helper methods for constructor: Drawing function modules --*/ // Reads this object's version field, and draws and marks all function modules.
        drawFunctionPatterns() {
            for(let i = 0; i < this.size; i++){
                this.setFunctionModule(6, i, i % 2 == 0);
                this.setFunctionModule(i, 6, i % 2 == 0);
            }
            this.drawFinderPattern(3, 3);
            this.drawFinderPattern(this.size - 4, 3);
            this.drawFinderPattern(3, this.size - 4);
            const alignPatPos = this.getAlignmentPatternPositions();
            const numAlign = alignPatPos.length;
            for(let i = 0; i < numAlign; i++){
                for(let j = 0; j < numAlign; j++){
                    if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0)) this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
                }
            }
            this.drawFormatBits(0);
            this.drawVersion();
        }
        // Draws two copies of the format bits (with its own error correction code)
        // based on the given mask and this object's error correction level field.
        drawFormatBits(mask) {
            const data = this.errorCorrectionLevel.formatBits << 3 | mask;
            let rem = data;
            for(let i = 0; i < 10; i++)rem = rem << 1 ^ (rem >>> 9) * 1335;
            const bits = (data << 10 | rem) ^ 21522;
            assert(bits >>> 15 == 0);
            for(let i = 0; i <= 5; i++)this.setFunctionModule(8, i, getBit(bits, i));
            this.setFunctionModule(8, 7, getBit(bits, 6));
            this.setFunctionModule(8, 8, getBit(bits, 7));
            this.setFunctionModule(7, 8, getBit(bits, 8));
            for(let i = 9; i < 15; i++)this.setFunctionModule(14 - i, 8, getBit(bits, i));
            for(let i = 0; i < 8; i++)this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
            for(let i = 8; i < 15; i++)this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
            this.setFunctionModule(8, this.size - 8, true);
        }
        // Draws two copies of the version bits (with its own error correction code),
        // based on this object's version field, iff 7 <= version <= 40.
        drawVersion() {
            if (this.version < 7) return;
            let rem = this.version;
            for(let i = 0; i < 12; i++)rem = rem << 1 ^ (rem >>> 11) * 7973;
            const bits = this.version << 12 | rem;
            assert(bits >>> 18 == 0);
            for(let i = 0; i < 18; i++){
                const color = getBit(bits, i);
                const a = this.size - 11 + i % 3;
                const b = Math.floor(i / 3);
                this.setFunctionModule(a, b, color);
                this.setFunctionModule(b, a, color);
            }
        }
        // Draws a 9*9 finder pattern including the border separator,
        // with the center module at (x, y). Modules can be out of bounds.
        drawFinderPattern(x, y) {
            for(let dy = -4; dy <= 4; dy++){
                for(let dx = -4; dx <= 4; dx++){
                    const dist = Math.max(Math.abs(dx), Math.abs(dy));
                    const xx = x + dx;
                    const yy = y + dy;
                    if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size) this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
                }
            }
        }
        // Draws a 5*5 alignment pattern, with the center module
        // at (x, y). All modules must be in bounds.
        drawAlignmentPattern(x, y) {
            for(let dy = -2; dy <= 2; dy++){
                for(let dx = -2; dx <= 2; dx++)this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
            }
        }
        // Sets the color of a module and marks it as a function module.
        // Only used by the constructor. Coordinates must be in bounds.
        setFunctionModule(x, y, isDark) {
            this.modules[y][x] = isDark;
            this.isFunction[y][x] = true;
        }
        /*-- Private helper methods for constructor: Codewords and masking --*/ // Returns a new byte string representing the given data with the appropriate error correction
        // codewords appended to it, based on this object's version and error correction level.
        addEccAndInterleave(data) {
            const ver = this.version;
            const ecl = this.errorCorrectionLevel;
            if (data.length != _QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
            const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
            const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
            const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
            const numShortBlocks = numBlocks - rawCodewords % numBlocks;
            const shortBlockLen = Math.floor(rawCodewords / numBlocks);
            let blocks = [];
            const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
            for(let i = 0, k = 0; i < numBlocks; i++){
                let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
                k += dat.length;
                const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
                if (i < numShortBlocks) dat.push(0);
                blocks.push(dat.concat(ecc));
            }
            let result = [];
            for(let i = 0; i < blocks[0].length; i++){
                blocks.forEach((block, j)=>{
                    if (i != shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
                });
            }
            assert(result.length == rawCodewords);
            return result;
        }
        // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
        // data area of this QR Code. Function modules need to be marked off before this is called.
        drawCodewords(data) {
            if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            let i = 0;
            for(let right = this.size - 1; right >= 1; right -= 2){
                if (right == 6) right = 5;
                for(let vert = 0; vert < this.size; vert++){
                    for(let j = 0; j < 2; j++){
                        const x = right - j;
                        const upward = (right + 1 & 2) == 0;
                        const y = upward ? this.size - 1 - vert : vert;
                        if (!this.isFunction[y][x] && i < data.length * 8) {
                            this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                            i++;
                        }
                    }
                }
            }
            assert(i == data.length * 8);
        }
        // XORs the codeword modules in this QR Code with the given mask pattern.
        // The function modules must be marked and the codeword bits must be drawn
        // before masking. Due to the arithmetic of XOR, calling applyMask() with
        // the same mask value a second time will undo the mask. A final well-formed
        // QR Code needs exactly one (not zero, two, etc.) mask applied.
        applyMask(mask) {
            if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
            for(let y = 0; y < this.size; y++){
                for(let x = 0; x < this.size; x++){
                    let invert;
                    switch(mask){
                        case 0:
                            invert = (x + y) % 2 == 0;
                            break;
                        case 1:
                            invert = y % 2 == 0;
                            break;
                        case 2:
                            invert = x % 3 == 0;
                            break;
                        case 3:
                            invert = (x + y) % 3 == 0;
                            break;
                        case 4:
                            invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                            break;
                        case 5:
                            invert = x * y % 2 + x * y % 3 == 0;
                            break;
                        case 6:
                            invert = (x * y % 2 + x * y % 3) % 2 == 0;
                            break;
                        case 7:
                            invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable");
                    }
                    if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
                }
            }
        }
        // Calculates and returns the penalty score based on state of this QR Code's current modules.
        // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
        getPenaltyScore() {
            let result = 0;
            for(let y = 0; y < this.size; y++){
                let runColor = false;
                let runX = 0;
                let runHistory = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let x = 0; x < this.size; x++){
                    if (this.modules[y][x] == runColor) {
                        runX++;
                        if (runX == 5) result += _QrCode.PENALTY_N1;
                        else if (runX > 5) result++;
                    } else {
                        this.finderPenaltyAddHistory(runX, runHistory);
                        if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runX = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
            }
            for(let x = 0; x < this.size; x++){
                let runColor = false;
                let runY = 0;
                let runHistory = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let y = 0; y < this.size; y++){
                    if (this.modules[y][x] == runColor) {
                        runY++;
                        if (runY == 5) result += _QrCode.PENALTY_N1;
                        else if (runY > 5) result++;
                    } else {
                        this.finderPenaltyAddHistory(runY, runHistory);
                        if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runY = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
            }
            for(let y = 0; y < this.size - 1; y++){
                for(let x = 0; x < this.size - 1; x++){
                    const color = this.modules[y][x];
                    if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1]) result += _QrCode.PENALTY_N2;
                }
            }
            let dark = 0;
            for (const row of this.modules)dark = row.reduce((sum, color)=>sum + (color ? 1 : 0), dark);
            const total = this.size * this.size;
            const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
            assert(0 <= k && k <= 9);
            result += k * _QrCode.PENALTY_N4;
            assert(0 <= result && result <= 2568888);
            return result;
        }
        /*-- Private helper functions --*/ // Returns an ascending list of positions of alignment patterns for this version number.
        // Each position is in the range [0,177), and are used on both the x and y axes.
        // This could be implemented as lookup table of 40 variable-length lists of integers.
        getAlignmentPatternPositions() {
            if (this.version == 1) return [];
            else {
                const numAlign = Math.floor(this.version / 7) + 2;
                const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
                let result = [
                    6
                ];
                for(let pos = this.size - 7; result.length < numAlign; pos -= step)result.splice(1, 0, pos);
                return result;
            }
        }
        // Returns the number of data bits that can be stored in a QR Code of the given version number, after
        // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
        // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
        static getNumRawDataModules(ver) {
            if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
            let result = (16 * ver + 128) * ver + 64;
            if (ver >= 2) {
                const numAlign = Math.floor(ver / 7) + 2;
                result -= (25 * numAlign - 10) * numAlign - 55;
                if (ver >= 7) result -= 36;
            }
            assert(208 <= result && result <= 29648);
            return result;
        }
        // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
        // QR Code of the given version number and error correction level, with remainder bits discarded.
        // This stateless pure function could be implemented as a (40*4)-cell lookup table.
        static getNumDataCodewords(ver, ecl) {
            return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        }
        // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
        // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
        static reedSolomonComputeDivisor(degree) {
            if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
            let result = [];
            for(let i = 0; i < degree - 1; i++)result.push(0);
            result.push(1);
            let root = 1;
            for(let i = 0; i < degree; i++){
                for(let j = 0; j < result.length; j++){
                    result[j] = _QrCode.reedSolomonMultiply(result[j], root);
                    if (j + 1 < result.length) result[j] ^= result[j + 1];
                }
                root = _QrCode.reedSolomonMultiply(root, 2);
            }
            return result;
        }
        // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
        static reedSolomonComputeRemainder(data, divisor) {
            let result = divisor.map((_)=>0);
            for (const b of data){
                const factor = b ^ result.shift();
                result.push(0);
                divisor.forEach((coef, i)=>result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
            }
            return result;
        }
        // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
        // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
        static reedSolomonMultiply(x, y) {
            if (x >>> 8 != 0 || y >>> 8 != 0) throw new RangeError("Byte out of range");
            let z = 0;
            for(let i = 7; i >= 0; i--){
                z = z << 1 ^ (z >>> 7) * 285;
                z ^= (y >>> i & 1) * x;
            }
            assert(z >>> 8 == 0);
            return z;
        }
        // Can only be called immediately after a light run is added, and
        // returns either 0, 1, or 2. A helper function for getPenaltyScore().
        finderPenaltyCountPatterns(runHistory) {
            const n = runHistory[1];
            assert(n <= this.size * 3);
            const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
            return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
        }
        // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
        finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
            if (currentRunColor) {
                this.finderPenaltyAddHistory(currentRunLength, runHistory);
                currentRunLength = 0;
            }
            currentRunLength += this.size;
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            return this.finderPenaltyCountPatterns(runHistory);
        }
        // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
        finderPenaltyAddHistory(currentRunLength, runHistory) {
            if (runHistory[0] == 0) currentRunLength += this.size;
            runHistory.pop();
            runHistory.unshift(currentRunLength);
        }
    };
    /*-- Constants and tables --*/ // The minimum version number supported in the QR Code Model 2 standard.
    _QrCode.MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    _QrCode.MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    _QrCode.PENALTY_N1 = 3;
    _QrCode.PENALTY_N2 = 3;
    _QrCode.PENALTY_N3 = 40;
    _QrCode.PENALTY_N4 = 10;
    _QrCode.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            7,
            10,
            15,
            20,
            26,
            18,
            20,
            24,
            30,
            18,
            20,
            24,
            26,
            30,
            22,
            24,
            28,
            30,
            28,
            28,
            28,
            28,
            30,
            30,
            26,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Low
        [
            -1,
            10,
            16,
            26,
            18,
            24,
            16,
            18,
            22,
            22,
            26,
            30,
            22,
            22,
            24,
            24,
            28,
            28,
            26,
            26,
            26,
            26,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28,
            28
        ],
        // Medium
        [
            -1,
            13,
            22,
            18,
            26,
            18,
            24,
            18,
            22,
            20,
            24,
            28,
            26,
            24,
            20,
            30,
            24,
            28,
            28,
            26,
            30,
            28,
            30,
            30,
            30,
            30,
            28,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ],
        // Quartile
        [
            -1,
            17,
            28,
            22,
            16,
            22,
            28,
            26,
            26,
            24,
            28,
            24,
            28,
            22,
            24,
            24,
            30,
            28,
            28,
            26,
            28,
            30,
            24,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30,
            30
        ]
    ];
    _QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [
            -1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            4,
            4,
            4,
            4,
            4,
            6,
            6,
            6,
            6,
            7,
            8,
            8,
            9,
            9,
            10,
            12,
            12,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            19,
            20,
            21,
            22,
            24,
            25
        ],
        // Low
        [
            -1,
            1,
            1,
            1,
            2,
            2,
            4,
            4,
            4,
            5,
            5,
            5,
            8,
            9,
            9,
            10,
            10,
            11,
            13,
            14,
            16,
            17,
            17,
            18,
            20,
            21,
            23,
            25,
            26,
            28,
            29,
            31,
            33,
            35,
            37,
            38,
            40,
            43,
            45,
            47,
            49
        ],
        // Medium
        [
            -1,
            1,
            1,
            2,
            2,
            4,
            4,
            6,
            6,
            8,
            8,
            8,
            10,
            12,
            16,
            12,
            17,
            16,
            18,
            21,
            20,
            23,
            23,
            25,
            27,
            29,
            34,
            34,
            35,
            38,
            40,
            43,
            45,
            48,
            51,
            53,
            56,
            59,
            62,
            65,
            68
        ],
        // Quartile
        [
            -1,
            1,
            1,
            2,
            4,
            4,
            4,
            5,
            6,
            8,
            8,
            11,
            11,
            16,
            16,
            18,
            16,
            19,
            21,
            25,
            25,
            25,
            34,
            30,
            32,
            35,
            37,
            40,
            42,
            45,
            48,
            51,
            54,
            57,
            60,
            63,
            66,
            70,
            74,
            77,
            81
        ]
    ];
    let QrCode = _QrCode;
    qrcodegen2.QrCode = _QrCode;
    function appendBits(val, len, bb) {
        if (len < 0 || len > 31 || val >>> len != 0) throw new RangeError("Value out of range");
        for(let i = len - 1; i >= 0; i--)bb.push(val >>> i & 1);
    }
    function getBit(x, i) {
        return (x >>> i & 1) != 0;
    }
    function assert(cond) {
        if (!cond) throw new Error("Assertion error");
    }
    const _QrSegment = class _QrSegment {
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code segment with the given attributes and data.
        // The character count (numChars) must agree with the mode and the bit buffer length,
        // but the constraint isn't checked. The given bit buffer is cloned and stored.
        constructor(mode, numChars, bitData){
            this.mode = mode;
            this.numChars = numChars;
            this.bitData = bitData;
            if (numChars < 0) throw new RangeError("Invalid argument");
            this.bitData = bitData.slice();
        }
        /*-- Static factory functions (mid level) --*/ // Returns a segment representing the given binary data encoded in
        // byte mode. All input byte arrays are acceptable. Any text string
        // can be converted to UTF-8 bytes and encoded as a byte mode segment.
        static makeBytes(data) {
            let bb = [];
            for (const b of data)appendBits(b, 8, bb);
            return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
        }
        // Returns a segment representing the given string of decimal digits encoded in numeric mode.
        static makeNumeric(digits) {
            if (!_QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
            let bb = [];
            for(let i = 0; i < digits.length;){
                const n = Math.min(digits.length - i, 3);
                appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
                i += n;
            }
            return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
        }
        // Returns a segment representing the given text string encoded in alphanumeric mode.
        // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
        // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static makeAlphanumeric(text) {
            if (!_QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let bb = [];
            let i;
            for(i = 0; i + 2 <= text.length; i += 2){
                let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
                temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
                appendBits(temp, 11, bb);
            }
            if (i < text.length) appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
            return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
        }
        // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
        // The result may use various segment modes and switch modes to optimize the length of the bit stream.
        static makeSegments(text) {
            if (text == "") return [];
            else if (_QrSegment.isNumeric(text)) return [
                _QrSegment.makeNumeric(text)
            ];
            else if (_QrSegment.isAlphanumeric(text)) return [
                _QrSegment.makeAlphanumeric(text)
            ];
            else return [
                _QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))
            ];
        }
        // Returns a segment representing an Extended Channel Interpretation
        // (ECI) designator with the given assignment value.
        static makeEci(assignVal) {
            let bb = [];
            if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
            else if (assignVal < 1 << 7) appendBits(assignVal, 8, bb);
            else if (assignVal < 1 << 14) {
                appendBits(2, 2, bb);
                appendBits(assignVal, 14, bb);
            } else if (assignVal < 1e6) {
                appendBits(6, 3, bb);
                appendBits(assignVal, 21, bb);
            } else throw new RangeError("ECI assignment value out of range");
            return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
        }
        // Tests whether the given string can be encoded as a segment in numeric mode.
        // A string is encodable iff each character is in the range 0 to 9.
        static isNumeric(text) {
            return _QrSegment.NUMERIC_REGEX.test(text);
        }
        // Tests whether the given string can be encoded as a segment in alphanumeric mode.
        // A string is encodable iff each character is in the following set: 0 to 9, A to Z
        // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static isAlphanumeric(text) {
            return _QrSegment.ALPHANUMERIC_REGEX.test(text);
        }
        /*-- Methods --*/ // Returns a new copy of the data bits of this segment.
        getData() {
            return this.bitData.slice();
        }
        // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
        // the given version. The result is infinity if a segment has too many characters to fit its length field.
        static getTotalBits(segs, version) {
            let result = 0;
            for (const seg of segs){
                const ccbits = seg.mode.numCharCountBits(version);
                if (seg.numChars >= 1 << ccbits) return Infinity;
                result += 4 + ccbits + seg.bitData.length;
            }
            return result;
        }
        // Returns a new array of bytes representing the given string encoded in UTF-8.
        static toUtf8ByteArray(str) {
            str = encodeURI(str);
            let result = [];
            for(let i = 0; i < str.length; i++){
                if (str.charAt(i) != "%") result.push(str.charCodeAt(i));
                else {
                    result.push(parseInt(str.substring(i + 1, i + 3), 16));
                    i += 2;
                }
            }
            return result;
        }
    };
    /*-- Constants --*/ // Describes precisely all strings that are encodable in numeric mode.
    _QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    _QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    _QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let QrSegment = _QrSegment;
    qrcodegen2.QrSegment = _QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2)=>{
    let QrCode;
    ((QrCode2)=>{
        const _Ecc = class _Ecc {
            // The QR Code can tolerate about 30% erroneous codewords
            /*-- Constructor and fields --*/ constructor(ordinal, formatBits){
                this.ordinal = ordinal;
                this.formatBits = formatBits;
            }
        };
        /*-- Constants --*/ _Ecc.LOW = new _Ecc(0, 1);
        // The QR Code can tolerate about  7% erroneous codewords
        _Ecc.MEDIUM = new _Ecc(1, 0);
        // The QR Code can tolerate about 15% erroneous codewords
        _Ecc.QUARTILE = new _Ecc(2, 3);
        // The QR Code can tolerate about 25% erroneous codewords
        _Ecc.HIGH = new _Ecc(3, 2);
        let Ecc = _Ecc;
        QrCode2.Ecc = _Ecc;
    })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2)=>{
    let QrSegment;
    ((QrSegment2)=>{
        const _Mode = class _Mode {
            /*-- Constructor and fields --*/ constructor(modeBits, numBitsCharCount){
                this.modeBits = modeBits;
                this.numBitsCharCount = numBitsCharCount;
            }
            /*-- Method --*/ // (Package-private) Returns the bit width of the character count field for a segment in
            // this mode in a QR Code at the given version number. The result is in the range [0, 16].
            numCharCountBits(ver) {
                return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
            }
        };
        /*-- Constants --*/ _Mode.NUMERIC = new _Mode(1, [
            10,
            12,
            14
        ]);
        _Mode.ALPHANUMERIC = new _Mode(2, [
            9,
            11,
            13
        ]);
        _Mode.BYTE = new _Mode(4, [
            8,
            16,
            16
        ]);
        _Mode.KANJI = new _Mode(8, [
            8,
            10,
            12
        ]);
        _Mode.ECI = new _Mode(7, [
            0,
            0,
            0
        ]);
        let Mode = _Mode;
        QrSegment2.Mode = _Mode;
    })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
// src/index.tsx
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var ERROR_LEVEL_MAP = {
    L: qrcodegen_default.QrCode.Ecc.LOW,
    M: qrcodegen_default.QrCode.Ecc.MEDIUM,
    Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
    H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
    const ops = [];
    modules.forEach(function(row, y) {
        let start = null;
        row.forEach(function(cell, x) {
            if (!cell && start !== null) {
                ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
                start = null;
                return;
            }
            if (x === row.length - 1) {
                if (!cell) {
                    return;
                }
                if (start === null) {
                    ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
                } else {
                    ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
                }
                return;
            }
            if (cell && start === null) {
                start = x;
            }
        });
    });
    return ops.join("");
}
function excavateModules(modules, excavation) {
    return modules.slice().map((row, y)=>{
        if (y < excavation.y || y >= excavation.y + excavation.h) {
            return row;
        }
        return row.map((cell, x)=>{
            if (x < excavation.x || x >= excavation.x + excavation.w) {
                return cell;
            }
            return false;
        });
    });
}
function getImageSettings(cells, size, margin, imageSettings) {
    if (imageSettings == null) {
        return null;
    }
    const numCells = cells.length + margin * 2;
    const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
    const scale = numCells / size;
    const w = (imageSettings.width || defaultSize) * scale;
    const h = (imageSettings.height || defaultSize) * scale;
    const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
    const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
    const opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
    let excavation = null;
    if (imageSettings.excavate) {
        let floorX = Math.floor(x);
        let floorY = Math.floor(y);
        let ceilW = Math.ceil(w + x - floorX);
        let ceilH = Math.ceil(h + y - floorY);
        excavation = {
            x: floorX,
            y: floorY,
            w: ceilW,
            h: ceilH
        };
    }
    const crossOrigin = imageSettings.crossOrigin;
    return {
        x,
        y,
        h,
        w,
        excavation,
        opacity,
        crossOrigin
    };
}
function getMarginSize(includeMargin, marginSize) {
    if (marginSize != null) {
        return Math.max(Math.floor(marginSize), 0);
    }
    return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}
function useQRCode({ value, level, minVersion, includeMargin, marginSize, imageSettings, size, boostLevel }) {
    let qrcode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useQRCode.useMemo[qrcode]": ()=>{
            const values = Array.isArray(value) ? value : [
                value
            ];
            const segments = values.reduce({
                "useQRCode.useMemo[qrcode].segments": (accum, v)=>{
                    accum.push(...qrcodegen_default.QrSegment.makeSegments(v));
                    return accum;
                }
            }["useQRCode.useMemo[qrcode].segments"], []);
            return qrcodegen_default.QrCode.encodeSegments(segments, ERROR_LEVEL_MAP[level], minVersion, void 0, void 0, boostLevel);
        }
    }["useQRCode.useMemo[qrcode]"], [
        value,
        level,
        minVersion,
        boostLevel
    ]);
    const { cells, margin, numCells, calculatedImageSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useQRCode.useMemo": ()=>{
            let cells2 = qrcode.getModules();
            const margin2 = getMarginSize(includeMargin, marginSize);
            const numCells2 = cells2.length + margin2 * 2;
            const calculatedImageSettings2 = getImageSettings(cells2, size, margin2, imageSettings);
            return {
                cells: cells2,
                margin: margin2,
                numCells: numCells2,
                calculatedImageSettings: calculatedImageSettings2
            };
        }
    }["useQRCode.useMemo"], [
        qrcode,
        size,
        imageSettings,
        includeMargin,
        marginSize
    ]);
    return {
        qrcode,
        margin,
        cells,
        numCells,
        calculatedImageSettings
    };
}
var SUPPORTS_PATH2D = function() {
    try {
        new Path2D().addPath(new Path2D());
    } catch (e) {
        return false;
    }
    return true;
}();
var QRCodeCanvas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function QRCodeCanvas2(props, forwardedRef) {
    const _a = props, { value, size = DEFAULT_SIZE, level = DEFAULT_LEVEL, bgColor = DEFAULT_BGCOLOR, fgColor = DEFAULT_FGCOLOR, includeMargin = DEFAULT_INCLUDEMARGIN, minVersion = DEFAULT_MINVERSION, boostLevel, marginSize, imageSettings } = _a, extraProps = __objRest(_a, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "marginSize",
        "imageSettings"
    ]);
    const _b = extraProps, { style } = _b, otherProps = __objRest(_b, [
        "style"
    ]);
    const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
    const _canvas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const _image = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const setCanvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "QRCodeCanvas.QRCodeCanvas2.useCallback[setCanvasRef]": (node)=>{
            _canvas.current = node;
            if (typeof forwardedRef === "function") {
                forwardedRef(node);
            } else if (forwardedRef) {
                forwardedRef.current = node;
            }
        }
    }["QRCodeCanvas.QRCodeCanvas2.useCallback[setCanvasRef]"], [
        forwardedRef
    ]);
    const [isImgLoaded, setIsImageLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
        value,
        level,
        minVersion,
        boostLevel,
        includeMargin,
        marginSize,
        imageSettings,
        size
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "QRCodeCanvas.QRCodeCanvas2.useEffect": ()=>{
            if (_canvas.current != null) {
                const canvas = _canvas.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                let cellsToDraw = cells;
                const image = _image.current;
                const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
                if (haveImageToRender) {
                    if (calculatedImageSettings.excavation != null) {
                        cellsToDraw = excavateModules(cells, calculatedImageSettings.excavation);
                    }
                }
                const pixelRatio = window.devicePixelRatio || 1;
                canvas.height = canvas.width = size * pixelRatio;
                const scale = size / numCells * pixelRatio;
                ctx.scale(scale, scale);
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, numCells, numCells);
                ctx.fillStyle = fgColor;
                if (SUPPORTS_PATH2D) {
                    ctx.fill(new Path2D(generatePath(cellsToDraw, margin)));
                } else {
                    cells.forEach({
                        "QRCodeCanvas.QRCodeCanvas2.useEffect": function(row, rdx) {
                            row.forEach({
                                "QRCodeCanvas.QRCodeCanvas2.useEffect": function(cell, cdx) {
                                    if (cell) {
                                        ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
                                    }
                                }
                            }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
                        }
                    }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
                }
                if (calculatedImageSettings) {
                    ctx.globalAlpha = calculatedImageSettings.opacity;
                }
                if (haveImageToRender) {
                    ctx.drawImage(image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
                }
            }
        }
    }["QRCodeCanvas.QRCodeCanvas2.useEffect"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "QRCodeCanvas.QRCodeCanvas2.useEffect": ()=>{
            setIsImageLoaded(false);
        }
    }["QRCodeCanvas.QRCodeCanvas2.useEffect"], [
        imgSrc
    ]);
    const canvasStyle = __spreadValues({
        height: size,
        width: size
    }, style);
    let img = null;
    if (imgSrc != null) {
        img = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: imgSrc,
            key: imgSrc,
            style: {
                display: "none"
            },
            onLoad: ()=>{
                setIsImageLoaded(true);
            },
            ref: _image,
            crossOrigin: calculatedImageSettings == null ? void 0 : calculatedImageSettings.crossOrigin
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("canvas", __spreadValues({
        style: canvasStyle,
        height: size,
        width: size,
        ref: setCanvasRef,
        role: "img"
    }, otherProps)), img);
});
QRCodeCanvas.displayName = "QRCodeCanvas";
var QRCodeSVG = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function QRCodeSVG2(props, forwardedRef) {
    const _a = props, { value, size = DEFAULT_SIZE, level = DEFAULT_LEVEL, bgColor = DEFAULT_BGCOLOR, fgColor = DEFAULT_FGCOLOR, includeMargin = DEFAULT_INCLUDEMARGIN, minVersion = DEFAULT_MINVERSION, boostLevel, title, marginSize, imageSettings } = _a, otherProps = __objRest(_a, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "title",
        "marginSize",
        "imageSettings"
    ]);
    const { margin, cells, numCells, calculatedImageSettings } = useQRCode({
        value,
        level,
        minVersion,
        boostLevel,
        includeMargin,
        marginSize,
        imageSettings,
        size
    });
    let cellsToDraw = cells;
    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
            cellsToDraw = excavateModules(cells, calculatedImageSettings.excavation);
        }
        image = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("image", {
            href: imageSettings.src,
            height: calculatedImageSettings.h,
            width: calculatedImageSettings.w,
            x: calculatedImageSettings.x + margin,
            y: calculatedImageSettings.y + margin,
            preserveAspectRatio: "none",
            opacity: calculatedImageSettings.opacity,
            crossOrigin: calculatedImageSettings.crossOrigin
        });
    }
    const fgPath = generatePath(cellsToDraw, margin);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", __spreadValues({
        height: size,
        width: size,
        viewBox: `0 0 ${numCells} ${numCells}`,
        ref: forwardedRef,
        role: "img"
    }, otherProps), !!title && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: bgColor,
        d: `M0,0 h${numCells}v${numCells}H0z`,
        shapeRendering: "crispEdges"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: fgColor,
        d: fgPath,
        shapeRendering: "crispEdges"
    }), image);
});
QRCodeSVG.displayName = "QRCodeSVG";
;
}}),
}]);

//# sourceMappingURL=_b144fe99._.js.map