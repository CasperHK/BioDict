(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/utils.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_context__.s([
    "menuData",
    ()=>$fc79756100351201$export$6f49b4016bfc8d56
]);
const $fc79756100351201$export$6f49b4016bfc8d56 = new WeakMap();
;
 //# sourceMappingURL=utils.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/useMenuItem.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenuItem",
    ()=>$a2e5df62f93c7633$export$9d32628fc2aea7da
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$utils$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/utils.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/openLink.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/useId.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/mergeProps.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$stately$2b$collections$40$3$2e$12$2e$7_react$40$19$2e$1$2e$1$2f$node_modules$2f40$react$2d$stately$2f$collections$2f$dist$2f$getItemCount$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-stately+collections@3.12.7_react@19.1.1/node_modules/@react-stately/collections/dist/getItemCount.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/usePress.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useHover.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useKeyboard.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useFocus.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$selection$40$3$2e$25$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$selection$2f$dist$2f$useSelectableItem$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+selection@3.25.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/selection/dist/useSelectableItem.mjs [client] (ecmascript)");
;
;
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { id: id, key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: onPressStart, onPressUp: pressUpProp, onPress: onPress, onPressChange: pressChangeProp, onPressEnd: onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : selectionManager.isSelected(key);
    let data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$utils$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["menuData"]).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let performAction = ()=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key);
        }
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSlotId"])();
    let descriptionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSlotId"])();
    let keyboardId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSlotId"])();
    let ariaProps = {
        id: id,
        'aria-disabled': isDisabled || undefined,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps['aria-setsize'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$stately$2b$collections$40$3$2e$12$2e$7_react$40$19$2e$1$2e$1$2f$node_modules$2f40$react$2d$stately$2f$collections$2f$dist$2f$getItemCount$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["getItemCount"])(state.collection);
    }
    let isPressedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let onPressChange = (isPressed)=>{
        pressChangeProp === null || pressChangeProp === void 0 ? void 0 : pressChangeProp(isPressed);
        isPressedRef.current = isPressed;
    };
    let interaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') interaction.current = {
            pointerType: e.pointerType
        };
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            if (!isPressedRef.current) e.target.click();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let onClick = (e)=>{
        var _interaction_current, _interaction_current1;
        onClickProp === null || onClickProp === void 0 ? void 0 : onClickProp(e);
        performAction();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["handleLinkClick"])(e, router, item.props.href, item === null || item === void 0 ? void 0 : item.props.routerOptions);
        let shouldClose = ((_interaction_current = interaction.current) === null || _interaction_current === void 0 ? void 0 : _interaction_current.pointerType) === 'keyboard' ? ((_interaction_current1 = interaction.current) === null || _interaction_current1 === void 0 ? void 0 : _interaction_current1.key) === 'Enter' || selectionManager.selectionMode === 'none' || selectionManager.isLink(key) : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key);
        shouldClose = closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : shouldClose;
        if (onClose && !isTrigger && shouldClose) onClose();
        interaction.current = null;
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$selection$40$3$2e$25$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$selection$2f$dist$2f$useSelectableItem$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelectableItem"])({
        id: id,
        selectionManager: selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none',
        shouldUseVirtualFocus: data.shouldUseVirtualFocus
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["usePress"])({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["isFocusVisible"])() && !(isTriggerExpanded && hasPopup)) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useKeyboard"])({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case ' ':
                    interaction.current = {
                        pointerType: 'keyboard',
                        key: ' '
                    };
                    e.target.click();
                    break;
                case 'Enter':
                    interaction.current = {
                        pointerType: 'keyboard',
                        key: 'Enter'
                    };
                    // Trigger click unless this is a link. Links trigger click natively.
                    if (e.target.tagName !== 'A') e.target.click();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useFocus"])({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(item === null || item === void 0 ? void 0 : item.props);
    delete domProps.id;
    let linkProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useLinkProps"])(item === null || item === void 0 ? void 0 : item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["mergeProps"])(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-collection': itemProps['data-collection'],
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps, data.shouldUseVirtualFocus || isTrigger ? {
                onMouseDown: (e)=>e.preventDefault()
            } : undefined, isDisabled ? undefined : {
                onClick: onClick
            }),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && selectionManager.isFocused && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["isFocusVisible"])() && !isTriggerExpanded,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}
