/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hero-section/components/hero-actions.js"
/*!*****************************************************!*\
  !*** ./src/hero-section/components/hero-actions.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroActionsEdit: () => (/* binding */ HeroActionsEdit),
/* harmony export */   HeroActionsSave: () => (/* binding */ HeroActionsSave)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/hero-section/components/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CtaButton({
  className,
  text,
  url,
  opensInNewTab,
  placeholder,
  showArrow,
  textAttribute,
  urlAttribute,
  opensInNewTabAttribute,
  setAttributes,
  isOpen,
  onOpen,
  onClose
}) {
  const wrapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative inline-flex",
    ref: wrapRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
      className: className,
      href: url || '#',
      onClick: event => {
        event.preventDefault();
        onOpen();
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "span",
        value: text,
        onChange: value => setAttributes({
          [textAttribute]: value
        }),
        placeholder: placeholder,
        allowedFormats: [],
        withoutInteractiveFormatting: true
      }), showArrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon, {})]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      anchor: wrapRef.current,
      onClose: onClose,
      placement: "bottom",
      offset: 8,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLinkControl, {
        value: {
          url,
          opensInNewTab
        },
        onChange: next => {
          setAttributes({
            [urlAttribute]: next?.url || '',
            [opensInNewTabAttribute]: !!next?.opensInNewTab
          });
        },
        onRemove: () => {
          setAttributes({
            [urlAttribute]: '',
            [opensInNewTabAttribute]: false
          });
          onClose();
        }
      })
    })]
  });
}
function HeroActionsEdit({
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
  setAttributes,
  isSelected
}) {
  const [openLink, setOpenLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!isSelected) {
      setOpenLink(null);
    }
  }, [isSelected]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "mt-9 flex flex-wrap items-center gap-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CtaButton, {
      className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-small font-semibold text-surface! no-underline shadow-lift transition-[color,background-color,border-color] duration-150 ease-in-out hover:bg-primary-soft hover:text-surface",
      text: primaryCtaText,
      url: primaryCtaUrl,
      opensInNewTab: primaryCtaOpensInNewTab,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Primary CTA…', 'saas-block-theme'),
      showArrow: true,
      textAttribute: "primaryCtaText",
      urlAttribute: "primaryCtaUrl",
      opensInNewTabAttribute: "primaryCtaOpensInNewTab",
      setAttributes: setAttributes,
      isOpen: openLink === 'primary',
      onOpen: () => setOpenLink('primary'),
      onClose: () => setOpenLink(null)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CtaButton, {
      className: "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-small font-semibold text-ink no-underline transition-[color,background-color,border-color] duration-150 ease-in-out hover:border-primary hover:text-primary",
      text: secondaryCtaText,
      url: secondaryCtaUrl,
      opensInNewTab: secondaryCtaOpensInNewTab,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Secondary CTA…', 'saas-block-theme'),
      textAttribute: "secondaryCtaText",
      urlAttribute: "secondaryCtaUrl",
      opensInNewTabAttribute: "secondaryCtaOpensInNewTab",
      setAttributes: setAttributes,
      isOpen: openLink === 'secondary',
      onOpen: () => setOpenLink('secondary'),
      onClose: () => setOpenLink(null)
    })]
  });
}
function HeroActionsSave({
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "mt-9 flex flex-wrap items-center gap-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
      className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-small font-semibold text-surface! no-underline shadow-lift transition-[color,background-color,border-color] duration-150 ease-in-out hover:bg-primary-soft hover:text-surface",
      href: primaryCtaUrl || '#',
      ...(primaryCtaOpensInNewTab ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      } : {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "span",
        value: primaryCtaText
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
      className: "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-small font-semibold text-ink no-underline transition-[color,background-color,border-color] duration-150 ease-in-out hover:border-primary hover:text-primary",
      href: secondaryCtaUrl || '#',
      ...(secondaryCtaOpensInNewTab ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      } : {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "span",
        value: secondaryCtaText
      })
    })]
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-backdrop.js"
/*!******************************************************!*\
  !*** ./src/hero-section/components/hero-backdrop.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroBackdrop: () => (/* binding */ HeroBackdrop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function HeroBackdrop() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(26,26,28,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,28,0.08)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,#000_50%,transparent_45%)]",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "pointer-events-none absolute -top-40 left-1/2 size-168 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl",
      "aria-hidden": "true"
    })]
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-content.js"
/*!*****************************************************!*\
  !*** ./src/hero-section/components/hero-content.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroContentEdit: () => (/* binding */ HeroContentEdit),
