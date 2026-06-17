module.exports = [
"[project]/Desktop/WED Learning/project_05/food_splitter/app/hooks/useFoodSplitter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFoodSplitter",
    ()=>useFoodSplitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useFoodSplitter() {
    const [persons, setPersons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addPerson = (name)=>{
        if (!name.trim()) return;
        const newPerson = {
            id: crypto.randomUUID(),
            name: name.trim()
        };
        setPersons((prev)=>[
                ...prev,
                newPerson
            ]);
    };
    const removePerson = (id)=>{
        setPersons((prev)=>prev.filter((p)=>p.id !== id));
        setMenuItems((prev)=>prev.map((item)=>({
                    ...item,
                    assignedTo: item.assignedTo.filter((pid)=>pid !== id)
                })));
    };
    const addMenuItem = (name, price)=>{
        if (!name.trim() || price <= 0) return;
        const newItem = {
            id: crypto.randomUUID(),
            name: name.trim(),
            price,
            assignedTo: []
        };
        setMenuItems((prev)=>[
                ...prev,
                newItem
            ]);
    };
    const removeMenuItem = (id)=>{
        setMenuItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const togglePersonInItem = (itemId, personId)=>{
        setMenuItems((prev)=>prev.map((item)=>{
                if (item.id !== itemId) return item;
                const exits = item.assignedTo.includes(personId);
                return {
                    ...item,
                    assignedTo: exits ? item.assignedTo.filter((pid)=>pid !== personId) : [
                        ...item.assignedTo,
                        personId
                    ]
                };
            }));
    };
    const calculateSummary = ()=>{
        return persons.map((person)=>{
            const items = [];
            let total = 0;
            menuItems.forEach((item)=>{
                if (item.assignedTo.includes(person.id)) {
                    const share = item.price / item.assignedTo.length;
                    items.push({
                        name: item.name,
                        share
                    });
                    total += share;
                }
            });
            return {
                personId: person.id,
                personName: person.name,
                total,
                items
            };
        });
    };
    const grandTotal = menuItems.reduce((sum, item)=>sum + item.price, 0);
    return {
        persons,
        menuItems,
        grandTotal,
        addPerson,
        removePerson,
        addMenuItem,
        removeMenuItem,
        togglePersonInItem,
        calculateSummary
    };
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddPersonForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPersonForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddPersonForm({ onAdd }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = ()=>{
        onAdd(name);
        setName("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: name,
                onChange: (e)=>setName(e.target.value),
                onKeyDown: (e)=>{
                    if (e.key === "Enter") handleSubmit();
                },
                placeholder: "Enter person's name",
                className: "flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            }, void 0, false, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddPersonForm.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                className: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
                children: "Add Person"
            }, void 0, false, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddPersonForm.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddPersonForm.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMenuForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddMenuForm({ onAdd }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = ()=>{
        onAdd(name, parseFloat(price));
        setName("");
        setPrice("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: name,
                onChange: (e)=>setName(e.target.value),
                placeholder: "name of food",
                className: "flex-1 min-w-32 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            }, void 0, false, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: price,
                onChange: (e)=>setPrice(e.target.value),
                placeholder: "price",
                className: "w-28 border-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            }, void 0, false, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSubmit,
                    className: "bg-orange-500 text-white px-4 py-2 round-lg text-sm hover:bg-orange-600 transition",
                    children: "+ Add"
                }, void 0, false, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx",
                    lineNumber: 20,
                    columnNumber: 15
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function MenuItemCard({ item, persons, onToggle, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border rounded-xl p-4 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-500 font-semibold",
                                children: [
                                    "฿",
                                    item.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onRemove(item.id),
                                className: "text-red-400 hover:text-red-600 text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: persons.map((person)=>{
                    const selected = item.assignedTo.includes(person.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggle(item.id, person.id),
                        className: `px-3 py-1 rounded-full text-xs border transition ${selected ? "bg-green-500 text-white border-green-500" : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"}`,
                        children: [
                            selected ? "✓" : "+",
                            " ",
                            person.name
                        ]
                    }, person.id, true, {
                        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            item.assignedTo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 mt-2",
                children: [
                    "หารกัน ",
                    item.assignedTo.length,
                    " คน = คนละ ฿",
                    (item.price / item.assignedTo.length).toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SummaryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SummaryCard({ summaries, grandTotal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            summaries.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-gray-700 rounded-xl p-4 bg-gray-800 shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-bold text-white tracking-wide",
                                    children: s.personName
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-extrabold text-orange-400 bg-gray-700 px-3 py-1 rounded-lg",
                                    children: [
                                        "฿",
                                        s.total.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-600 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1",
                            children: s.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex justify-between text-sm text-gray-300 bg-gray-700 rounded-lg px-3 py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                " ",
                                                item.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-300 font-medium",
                                            children: [
                                                "฿",
                                                item.share.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, s.personId, true, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-orange-500 rounded-xl bg-gray-900 px-4 py-3 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-base",
                        children: " รวมทั้งหมด"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-orange-400 font-extrabold text-xl",
                        children: [
                            "฿",
                            grandTotal.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$hooks$2f$useFoodSplitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/app/hooks/useFoodSplitter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$AddPersonForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddPersonForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$AddMenuForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/app/components/AddMenuForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$MenuItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/app/components/MenuItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$SummaryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WED Learning/project_05/food_splitter/app/components/SummaryCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("setup");
    const { persons, menuItems, grandTotal, addPerson, removePerson, addMenuItem, removeMenuItem, togglePersonInItem, calculateSummary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$hooks$2f$useFoodSplitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFoodSplitter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-900 py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-lg mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-white font-bold text-center mb-6 text-xl",
                    children: "หารค่าอาหาร"
                }, void 0, false, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex rounded-xl overflow-hidden border border-gray-700 mb-6",
                    children: [
                        "setup",
                        "summary"
                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab(t),
                            className: `flex-1 py-2 text-sm font-medium transition ${tab === t ? "bg-orange-500 text-white" : "bg-gray-800 text-gray-400 hover:text-white"}`,
                            children: t === "setup" ? "ตั้งค่าบิล" : "สรุปยอด"
                        }, t, false, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                tab === "setup" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-semibold mb-3",
                                    children: "คนที่ร่วมกินด้วย"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$AddPersonForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onAdd: addPerson
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-3",
                                    children: persons.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm",
                                            children: [
                                                p.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removePerson(p.id),
                                                    className: "hover:text-red-400",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-semibold mb-3",
                                    children: "รายการอาหาร"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$AddMenuForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onAdd: addMenuItem
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-3",
                                    children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$MenuItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            item: item,
                                            persons: persons,
                                            onToggle: togglePersonInItem,
                                            onRemove: removeMenuItem
                                        }, item.id, false, {
                                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white font-semibold mb-4",
                            children: "สรุปยอดแต่ละคน"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WED__Learning$2f$project_05$2f$food_splitter$2f$app$2f$components$2f$SummaryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            summaries: calculateSummary(),
                            grandTotal: grandTotal
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WED Learning/project_05/food_splitter/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/WED Learning/project_05/food_splitter/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Desktop_WED%20Learning_project_05_food_splitter_0f9uifz._.js.map