;
 //# sourceMappingURL=useMenuItem.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/useMenuSection.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenuSection",
    ()=>$3e5eb2498db5b506$export$73f7a44322579622
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/useId.mjs [client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useId"])();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}
;
 //# sourceMappingURL=useMenuSection.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/useMenu.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenu",
    ()=>$d5336fe17ce95402$export$38eaa17faae8f579
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/next@15.5.3_6qpiazawufkd5n22ferrdsggza/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$utils$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/utils.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/mergeProps.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$selection$40$3$2e$25$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$selection$2f$dist$2f$useSelectableList$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+selection@3.25.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/selection/dist/useSelectableList.mjs [client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby'] && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$selection$40$3$2e$25$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$selection$2f$dist$2f$useSelectableList$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelectableList"])({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: 'override'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$utils$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["menuData"]).set(state, {
        onClose: props.onClose,
        onAction: props.onAction,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus
    });
    return {
        menuProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["mergeProps"])(domProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                var _listProps_onKeyDown;
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) (_listProps_onKeyDown = listProps.onKeyDown) === null || _listProps_onKeyDown === void 0 ? void 0 : _listProps_onKeyDown.call(listProps, e);
            }
        })
    };
}
;
 //# sourceMappingURL=useMenu.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ar-AE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c0398ad35c3639b7$exports
]);
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
;
 //# sourceMappingURL=ar-AE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/bg-BG.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$7af657c4165927c3$exports
]);
var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
;
 //# sourceMappingURL=bg-BG.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/cs-CZ.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$d95d4da6d531ab81$exports
]);
var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
;
 //# sourceMappingURL=cs-CZ.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/da-DK.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$24ebda9c775dca17$exports
]);
var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
;
 //# sourceMappingURL=da-DK.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/de-DE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$743e0dfca6cab1e9$exports
]);
var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
;
 //# sourceMappingURL=de-DE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/el-GR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a2f41026e05f1c84$exports
]);
var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
;
 //# sourceMappingURL=el-GR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/en-US.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$43b800e97c901737$exports
]);
var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": "Long press or press Alt + ArrowDown to open menu"
};
;
 //# sourceMappingURL=en-US.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/es-ES.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$442f5f6ac211e29f$exports
]);
var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
;
 //# sourceMappingURL=es-ES.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/et-EE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$dff280acfeb2d8ac$exports
]);
var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
;
 //# sourceMappingURL=et-EE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fi-FI.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$51608325613944d7$exports
]);
var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
;
 //# sourceMappingURL=fi-FI.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fr-FR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c4a1b1eabeaa87be$exports
]);
var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
;
 //# sourceMappingURL=fr-FR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/he-IL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8c74815cdee18d1b$exports
]);
var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
;
 //# sourceMappingURL=he-IL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hr-HR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$fd0e9ef6a7fe0ec9$exports
]);
var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
;
 //# sourceMappingURL=hr-HR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hu-HU.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a89a74a39eba465a$exports
]);
var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
;
 //# sourceMappingURL=hu-HU.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/it-IT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$edc7c66594a0ae8a$exports
]);
var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
;
 //# sourceMappingURL=it-IT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ja-JP.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f1ab51510712db52$exports
]);
var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": "長押しまたは Alt+下矢印キーでメニューを開く"
};
;
 //# sourceMappingURL=ja-JP.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ko-KR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f9b672d9b82fa3d6$exports
]);
var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
;
 //# sourceMappingURL=ko-KR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lt-LT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a385f3910feda499$exports
]);
var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
;
 //# sourceMappingURL=lt-LT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lv-LV.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$4f1bde932c441789$exports
]);
var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
;
 //# sourceMappingURL=lv-LV.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nb-NO.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$914a51a8a594d5be$exports
]);
var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
;
 //# sourceMappingURL=nb-NO.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nl-NL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$89aaf803103bb500$exports
]);
var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
;
 //# sourceMappingURL=nl-NL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pl-PL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c685891476dbaaca$exports
]);
var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
;
 //# sourceMappingURL=pl-PL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-BR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$885879b9b10c2959$exports
]);
var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
;
 //# sourceMappingURL=pt-BR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-PT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$6b39616688a51692$exports
]);
var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
;
 //# sourceMappingURL=pt-PT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ro-RO.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f26362aed63f47e2$exports
]);
var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
;
 //# sourceMappingURL=ro-RO.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ru-RU.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$06cbade644558bf0$exports
]);
var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
;
 //# sourceMappingURL=ru-RU.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sk-SK.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$0a391ff68f9d59b1$exports
]);
var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
;
 //# sourceMappingURL=sk-SK.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sl-SI.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8193cf0e649c7928$exports
]);
var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
;
 //# sourceMappingURL=sl-SI.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sr-SP.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f398debcce5a5c55$exports
]);
var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
;
 //# sourceMappingURL=sr-SP.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sv-SE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$9e9fef000aa4c013$exports
]);
var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
;
 //# sourceMappingURL=sv-SE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/tr-TR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c016c8183bbe3d68$exports
]);
var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
;
 //# sourceMappingURL=tr-TR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/uk-UA.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$ca4f6c8462244e62$exports
]);
var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
;
 //# sourceMappingURL=uk-UA.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-CN.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$2d9960c02ccac927$exports
]);
var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": "长按或按 Alt + 向下方向键以打开菜单"
};
;
 //# sourceMappingURL=zh-CN.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-TW.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f1b682a4c8c5631c$exports
]);
var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": "長按或按 Alt+向下鍵以開啟功能表"
};
;
 //# sourceMappingURL=zh-TW.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/intlStrings.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$2cbb7ca666678a14$exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ar$2d$AE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ar-AE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$bg$2d$BG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/bg-BG.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$cs$2d$CZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/cs-CZ.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$da$2d$DK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/da-DK.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$de$2d$DE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/de-DE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$el$2d$GR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/el-GR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$en$2d$US$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/en-US.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$es$2d$ES$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/es-ES.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$et$2d$EE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/et-EE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fi$2d$FI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fi-FI.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fr$2d$FR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fr-FR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$he$2d$IL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/he-IL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hr$2d$HR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hr-HR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hu$2d$HU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hu-HU.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$it$2d$IT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/it-IT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ja$2d$JP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ja-JP.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ko$2d$KR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ko-KR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lt$2d$LT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lt-LT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lv$2d$LV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lv-LV.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nb$2d$NO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nb-NO.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nl$2d$NL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nl-NL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pl$2d$PL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pl-PL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$BR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-BR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$PT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-PT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ro$2d$RO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ro-RO.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ru$2d$RU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ru-RU.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sk$2d$SK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sk-SK.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sl$2d$SI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sl-SI.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sr$2d$SP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sr-SP.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sv$2d$SE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sv-SE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$tr$2d$TR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/tr-TR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$uk$2d$UA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/uk-UA.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$CN$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-CN.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$TW$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-TW.mjs [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var $2cbb7ca666678a14$exports = {};