/* harmony export */   HeroContentSave: () => (/* binding */ HeroContentSave)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hero_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-actions */ "./src/hero-section/components/hero-actions.js");
/* harmony import */ var _hero_stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-stats */ "./src/hero-section/components/hero-stats.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/hero-section/components/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function HeroContentEdit({
  eyebrow,
  heading,
  description,
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
  stats,
  setAttributes,
  isSelected
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-x-small font-medium tracking-[0.04em] text-primary uppercase",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.SparklesIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "span",
        value: eyebrow,
        onChange: value => setAttributes({
          eyebrow: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Eyebrow text…', 'saas-block-theme'),
        allowedFormats: []
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "h1",
      className: "mt-6 mb-0 text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance",
      value: heading,
      onChange: value => setAttributes({
        heading: value
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading…', 'saas-block-theme'),
      allowedFormats: ['core/text-color']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "p",
      className: "mt-6 mb-0 max-w-xl text-large leading-relaxed text-muted",
      value: description,
      onChange: value => setAttributes({
        description: value
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description…', 'saas-block-theme'),
      allowedFormats: []
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hero_actions__WEBPACK_IMPORTED_MODULE_2__.HeroActionsEdit, {
      primaryCtaText: primaryCtaText,
      primaryCtaUrl: primaryCtaUrl,
      primaryCtaOpensInNewTab: primaryCtaOpensInNewTab,
      secondaryCtaText: secondaryCtaText,
      secondaryCtaUrl: secondaryCtaUrl,
      secondaryCtaOpensInNewTab: secondaryCtaOpensInNewTab,
      setAttributes: setAttributes,
      isSelected: isSelected
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hero_stats__WEBPACK_IMPORTED_MODULE_3__.HeroStatsEdit, {
      stats: stats,
      setAttributes: setAttributes
    })]
  });
}
function HeroContentSave({
  eyebrow,
  heading,
  description,
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
  stats
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-x-small font-medium tracking-[0.04em] text-primary uppercase",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.SparklesIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "span",
        value: eyebrow
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h1",
      className: "mt-6 mb-0 text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance",
      value: heading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "mt-6 mb-0 max-w-xl text-large leading-relaxed text-muted",
      value: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hero_actions__WEBPACK_IMPORTED_MODULE_2__.HeroActionsSave, {
      primaryCtaText: primaryCtaText,
      primaryCtaUrl: primaryCtaUrl,
      primaryCtaOpensInNewTab: primaryCtaOpensInNewTab,
      secondaryCtaText: secondaryCtaText,
      secondaryCtaUrl: secondaryCtaUrl,
      secondaryCtaOpensInNewTab: secondaryCtaOpensInNewTab
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hero_stats__WEBPACK_IMPORTED_MODULE_3__.HeroStatsSave, {
      stats: stats
    })]
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-image-inspector.js"
/*!*************************************************************!*\
  !*** ./src/hero-section/components/hero-image-inspector.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroImageInspector: () => (/* binding */ HeroImageInspector)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function HeroImageInspector({
  imageId,
  imageUrl,
  imageAlt,
  onSelectImage,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hero image', 'saas-block-theme'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: onSelectImage,
        allowedTypes: ['image'],
        value: imageId,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "secondary",
          onClick: open,
          children: imageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image', 'saas-block-theme') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select image', 'saas-block-theme')
        })
      })
    }), imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "link",
      isDestructive: true,
      onClick: () => setAttributes({
        imageId: 0,
        imageUrl: window.saasBlockTheme?.heroVisualUrl || ''
      }),
      style: {
        marginTop: '8px'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset to theme default', 'saas-block-theme')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image alt text', 'saas-block-theme'),
      value: imageAlt,
      onChange: value => setAttributes({
        imageAlt: value
      })
    })]
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-stats.js"
/*!***************************************************!*\
  !*** ./src/hero-section/components/hero-stats.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroStatsEdit: () => (/* binding */ HeroStatsEdit),
