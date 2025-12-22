module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/components/PropertyCard.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
const PropertyCard = ({ property })=>{
    const getRateDisplay = ()=>{
        const { rates } = property;
        if (rates.monthly) {
            return `$${rates.monthly.toLocaleString()}/mo`;
        } else if (rates.weekly) {
            return `$${rates.weekly.toLocaleString()}/wk`;
        } else {
            return `$${rates.nightly.toLocaleString()}/nt`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-md relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: `/images/properties/${property.images[0]}`,
                alt: "",
                width: "0",
                height: "0",
                sizes: "100vw",
                className: "w-full h-auto rounded-t-xl"
            }, void 0, false, {
                fileName: "[project]/app/components/PropertyCard.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left md:text-center lg:text-left mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: property.type
                            }, void 0, false, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: property.name
                            }, void 0, false, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right",
                        children: getRateDisplay()
                    }, void 0, false, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4 text-gray-500 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaBed"], {
                                        className: "md:hidden lg:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    property.beds,
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "md:hidden lg:inline",
                                        children: "Beds"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaBath"], {
                                        className: "md:hidden lg:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    property.baths,
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "md:hidden lg:inline",
                                        children: "Baths"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaRulerCombined"], {
                                        className: "md:hidden lg:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    property.square_feet,
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "md:hidden lg:inline",
                                        children: "sqft"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4 text-green-900 text-sm mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaMoneyBill"], {
                                        className: "md:hidden lg:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Weekly"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaMoneyBill"], {
                                        className: "md:hidden lg:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Monthly"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-100 mb-5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex align-middle gap-2 mb-4 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaMapMarker"], {
                                        className: "text-orange-700 mt-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-700",
                                        children: [
                                            ' ',
                                            property.location.city,
                                            ", ",
                                            property.location.state,
                                            ' '
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PropertyCard.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/properties/${property._id}`,
                                className: "h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm",
                                children: "Details"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PropertyCard.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PropertyCard.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PropertyCard.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PropertyCard.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PropertyCard;
}),
"[project]/properties.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"1","owner":"1","name":"Boston Commons Retreat","type":"Apartment","description":"This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.","location":{"street":"120 Tremont Street","city":"Boston","state":"MA","zipcode":"02108"},"beds":2,"baths":1,"square_feet":1500,"amenities":["Wifi","Full kitchen","Washer & Dryer","Free Parking","Hot Tub","24/7 Security","Wheelchair Accessible","Elevator Access","Dishwasher","Gym/Fitness Center","Air Conditioning","Balcony/Patio","Smart TV","Coffee Maker"],"rates":{"weekly":1100,"monthly":4200},"seller_info":{"name":"John Doe","email":"john@gmail.com","phone":"617-555-5555"},"images":["a1.jpg","a2.jpg","a3.jpg"],"is_featured":false,"createdAt":"2024-01-01T00:00:00.000Z","updatedAt":"2024-01-01T00:00:00.000Z"},{"_id":"2","owner":"1","name":"Cozy Downtown Loft","type":"Apartment","description":"A cozy downtown loft with great city views.","location":{"street":"45 Main Street","city":"New York","state":"NY","zipcode":"10001"},"beds":1,"baths":1,"square_feet":1800,"amenities":["Wifi","Full kitchen","Washer & Dryer","Free Parking","Hot Tub","24/7 Security","Wheelchair Accessible","Elevator Access","Dishwasher","High-Speed Internet","Air Conditioning","Smart TV","Outdoor Grill/BBQ"],"rates":{"weekly":1000,"monthly":4000},"seller_info":{"name":"Jane Smith","email":"jane@gmail.com","phone":"212-555-5555"},"images":["b1.jpg","b2.jpg","b3.jpg"],"is_featured":false,"createdAt":"2024-01-02T00:00:00.000Z","updatedAt":"2024-01-02T00:00:00.000Z"},{"_id":"3","owner":"2","name":"Luxury Condo with a View","type":"Condo","description":"Experience luxury in this stunning condo with breathtaking views.","location":{"street":"500 Lux Lane","city":"Los Angeles","state":"CA","zipcode":"90001"},"beds":3,"baths":2,"square_feet":2200,"amenities":["Wifi","Full kitchen","Washer & Dryer","Free Parking","Hot Tub","24/7 Security","Wheelchair Accessible","Elevator Access","Dishwasher","Swimming Pool","Gym/Fitness Center","Air Conditioning","Smart TV","Coffee Maker"],"rates":{"nightly":200,"weekly":750,"monthly":3300},"seller_info":{"name":"David Johnson","email":"david@gmail.com","phone":"213-555-5555"},"images":["c1.jpg","c2.jpg","c3.jpg"],"is_featured":false,"createdAt":"2024-01-03T00:00:00.000Z","updatedAt":"2024-01-03T00:00:00.000Z"},{"_id":"4","owner":"2","name":"Charming Cottage Getaway","type":"Cottage Or Cabin","description":"Escape to this charming cottage for a peaceful retreat.","location":{"street":"123 Countryside Lane","city":"Austin","state":"TX","zipcode":"78701"},"beds":1,"baths":1,"square_feet":900,"amenities":["Fireplace","Outdoor Grill/BBQ","Balcony/Patio","Coffee Maker"],"rates":{"weekly":2000},"seller_info":{"name":"Emily Davis","email":"emily@gmail.com","phone":"512-555-5555"},"images":["d1.jpg","d2.jpg","d3.jpg"],"is_featured":false,"createdAt":"2024-01-04T00:00:00.000Z","updatedAt":"2024-01-04T00:00:00.000Z"},{"_id":"5","owner":"3","name":"Modern Downtown Studio","type":"Studio","description":"Stay in style in this modern downtown studio apartment.","location":{"street":"75 Urban Avenue","city":"Chicago","state":"IL","zipcode":"60601"},"beds":1,"baths":1,"square_feet":900,"amenities":["High-Speed Internet","Smart TV","Air Conditioning","Gym/Fitness Center","Outdoor Grill/BBQ"],"rates":{"weekly":1100,"monthly":4200},"seller_info":{"name":"Michael Brown","email":"michael@gmail.com","phone":"312-555-5555"},"images":["e1.jpg","e2.jpg","e3.jpg"],"is_featured":true,"createdAt":"2024-01-05T00:00:00.000Z","updatedAt":"2024-01-05T00:00:00.000Z"},{"_id":"6","owner":"3","name":"Seaside Retreat","type":"House","description":"Escape to this seaside house for a relaxing getaway.","location":{"street":"456 Oceanfront Drive","city":"Miami","state":"FL","zipcode":"33101"},"beds":4,"baths":3,"square_feet":2800,"amenities":["Beach Access","Swimming Pool","Balcony/Patio","Smart TV","Outdoor Grill/BBQ"],"rates":{"nightly":500,"weekly":2500},"seller_info":{"name":"Sarah Wilson","email":"sarah@gmail.com","phone":"305-555-5555"},"images":["f1.jpg","f2.jpg","f3.jpg"],"is_featured":true,"createdAt":"2024-01-06T00:00:00.000Z","updatedAt":"2024-01-06T00:00:00.000Z"},{"_id":"7","owner":"4","name":"Rustic Cabin in the Woods","type":"Cottage Or Cabin","description":"Experience nature in this cozy rustic cabin.","location":{"street":"789 Forest Lane","city":"Denver","state":"CO","zipcode":"80201"},"beds":2,"baths":1,"square_feet":1100,"amenities":["Fireplace","Outdoor Grill/BBQ","Hiking Trails Access","Pet-Friendly"],"rates":{"nightly":475,"weekly":2000},"seller_info":{"name":"Robert Anderson","email":"robert@gmail.com","phone":"303-555-5555"},"images":["g1.jpg","g2.jpg","g3.jpg"],"is_featured":false,"createdAt":"2024-01-07T00:00:00.000Z","updatedAt":"2024-01-07T00:00:00.000Z"},{"_id":"8","owner":"5","name":"Ski-In/Ski-Out Chalet","type":"Chalet","description":"Hit the slopes from this cozy ski-in/ski-out chalet.","location":{"street":"321 Mountain Road","city":"Aspen","state":"CO","zipcode":"81611"},"beds":3,"baths":2,"square_feet":1800,"amenities":["Ski Equipment Storage","Fireplace","Balcony/Patio","Smart TV"],"rates":{"nightly":300,"weekly":1100},"seller_info":{"name":"Jennifer Martin","email":"jennifer@gmail.com","phone":"970-555-5555"},"images":["h1.jpg","h2.jpg","h3.jpg"],"is_featured":false,"createdAt":"2024-01-08T00:00:00.000Z","updatedAt":"2024-01-08T00:00:00.000Z"},{"_id":"9","owner":"6","name":"Mountain View Retreat","type":"House","description":"Enjoy stunning mountain views from this spacious retreat.","location":{"street":"600 Summit Drive","city":"Boulder","state":"CO","zipcode":"80301"},"beds":4,"baths":3,"square_feet":2400,"amenities":["Mountain View","Hiking Trails Access","Air Conditioning","Smart TV","Outdoor Grill/BBQ"],"rates":{"weekly":1000,"monthly":3800},"seller_info":{"name":"Lisa Taylor","email":"lisa@gmail.com","phone":"303-555-5555"},"images":["i1.jpg","i2.jpg","i3.jpg"],"is_featured":false,"createdAt":"2024-01-09T00:00:00.000Z","updatedAt":"2024-01-09T00:00:00.000Z"},{"_id":"10","owner":"7","name":"Historic Downtown Loft","type":"Apartment","description":"Step back in time with a stay in this historic downtown loft.","location":{"street":"123 History Lane","city":"Philadelphia","state":"PA","zipcode":"19101"},"beds":2,"baths":1,"square_feet":1200,"amenities":["High-Speed Internet","Air Conditioning","Smart TV","Coffee Maker"],"rates":{"weekly":550,"monthly":2100},"seller_info":{"name":"Matthew Harris","email":"matthew@gmail.com","phone":"215-555-5555"},"images":["j1.jpg","j2.jpg","j3.jpg"],"is_featured":false,"createdAt":"2024-01-10T00:00:00.000Z","updatedAt":"2024-01-10T00:00:00.000Z"}]);}),
"[project]/app/properties/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PropertyCard.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$properties$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/properties.json (json)");
;
;
;
const PropertiesPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-xl lg:container m-auto PX-4 PY-6",
            children: !__TURBOPACK__imported__module__$5b$project$5d2f$properties$2e$json__$28$json$29$__["default"].length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No properties found"
            }, void 0, false, {
                fileName: "[project]/app/properties/page.jsx",
                lineNumber: 10,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$properties$2e$json__$28$json$29$__["default"].map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        property: property
                    }, property._id, false, {
                        fileName: "[project]/app/properties/page.jsx",
                        lineNumber: 14,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/properties/page.jsx",
                lineNumber: 12,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/properties/page.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/properties/page.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PropertiesPage;
}),
"[project]/app/properties/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/properties/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4a8ff95._.js.map