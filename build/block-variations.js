/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/group-overflow.js"
/*!*******************************!*\
  !*** ./src/group-overflow.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const BLOCK_NAME = 'core/group';
const FILTER_NAMESPACE = 'saas-block-theme/group-overflow';
const OVERFLOW_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Default', 'saas-block-theme'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Hidden', 'saas-block-theme'),
  value: 'hidden'
}];

/**
 * Add overflow attribute to the Group block.
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', `${FILTER_NAMESPACE}/attribute`, (settings, name) => {
  if (name !== BLOCK_NAME) {
    return settings;
  }
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      overflow: {
        type: 'string',
        default: 'default'
      }
    }
  };
});

/**
 * Inspector control for Group overflow.
 */
const withOverflowControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== BLOCK_NAME) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const overflow = attributes.overflow || 'default';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Overflow', 'saas-block-theme'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Overflow', 'saas-block-theme'),
            value: overflow,
            options: OVERFLOW_OPTIONS,
            onChange: value => setAttributes({
              overflow: value
            }),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        })
      })]
    });
  };
}, 'withOverflowControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', `${FILTER_NAMESPACE}/controls`, withOverflowControl);

/**
 * Apply overflow:hidden in the editor canvas.
 */
const withOverflowEditorStyle = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (props.name !== BLOCK_NAME || props.attributes?.overflow !== 'hidden') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
        ...props
      });
    }
    const wrapperProps = {
      ...props.wrapperProps,
      style: {
        ...props.wrapperProps?.style,
        overflow: 'hidden'
      }
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
      ...props,
      wrapperProps: wrapperProps
    });
  };
}, 'withOverflowEditorStyle');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockListBlock', `${FILTER_NAMESPACE}/editor-style`, withOverflowEditorStyle);

/**
 * Persist overflow:hidden on the saved Group markup.
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', `${FILTER_NAMESPACE}/save`, (extraProps, blockType, attributes) => {
  if (blockType.name !== BLOCK_NAME || attributes.overflow !== 'hidden') {
    return extraProps;
  }
  const existingStyle = typeof extraProps.style === 'object' && extraProps.style ? extraProps.style : {};
  return {
    ...extraProps,
    style: {
      ...existingStyle,
      overflow: 'hidden'
    }
  };
});

/***/ },

/***/ "./src/paragraph-max-width.js"
/*!************************************!*\
  !*** ./src/paragraph-max-width.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const SUPPORTED_BLOCKS = ['core/paragraph', 'core/heading'];
const FILTER_NAMESPACE = 'saas-block-theme/text-max-width';
const DEFAULT_MAX_WIDTH = 2000;
function isSupportedBlock(name) {
  return SUPPORTED_BLOCKS.includes(name);
}
function toMaxWidthCss(maxWidth) {
  const value = typeof maxWidth === 'number' ? maxWidth : parseInt(maxWidth, 10);
  if (!Number.isFinite(value)) {
    return `${DEFAULT_MAX_WIDTH}px`;
  }
  return `${value}px`;
}
;(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', `${FILTER_NAMESPACE}/attribute`, (settings, name) => {
  if (!isSupportedBlock(name)) {
    return settings;
  }
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      maxWidth: {
        type: 'number',
        default: DEFAULT_MAX_WIDTH
      }
    }
  };
});
const withMaxWidthControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (!isSupportedBlock(props.name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const maxWidth = attributes.maxWidth ?? DEFAULT_MAX_WIDTH;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Max Width', 'saas-block-theme'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Max Width', 'saas-block-theme'),
            value: maxWidth,
            onChange: value => setAttributes({
              maxWidth: value ?? DEFAULT_MAX_WIDTH
            }),
            min: 20,
            max: 2000,
            step: 1,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pixels (px).', 'saas-block-theme'),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        })
      })]
    });
  };
}, 'withMaxWidthControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', `${FILTER_NAMESPACE}/controls`, withMaxWidthControl);
const withMaxWidthEditorStyle = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (!isSupportedBlock(props.name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
        ...props
      });
    }
    const wrapperProps = {
      ...props.wrapperProps,
      style: {
        ...props.wrapperProps?.style,
        maxWidth: toMaxWidthCss(props.attributes?.maxWidth)
      }
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
      ...props,
      wrapperProps: wrapperProps
    });
  };
}, 'withMaxWidthEditorStyle');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockListBlock', `${FILTER_NAMESPACE}/editor-style`, withMaxWidthEditorStyle);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', `${FILTER_NAMESPACE}/save`, (extraProps, blockType, attributes) => {
  if (!isSupportedBlock(blockType.name)) {
    return extraProps;
  }
  const existingStyle = typeof extraProps.style === 'object' && extraProps.style ? extraProps.style : {};
  return {
    ...extraProps,
    style: {
      ...existingStyle,
      maxWidth: toMaxWidthCss(attributes.maxWidth)
    }
  };
});

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/block-variations.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _group_overflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-overflow */ "./src/group-overflow.js");
/* harmony import */ var _paragraph_max_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph-max-width */ "./src/paragraph-max-width.js");