/* harmony export */   HeroStatsSave: () => (/* binding */ HeroStatsSave)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HeroStatsEdit({
  stats,
  setAttributes
}) {
  const updateStat = (index, key, value) => {
    const next = stats.map((stat, i) => i === index ? {
      ...stat,
      [key]: value
    } : stat);
    setAttributes({
      stats: next
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("dl", {
    className: "mt-14 mb-0 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8",
    children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "m-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "dt",
        className: "m-0 text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-[-0.02em]",
        value: stat.value,
        onChange: value => updateStat(index, 'value', value),
        allowedFormats: []
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "dd",
        className: "mt-1 mb-0 ml-0 text-x-small text-muted",
        value: stat.label,
        onChange: value => updateStat(index, 'label', value),
        allowedFormats: []
      })]
    }, index))
  });
}
function HeroStatsSave({
  stats
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("dl", {
    className: "mt-14 mb-0 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8",
    children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "m-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "dt",
        className: "m-0 text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-[-0.02em]",
        value: stat.value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "dd",
        className: "mt-1 mb-0 ml-0 text-x-small text-muted",
        value: stat.label
      })]
    }, index))
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-visual-side.js"
/*!*********************************************************!*\
  !*** ./src/hero-section/components/hero-visual-side.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroVisualEdit: () => (/* binding */ HeroVisualEdit),
/* harmony export */   HeroVisualSave: () => (/* binding */ HeroVisualSave)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-visual */ "./src/hero-section/components/hero-visual.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HeroVisualEdit({
  imageId,
  imageUrl,
  imageAlt,
  agentsLabel,
  agentsValue,
  isSelected,
  onSelectImage,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: imageId,
      render: ({
        open
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_hero_visual__WEBPACK_IMPORTED_MODULE_1__.HeroVisual, {
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        agentsLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "span",
          value: agentsLabel,
          onChange: value => setAttributes({
            agentsLabel: value
          }),
          allowedFormats: []
        }),
        agentsValue: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "span",
          value: agentsValue,
          onChange: value => setAttributes({
            agentsValue: value
          }),
          allowedFormats: []
        }),
        onSelectImage: open,
        isSelected: isSelected
      })
    })
  });
}
function HeroVisualSave({
  imageUrl,
  imageAlt,
  agentsLabel,
  agentsValue
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_hero_visual__WEBPACK_IMPORTED_MODULE_1__.HeroVisual, {
    imageUrl: imageUrl,
    imageAlt: imageAlt,
    agentsLabel: agentsLabel,
    agentsValue: agentsValue
  });
}

/***/ },

/***/ "./src/hero-section/components/hero-visual.js"
/*!****************************************************!*\
  !*** ./src/hero-section/components/hero-visual.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroVisual: () => (/* binding */ HeroVisual)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function getHeroImageUrl(imageUrl) {
  if (imageUrl) {
    return imageUrl;
  }
  return window?.saasBlockTheme?.heroVisualUrl || '';
}
function HeroVisual({
  imageUrl,
  imageAlt,
  agentsLabel,
  agentsValue,
  onSelectImage,
  isSelected
}) {
  const src = getHeroImageUrl(imageUrl);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute -inset-6 rounded-[2.5rem] bg-spark/25 blur-2xl",
      "aria-hidden": "true"
    }), src ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "relative block h-auto w-full rounded-4xl border border-border-soft object-cover shadow-lift",
      src: src,
      alt: imageAlt || '',
      width: 1280,
      height: 1024
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "relative grid min-h-80 w-full place-items-center rounded-4xl border border-border-soft bg-surface text-small text-muted shadow-lift",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add hero image', 'saas-block-theme')
    }), typeof onSelectImage === 'function' && isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      className: "absolute top-4 right-4 z-2 cursor-pointer rounded-full border-0 bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft",
      onClick: onSelectImage,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace image', 'saas-block-theme')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "absolute -bottom-6 -left-6 hidden rounded-2xl border border-border-soft bg-surface p-5 shadow-soft sm:block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "m-0 text-x-small text-muted",
        children: agentsLabel
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "mt-1 mb-0 text-2xl font-semibold tracking-[-0.02em] text-primary",
        children: agentsValue
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "mt-3 h-1.5 w-36 overflow-hidden rounded-full bg-background",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "block h-full w-4/5 rounded-[inherit] bg-spark"
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/hero-section/components/icons.js"
/*!**********************************************!*\
  !*** ./src/hero-section/components/icons.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowRightIcon: () => (/* binding */ ArrowRightIcon),