$2cbb7ca666678a14$exports = {
    "ar-AE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ar$2d$AE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "bg-BG": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$bg$2d$BG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "cs-CZ": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$cs$2d$CZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "da-DK": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$da$2d$DK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "de-DE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$de$2d$DE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "el-GR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$el$2d$GR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$en$2d$US$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "es-ES": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$es$2d$ES$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "et-EE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$et$2d$EE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "fi-FI": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fi$2d$FI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "fr-FR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fr$2d$FR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "he-IL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$he$2d$IL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "hr-HR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hr$2d$HR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "hu-HU": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hu$2d$HU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "it-IT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$it$2d$IT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ja-JP": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ja$2d$JP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ko-KR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ko$2d$KR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "lt-LT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lt$2d$LT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "lv-LV": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lv$2d$LV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "nb-NO": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nb$2d$NO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "nl-NL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nl$2d$NL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pl-PL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pl$2d$PL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pt-BR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$BR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pt-PT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$PT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ro-RO": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ro$2d$RO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ru-RU": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ru$2d$RU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sk-SK": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sk$2d$SK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sl-SI": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sl$2d$SI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sr-SP": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sr$2d$SP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sv-SE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sv$2d$SE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "tr-TR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$tr$2d$TR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "uk-UA": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$uk$2d$UA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "zh-CN": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$CN$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "zh-TW": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$TW$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"]
};
;
 //# sourceMappingURL=intlStrings.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/useMenuTrigger.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenuTrigger",
    ()=>$168583247155ddda$export$dc9c12ed27dd1b49
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$intlStrings$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/intlStrings.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/useId.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useLongPress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useLongPress.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$i18n$40$3$2e$12$2e$12_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useLocalizedStringFormatter$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+i18n@3.12.12_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$overlays$40$3$2e$29$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayTrigger$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+overlays@3.29.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs [client] (ecmascript)");
;
;
;
;
;
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu', isDisabled: isDisabled, trigger: trigger = 'press' } = props;
    let menuTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useId"])();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$overlays$40$3$2e$29$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayTrigger$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useOverlayTrigger"])({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                // React puts listeners on the same root, so even if propagation was stopped, immediate propagation is still possible.
                // useTypeSelect will handle the spacebar first if it's running, so we don't want to open if it's handled it already.
                // We use isDefaultPrevented() instead of isPropagationStopped() because createEventHandler stops propagation by default.
                // And default prevented means that the event was handled by something else (typeahead), so we don't want to open the menu.
                if (trigger === 'longPress' || e.isDefaultPrevented()) return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
            default:
                // Allow other keys.
                if ('continuePropagation' in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$i18n$40$3$2e$12$2e$12_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useLocalizedStringFormatter$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useLocalizedStringFormatter"])((0, $parcel$interopDefault(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$intlStrings$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])), '@react-aria/menu');
    let { longPressProps: longPressProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useLongPress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useLongPress"])({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        preventFocusOnPress: true,
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.target);
                // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.open(e.pointerType === 'virtual' ? 'first' : null);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.target);
                state.toggle();
            }
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === 'press' ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}
;
 //# sourceMappingURL=useMenuTrigger.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ar-AE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c0398ad35c3639b7$exports
]);
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
;
 //# sourceMappingURL=ar-AE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/bg-BG.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$7af657c4165927c3$exports
]);
var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
;
 //# sourceMappingURL=bg-BG.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/cs-CZ.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$d95d4da6d531ab81$exports
]);
var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
;
 //# sourceMappingURL=cs-CZ.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/da-DK.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$24ebda9c775dca17$exports
]);
var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
;
 //# sourceMappingURL=da-DK.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/de-DE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$743e0dfca6cab1e9$exports
]);
var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
;
 //# sourceMappingURL=de-DE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/el-GR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a2f41026e05f1c84$exports
]);
var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
;
 //# sourceMappingURL=el-GR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/en-US.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$43b800e97c901737$exports
]);
var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": "Long press or press Alt + ArrowDown to open menu"
};
;
 //# sourceMappingURL=en-US.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/es-ES.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$442f5f6ac211e29f$exports
]);
var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
;
 //# sourceMappingURL=es-ES.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/et-EE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$dff280acfeb2d8ac$exports
]);
var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
;
 //# sourceMappingURL=et-EE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fi-FI.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$51608325613944d7$exports
]);
var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
;
 //# sourceMappingURL=fi-FI.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fr-FR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c4a1b1eabeaa87be$exports
]);
var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
;
 //# sourceMappingURL=fr-FR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/he-IL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8c74815cdee18d1b$exports
]);
var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
;
 //# sourceMappingURL=he-IL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hr-HR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$fd0e9ef6a7fe0ec9$exports
]);
var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
;
 //# sourceMappingURL=hr-HR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hu-HU.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a89a74a39eba465a$exports
]);
var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
;
 //# sourceMappingURL=hu-HU.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/it-IT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$edc7c66594a0ae8a$exports
]);
var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
;
 //# sourceMappingURL=it-IT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ja-JP.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f1ab51510712db52$exports
]);
var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": "長押しまたは Alt+下矢印キーでメニューを開く"
};
;
 //# sourceMappingURL=ja-JP.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ko-KR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f9b672d9b82fa3d6$exports
]);
var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
;
 //# sourceMappingURL=ko-KR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lt-LT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a385f3910feda499$exports
]);
var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
;
 //# sourceMappingURL=lt-LT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lv-LV.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$4f1bde932c441789$exports
]);
var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
;
 //# sourceMappingURL=lv-LV.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nb-NO.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$914a51a8a594d5be$exports
]);
var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
;
 //# sourceMappingURL=nb-NO.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nl-NL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$89aaf803103bb500$exports
]);
var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
;
 //# sourceMappingURL=nl-NL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pl-PL.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c685891476dbaaca$exports
]);
var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
;
 //# sourceMappingURL=pl-PL.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-BR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$885879b9b10c2959$exports
]);
var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
;
 //# sourceMappingURL=pt-BR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-PT.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$6b39616688a51692$exports
]);
var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
;
 //# sourceMappingURL=pt-PT.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ro-RO.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f26362aed63f47e2$exports
]);
var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
;
 //# sourceMappingURL=ro-RO.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ru-RU.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$06cbade644558bf0$exports
]);
var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
;
 //# sourceMappingURL=ru-RU.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sk-SK.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$0a391ff68f9d59b1$exports
]);
var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
;
 //# sourceMappingURL=sk-SK.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sl-SI.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8193cf0e649c7928$exports
]);
var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
;
 //# sourceMappingURL=sl-SI.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sr-SP.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f398debcce5a5c55$exports
]);
var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
;
 //# sourceMappingURL=sr-SP.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sv-SE.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$9e9fef000aa4c013$exports
]);
var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
;
 //# sourceMappingURL=sv-SE.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/tr-TR.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c016c8183bbe3d68$exports
]);
var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
;
 //# sourceMappingURL=tr-TR.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/uk-UA.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$ca4f6c8462244e62$exports
]);
var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
;
 //# sourceMappingURL=uk-UA.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-CN.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$2d9960c02ccac927$exports
]);
var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": "长按或按 Alt + 向下方向键以打开菜单"
};
;
 //# sourceMappingURL=zh-CN.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-TW.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$f1b682a4c8c5631c$exports
]);
var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": "長按或按 Alt+向下鍵以開啟功能表"
};
;
 //# sourceMappingURL=zh-TW.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/intlStrings.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$2cbb7ca666678a14$exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ar$2d$AE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ar-AE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$bg$2d$BG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/bg-BG.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$cs$2d$CZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/cs-CZ.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$da$2d$DK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/da-DK.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$de$2d$DE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/de-DE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$el$2d$GR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/el-GR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$en$2d$US$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/en-US.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$es$2d$ES$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/es-ES.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$et$2d$EE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/et-EE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fi$2d$FI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fi-FI.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fr$2d$FR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/fr-FR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$he$2d$IL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/he-IL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hr$2d$HR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hr-HR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hu$2d$HU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/hu-HU.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$it$2d$IT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/it-IT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ja$2d$JP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ja-JP.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ko$2d$KR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ko-KR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lt$2d$LT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lt-LT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lv$2d$LV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/lv-LV.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nb$2d$NO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nb-NO.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nl$2d$NL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/nl-NL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pl$2d$PL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pl-PL.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$BR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-BR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$PT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/pt-PT.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ro$2d$RO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ro-RO.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ru$2d$RU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/ru-RU.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sk$2d$SK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sk-SK.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sl$2d$SI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sl-SI.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sr$2d$SP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sr-SP.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sv$2d$SE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/sv-SE.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$tr$2d$TR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/tr-TR.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$uk$2d$UA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/uk-UA.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$CN$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-CN.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$TW$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/zh-TW.mjs [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var $2cbb7ca666678a14$exports = {};