const primaryButtonAttributes = {
  className: 'btn-primary',
  backgroundColor: 'primary',
  textColor: 'surface',
  fontSize: 'small',
  style: {
    border: {
      radius: 'var:preset|border-radius|full'
    },
    spacing: {
      padding: {
        top: 'var:preset|spacing|25',
        bottom: 'var:preset|spacing|25',
        left: 'var:preset|spacing|50',
        right: 'var:preset|spacing|50'
      }
    }
  },
  metadata: {
    name: 'Primary Button'
  }
};
const secondaryButtonAttributes = {
  className: 'btn-secondary',
  backgroundColor: 'surface',
  textColor: 'dark',
  fontSize: 'small',
  style: {
    border: {
      radius: 'var:preset|border-radius|full',
      width: '1px'
    },
    spacing: {
      padding: {
        top: 'var:preset|spacing|25',
        bottom: 'var:preset|spacing|25',
        left: 'var:preset|spacing|50',
        right: 'var:preset|spacing|50'
      }
    }
  },
  metadata: {
    name: 'Secondary Button'
  }
};
const accentButtonAttributes = {
  className: 'btn-accent',
  backgroundColor: 'spark',
  textColor: 'dark',
  fontSize: 'small',
  style: {
    border: {
      radius: 'var:preset|border-radius|full',
      width: '1px'
    },
    spacing: {
      padding: {
        top: 'var:preset|spacing|25',
        bottom: 'var:preset|spacing|25',
        left: 'var:preset|spacing|50',
        right: 'var:preset|spacing|50'
      }
    }
  },
  metadata: {
    name: 'Accent Button'
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/group', {
  name: 'group-section',
  title: 'Group - Section',
  description: 'A group container wrapped in an HTML <section> tag.',
  icon: 'layout',
  attributes: {
    tagName: 'section',
    className: 'group-section',
    style: {
      spacing: {
        padding: {
          left: 'var:preset|spacing|section',
          right: 'var:preset|spacing|section'
        }
      }
    }
  },
  isActive: blockAttributes => blockAttributes.tagName === 'section' && blockAttributes.className?.split(/\s+/).includes('group-section'),
  scope: ['inserter', 'transform']
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/paragraph', {
  name: 'before-heading',
  title: 'Before Heading',
  description: 'Small uppercase label that sits above a heading.',
  icon: 'editor-textcolor',
  attributes: {
    className: 'before-heading',
    textColor: 'primary',
    fontSize: 'x-small',
    style: {
      typography: {
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 'var(--wp--custom--letter-spacing--before-heading)'
      },
      elements: {
        link: {
          color: {
            text: 'var:preset|color|primary'
          }
        }
      }
    },
    metadata: {
      name: 'Before Heading'
    }
  },
  isActive: blockAttributes => blockAttributes.className?.split(/\s+/).includes('before-heading'),
  scope: ['inserter', 'transform', 'block']
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/button', {
  name: 'button-primary',
  title: 'Button - Primary',
  description: 'A primary call-to-action button.',
  icon: 'button',
  attributes: primaryButtonAttributes,
  isDefault: true,
  isActive: blockAttributes => blockAttributes.className?.split(/\s+/).includes('btn-primary'),
  scope: ['inserter', 'transform', 'block']
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/button', {
  name: 'button-secondary',
  title: 'Button - Secondary',
  description: 'A Secondary call-to-action button.',
  icon: 'button',
  attributes: secondaryButtonAttributes,
  isDefault: true,
  isActive: blockAttributes => blockAttributes.className?.split(/\s+/).includes('btn-secondary'),
  scope: ['inserter', 'transform', 'block']
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/button', {
  name: 'button-accent',
  title: 'Button - Accent',
  description: 'An Accent call-to-action button.',
  icon: 'button',
  attributes: accentButtonAttributes,
  isDefault: true,
  isActive: blockAttributes => blockAttributes.className?.split(/\s+/).includes('btn-accent'),
  scope: ['inserter', 'transform', 'block']
});

/*
 * core/buttons ignores isDefault on core/button (directInsert).
 * Make Buttons itself default to a primary button child.
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/buttons', {
  name: 'buttons-primary',
  title: 'Buttons',
  isDefault: true,
  innerBlocks: [['core/button', primaryButtonAttributes]],
  scope: ['inserter', 'block']
});
})();

/******/ })()
;
//# sourceMappingURL=block-variations.js.map