/* harmony export */   SparklesIcon: () => (/* binding */ SparklesIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SparklesIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    className: "shrink-0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M20 2v4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M22 4h-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "4",
      cy: "20",
      r: "2"
    })]
  });
}
function ArrowRightIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    className: "shrink-0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "m12 5 7 7-7 7"
    })]
  });
}

/***/ },

/***/ "./src/hero-section/edit.js"
/*!**********************************!*\
  !*** ./src/hero-section/edit.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hero_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero-backdrop */ "./src/hero-section/components/hero-backdrop.js");
/* harmony import */ var _components_hero_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero-content */ "./src/hero-section/components/hero-content.js");
/* harmony import */ var _components_hero_image_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero-image-inspector */ "./src/hero-section/components/hero-image-inspector.js");
/* harmony import */ var _components_hero_visual_side__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hero-visual-side */ "./src/hero-section/components/hero-visual-side.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes,
  isSelected
}) {
  const {
    eyebrow,
    heading,
    description,
    primaryCtaText,
    primaryCtaUrl,
    primaryCtaOpensInNewTab,
    secondaryCtaText,
    secondaryCtaUrl,
    secondaryCtaOpensInNewTab,
    stats,
    imageId,
    imageUrl,
    imageAlt,
    agentsLabel,
    agentsValue
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!imageUrl && window.saasBlockTheme?.heroVisualUrl) {
      setAttributes({
        imageUrl: window.saasBlockTheme.heroVisualUrl
      });
    }
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'saas-hero relative overflow-hidden text-ink',
    id: 'top'
  });
  const onSelectImage = media => {
    setAttributes({
      imageId: media.id,
      imageUrl: media.url,
      imageAlt: media.alt || imageAlt || ''
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_hero_image_inspector__WEBPACK_IMPORTED_MODULE_4__.HeroImageInspector, {
        imageId: imageId,
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        onSelectImage: onSelectImage,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_hero_backdrop__WEBPACK_IMPORTED_MODULE_2__.HeroBackdrop, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "relative mx-auto grid max-w-content items-center gap-14 px-section py-20 pb-24 lg:grid-cols-2 lg:pt-28",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_hero_content__WEBPACK_IMPORTED_MODULE_3__.HeroContentEdit, {
          eyebrow: eyebrow,
          heading: heading,
          description: description,
          primaryCtaText: primaryCtaText,
          primaryCtaUrl: primaryCtaUrl,
          primaryCtaOpensInNewTab: primaryCtaOpensInNewTab,
          secondaryCtaText: secondaryCtaText,
          secondaryCtaUrl: secondaryCtaUrl,
          secondaryCtaOpensInNewTab: secondaryCtaOpensInNewTab,
          stats: stats,
          setAttributes: setAttributes,
          isSelected: isSelected
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_hero_visual_side__WEBPACK_IMPORTED_MODULE_5__.HeroVisualEdit, {
          imageId: imageId,
          imageUrl: imageUrl,
          imageAlt: imageAlt,
          agentsLabel: agentsLabel,
          agentsValue: agentsValue,
          isSelected: isSelected,
          onSelectImage: onSelectImage,
          setAttributes: setAttributes
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/hero-section/save.js"
/*!**********************************!*\
  !*** ./src/hero-section/save.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hero_backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hero-backdrop */ "./src/hero-section/components/hero-backdrop.js");
/* harmony import */ var _components_hero_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero-content */ "./src/hero-section/components/hero-content.js");
/* harmony import */ var _components_hero_visual_side__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero-visual-side */ "./src/hero-section/components/hero-visual-side.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function save({
  attributes
}) {
  const {
    eyebrow,
    heading,
    description,
    primaryCtaText,
    primaryCtaUrl,
    primaryCtaOpensInNewTab,
    secondaryCtaText,
    secondaryCtaUrl,
    secondaryCtaOpensInNewTab,
    stats,
    imageUrl,
    imageAlt,
    agentsLabel,
    agentsValue
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'saas-hero relative overflow-hidden text-ink',
    id: 'top'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_hero_backdrop__WEBPACK_IMPORTED_MODULE_1__.HeroBackdrop, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative mx-auto grid max-w-content items-center gap-14 px-section py-20 pb-24 lg:grid-cols-2 lg:pt-28",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_hero_content__WEBPACK_IMPORTED_MODULE_2__.HeroContentSave, {
        eyebrow: eyebrow,
        heading: heading,
        description: description,
        primaryCtaText: primaryCtaText,
        primaryCtaUrl: primaryCtaUrl,
        primaryCtaOpensInNewTab: primaryCtaOpensInNewTab,
        secondaryCtaText: secondaryCtaText,
        secondaryCtaUrl: secondaryCtaUrl,
        secondaryCtaOpensInNewTab: secondaryCtaOpensInNewTab,
        stats: stats
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_hero_visual_side__WEBPACK_IMPORTED_MODULE_3__.HeroVisualSave, {
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        agentsLabel: agentsLabel,
        agentsValue: agentsValue
      })]
    })]
  });
}