$2cbb7ca666678a14$exports = {
    "ar-AE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ar$2d$AE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "bg-BG": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$bg$2d$BG$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "cs-CZ": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$cs$2d$CZ$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "da-DK": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$da$2d$DK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "de-DE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$de$2d$DE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "el-GR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$el$2d$GR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$en$2d$US$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "es-ES": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$es$2d$ES$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "et-EE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$et$2d$EE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "fi-FI": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fi$2d$FI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "fr-FR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$fr$2d$FR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "he-IL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$he$2d$IL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "hr-HR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hr$2d$HR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "hu-HU": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$hu$2d$HU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "it-IT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$it$2d$IT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ja-JP": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ja$2d$JP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ko-KR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ko$2d$KR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "lt-LT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lt$2d$LT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "lv-LV": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$lv$2d$LV$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "nb-NO": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nb$2d$NO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "nl-NL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$nl$2d$NL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pl-PL": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pl$2d$PL$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pt-BR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$BR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "pt-PT": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$pt$2d$PT$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ro-RO": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ro$2d$RO$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "ru-RU": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$ru$2d$RU$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sk-SK": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sk$2d$SK$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sl-SI": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sl$2d$SI$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sr-SP": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sr$2d$SP$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "sv-SE": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$sv$2d$SE$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "tr-TR": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$tr$2d$TR$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "uk-UA": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$uk$2d$UA$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "zh-CN": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$CN$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
    "zh-TW": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$zh$2d$TW$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"]
};
;
 //# sourceMappingURL=intlStrings.module.js.map
}),
"[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/useMenuTrigger.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenuTrigger",
    ()=>$168583247155ddda$export$dc9c12ed27dd1b49
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$intlStrings$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+menu@3.19.2_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/menu/dist/intlStrings.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/useId.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+utils@3.30.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useLongPress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+interactions@3.25.5_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/interactions/dist/useLongPress.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$i18n$40$3$2e$12$2e$12_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useLocalizedStringFormatter$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+i18n@3.12.12_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$overlays$40$3$2e$29$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayTrigger$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/frontend/node_modules/.pnpm/@react-aria+overlays@3.29.1_6qpiazawufkd5n22ferrdsggza/node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs [client] (ecmascript)");
;
;
;
;
;
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu', isDisabled: isDisabled, trigger: trigger = 'press' } = props;
    let menuTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useId"])();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$overlays$40$3$2e$29$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$useOverlayTrigger$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useOverlayTrigger"])({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                // React puts listeners on the same root, so even if propagation was stopped, immediate propagation is still possible.
                // useTypeSelect will handle the spacebar first if it's running, so we don't want to open if it's handled it already.
                // We use isDefaultPrevented() instead of isPropagationStopped() because createEventHandler stops propagation by default.
                // And default prevented means that the event was handled by something else (typeahead), so we don't want to open the menu.
                if (trigger === 'longPress' || e.isDefaultPrevented()) return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
            default:
                // Allow other keys.
                if ('continuePropagation' in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$i18n$40$3$2e$12$2e$12_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$i18n$2f$dist$2f$useLocalizedStringFormatter$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useLocalizedStringFormatter"])((0, $parcel$interopDefault(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$menu$40$3$2e$19$2e$2_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$menu$2f$dist$2f$intlStrings$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])), '@react-aria/menu');
    let { longPressProps: longPressProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$interactions$40$3$2e$25$2e$5_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useLongPress$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useLongPress"])({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        preventFocusOnPress: true,
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.target);
                // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.open(e.pointerType === 'virtual' ? 'first' : null);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$react$2d$aria$2b$utils$40$3$2e$30$2e$1_6qpiazawufkd5n22ferrdsggza$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.target);
                state.toggle();
            }
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === 'press' ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}
;
 //# sourceMappingURL=useMenuTrigger.module.js.map
}),
]);

//# sourceMappingURL=b5835__pnpm_49a5be16._.js.map