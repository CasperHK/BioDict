(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/frontend/components/TopNavBar.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "logo": "TopNavBar-module__LJj60G__logo",
  "navLinks": "TopNavBar-module__LJj60G__navLinks",
  "navbar": "TopNavBar-module__LJj60G__navbar",
});
}),
"[project]/src/frontend/components/TopNavBar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/next@15.5.3_6qpiazawufkd5n22ferrdsggza/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/frontend/components/TopNavBar.module.css [client] (css module)");
;
;
;
const TopNavBar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].navbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BioDict"
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].navLinks,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/organisms",
                            children: "Organisms"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/3d-models",
                            children: "3D Models"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/frontend/components/TopNavBar.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/frontend/components/TopNavBar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TopNavBar;
const __TURBOPACK__default__export__ = TopNavBar;
var _c;
__turbopack_context__.k.register(_c, "TopNavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/frontend/components/Footer.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "Footer-module__MTV1iq__content",
  "footer": "Footer-module__MTV1iq__footer",
  "links": "Footer-module__MTV1iq__links",
});
}),
"[project]/src/frontend/components/Footer.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/frontend/components/Footer.module.css [client] (css module)");
;
;
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " BioDict. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/frontend/components/Footer.tsx",
                    lineNumber: 7,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].links,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/about",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/Footer.tsx",
                            lineNumber: 9,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        " | ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/components/Footer.tsx",
                            lineNumber: 9,
                            columnNumber: 38
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/frontend/components/Footer.tsx",
                    lineNumber: 8,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/frontend/components/Footer.tsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/frontend/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/frontend/layouts/DashboardLayout.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dashboardContent": "DashboardLayout-module__YVuIta__dashboardContent",
  "dashboardRoot": "DashboardLayout-module__YVuIta__dashboardRoot",
});
}),
"[project]/src/frontend/layouts/DashboardLayout.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/components/TopNavBar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/components/Footer.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$DashboardLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/frontend/layouts/DashboardLayout.module.css [client] (css module)");
;
;
;
;
const DashboardLayout = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$DashboardLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].dashboardRoot,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$TopNavBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/frontend/layouts/DashboardLayout.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$DashboardLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].dashboardContent,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/frontend/layouts/DashboardLayout.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$components$2f$Footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/frontend/layouts/DashboardLayout.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/frontend/layouts/DashboardLayout.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DashboardLayout;
const __TURBOPACK__default__export__ = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/frontend/layouts/OrganismsLayout.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "infoBox": "OrganismsLayout-module__62Ii5W__infoBox",
  "mainContent": "OrganismsLayout-module__62Ii5W__mainContent",
  "pageLayout": "OrganismsLayout-module__62Ii5W__pageLayout",
  "sideMenuLeft": "OrganismsLayout-module__62Ii5W__sideMenuLeft",
  "sideMenuRight": "OrganismsLayout-module__62Ii5W__sideMenuRight",
});
}),
"[project]/src/frontend/layouts/OrganismsLayout.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/frontend/layouts/OrganismsLayout.module.css [client] (css module)");
;
;
const OrganismsLayout = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageLayout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].sideMenuLeft,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#mammals",
                                    children: "Mammals"
                                }, void 0, false, {
                                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#birds",
                                    children: "Birds"
                                }, void 0, false, {
                                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                    lineNumber: 14,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#plants",
                                    children: "Plants"
                                }, void 0, false, {
                                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#bacteria",
                                    children: "Bacteria"
                                }, void 0, false, {
                                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                    lineNumber: 11,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].sideMenuRight,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].infoBox,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "Did you know?"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                            lineNumber: 23,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "There are millions of known species on Earth, and new ones are discovered every year!"
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                            lineNumber: 24,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/frontend/layouts/OrganismsLayout.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OrganismsLayout;
const __TURBOPACK__default__export__ = OrganismsLayout;
var _c;
__turbopack_context__.k.register(_c, "OrganismsLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/frontend/pages/organism/organism.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "detailContainer": "organism-module__Scuyhq__detailContainer",
  "notFound": "organism-module__Scuyhq__notFound",
});
}),
"[project]/src/frontend/pages/organism/[id].tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrganismDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/next@15.5.3_6qpiazawufkd5n22ferrdsggza/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$DashboardLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/layouts/DashboardLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/layouts/OrganismsLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@heroui+card@2.2.24_beo2hdrzbh5rx6rxv6xbh5cen4/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@heroui+card@2.2.24_beo2hdrzbh5rx6rxv6xbh5cen4/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@heroui+card@2.2.24_beo2hdrzbh5rx6rxv6xbh5cen4/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$pages$2f$organism$2f$organism$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/frontend/pages/organism/organism.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Example data structure for organisms (should be replaced with real data or fetched from backend)
const organismsData = [
    {
        code: 'homo-sapiens',
        name: 'Homo sapiens',
        classification: 'Mammal',
        description: 'Modern human.',
        scientificName: 'Homo sapiens',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Primates',
        family: 'Hominidae',
        genus: 'Homo',
        habitat: 'Various',
        distribution: 'Worldwide',
        modelUrl: '/models/homo-sapiens.glb'
    },
    {
        code: 'pan-troglodytes',
        name: 'Pan troglodytes',
        classification: 'Mammal',
        description: 'Chimpanzee.',
        scientificName: 'Pan troglodytes',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Primates',
        family: 'Hominidae',
        genus: 'Pan',
        habitat: 'Tropical forests',
        distribution: 'Central Africa',
        modelUrl: '/models/pan-troglodytes.glb'
    },
    {
        code: 'gallus-gallus',
        name: 'Gallus gallus',
        classification: 'Bird',
        description: 'Chicken.',
        scientificName: 'Gallus gallus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Galliformes',
        family: 'Phasianidae',
        genus: 'Gallus',
        habitat: 'Domesticated',
        distribution: 'Worldwide',
        modelUrl: '/models/gallus-gallus.glb'
    },
    {
        code: 'arabidopsis-thaliana',
        name: 'Arabidopsis thaliana',
        classification: 'Plant',
        description: 'Thale cress.',
        scientificName: 'Arabidopsis thaliana',
        kingdom: 'Plantae',
        phylum: 'Tracheophyta',
        class: 'Magnoliopsida',
        order: 'Brassicales',
        family: 'Brassicaceae',
        genus: 'Arabidopsis',
        habitat: 'Fields, roadsides',
        distribution: 'Eurasia, Africa',
        modelUrl: '/models/arabidopsis-thaliana.glb'
    },
    {
        code: 'escherichia-coli',
        name: 'Escherichia coli',
        classification: 'Bacteria',
        description: 'Common gut bacterium.',
        scientificName: 'Escherichia coli',
        kingdom: 'Bacteria',
        phylum: 'Proteobacteria',
        class: 'Gammaproteobacteria',
        order: 'Enterobacterales',
        family: 'Enterobacteriaceae',
        genus: 'Escherichia',
        habitat: 'Intestines of warm-blooded organisms',
        distribution: 'Worldwide',
        modelUrl: '/models/escherichia-coli.glb'
    }
];
function OrganismDetailPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    // Find by code or index
    const organism = organismsData.find((org, idx)=>org.code === id || String(idx) === id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$DashboardLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$layouts$2f$OrganismsLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            children: !organism ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$pages$2f$organism$2f$organism$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].notFound,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Organism Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The organism you are looking for does not exist."
                    }, void 0, false, {
                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                lineNumber: 86,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$pages$2f$organism$2f$organism$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].detailContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0
                                },
                                children: organism.name
                            }, void 0, false, {
                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$heroui$2b$card$40$2$2e$2$2e$24_beo2hdrzbh5rx6rxv6xbh5cen4$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '1rem 0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        style: {
                                            marginBottom: '2rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Scientific Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.scientificName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 99,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Classification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.classification
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 58
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Kingdom"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.kingdom
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Phylum"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.phylum
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 102,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Class"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.class
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Order"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.order
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 104,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Family"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.family
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 105,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Genus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.genus
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 106,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Habitat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.habitat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Distribution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.distribution
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: organism.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$pages$2f$organism$2f$organism$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].modelSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "3D Model"
                                            }, void 0, false, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("model-viewer", {
                                                src: organism.modelUrl,
                                                alt: organism.name + ' 3D model',
                                                "auto-rotate": true,
                                                "camera-controls": true,
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                    background: '#f5f5f5'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.95rem',
                                                    color: '#888'
                                                },
                                                children: "Interactive 3D model (GLB/GLTF format)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                        lineNumber: 111,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                                lineNumber: 97,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                    lineNumber: 92,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/frontend/pages/organism/[id].tsx",
                lineNumber: 91,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/frontend/pages/organism/[id].tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/frontend/pages/organism/[id].tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(OrganismDetailPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrganismDetailPage;
var _c;
__turbopack_context__.k.register(_c, "OrganismDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/frontend/pages/organism/[id].tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/organism/[id]";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/src/frontend/pages/organism/[id].tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/src/frontend/pages/organism/[id].tsx\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/src/frontend/pages/organism/[id].tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__48d75caa._.js.map