/***/ },

/***/ "./src/hero-section/editor.css"
/*!*************************************!*\
  !*** ./src/hero-section/editor.css ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/hero-section/block.json"
/*!*************************************!*\
  !*** ./src/hero-section/block.json ***!
  \*************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"saas-block-theme/hero-section","version":"1.0.0","title":"Hero Section","category":"theme","icon":"cover-image","description":"Locked-design hero. Clients can edit content only.","keywords":["hero","banner","header"],"textdomain":"saas-block-theme","attributes":{"eyebrow":{"type":"string","default":"Agentic operations, live now"},"heading":{"type":"string","default":"Run your company on an <mark style=\\"background-color:rgba(0,0,0,0)\\" class=\\"has-inline-color has-primary-color\\">autonomous</mark> control plane"},"description":{"type":"string","default":"Nebulark connects your data, your tools and your team into one adaptive system that plans, executes and reports — without the manual overhead."},"primaryCtaText":{"type":"string","default":"Start free trial"},"primaryCtaUrl":{"type":"string","default":"#pricing"},"primaryCtaOpensInNewTab":{"type":"boolean","default":false},"secondaryCtaText":{"type":"string","default":"See how it works"},"secondaryCtaUrl":{"type":"string","default":"#what-we-do"},"secondaryCtaOpensInNewTab":{"type":"boolean","default":false},"stats":{"type":"array","default":[{"value":"12.4M","label":"Workflows executed"},{"value":"99.99%","label":"Platform uptime"},{"value":"3.8×","label":"Faster delivery"}]},"imageId":{"type":"number","default":0},"imageUrl":{"type":"string","default":""},"imageAlt":{"type":"string","default":"Abstract 3D visual representing the Nebulark automation platform"},"agentsLabel":{"type":"string","default":"Agents active"},"agentsValue":{"type":"string","default":"248"}},"supports":{"html":false,"align":["full"],"anchor":true,"spacing":{"margin":true,"padding":false},"color":{"background":false,"text":false},"typography":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!***********************************!*\
  !*** ./src/hero-section/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/hero-section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/hero-section/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/hero-section/block.json");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.css */ "./src/hero-section/editor.css");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map