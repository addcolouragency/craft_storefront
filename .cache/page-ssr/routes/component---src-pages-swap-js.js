"use strict";
exports.id = "component---src-pages-swap-js";
exports.ids = ["component---src-pages-swap-js"];
exports.modules = {

/***/ "./src/components/shipping/shipping-options.jsx":
/*!******************************************************!*\
  !*** ./src/components/shipping/shipping-options.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");




const ShippingOptions = ({
  options = [],
  title,
  description = null,
  currencyCode = "eur",
  onSelect,
  defaultValue
}) => {
  // Since there is an object structure difference between the selected
  // shipping method and the shipping options, we check if a option is
  // selected using the id.
  const selected = options.find(o => o.id === (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.id));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup, {
    value: selected,
    onChange: onSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Label, {
    as: "h3"
  }, title), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Description, {
    as: "p"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2 mt-4"
  }, options.map(option => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Option, {
      key: option.id,
      value: option,
      className: "bg-white relative shadow rounded-lg border-1 px-5 py-4 cursor-pointer flex focus:outline-none"
    }, ({
      checked
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Label, {
      as: "p",
      className: "font-medium"
    }, option.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Description, {
      as: "span",
      className: `inline ${checked ? "text-sky-100" : "text-gray-500"}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "mt-2 text-ui-dark text-xs"
    }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(option.amount, currencyCode))))), checked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-shrink-0 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "delivery",
      checked: true,
      readOnly: true,
      className: "rounded-xl text-ui-dark focus:ring-transparent w-5 h-5",
      tabIndex: -1
    })))));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingOptions);

/***/ }),

/***/ "./src/components/swaps/swap-item.jsx":
/*!********************************************!*\
  !*** ./src/components/swaps/swap-item.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");
/* harmony import */ var _utility_divided_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/divided-container */ "./src/components/utility/divided-container.jsx");




const SwapItem = ({
  item,
  currencyCode,
  taxRate
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: item.thumbnail,
    alt: item.title,
    className: "rounded-md w-auto h-24 object-cover object-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ml-2 flex flex-col justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col flex-grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold"
  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Variant:"), " ", item.variant.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex text-sm mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_divided_container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Quantity"), " ", item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Total"), " ", (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(item.unit_price, currencyCode, item.quantity, taxRate))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapItem);

/***/ }),

/***/ "./src/components/utility/divided-container.jsx":
/*!******************************************************!*\
  !*** ./src/components/utility/divided-container.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const DividedContainer = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inline-flex items-center"
  }, children.map((child, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, child, index !== children.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-px h-4 bg-ui-medium mx-4"
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DividedContainer);

/***/ }),

/***/ "./src/components/utility/divider.jsx":
/*!********************************************!*\
  !*** ./src/components/utility/divider.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Divider = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-px bg-ui-medium w-full my-12"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./src/components/utility/error-message.jsx":
/*!**************************************************!*\
  !*** ./src/components/utility/error-message.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ErrorMessage = ({
  error
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    role: "alert",
    className: "flex items-center text-gray-700 text-xs bg-red-300 px-4 py-2 rounded-md mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-red-400 text-white w-4 h-4 rounded-lg text-center mr-2"
  }, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, error));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);

/***/ }),

/***/ "./src/components/utility/seo.jsx":
/*!****************************************!*\
  !*** ./src/components/utility/seo.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");





function SearchEngineOptimization({
  description,
  lang,
  meta,
  title
}) {
  var _site$siteMetadata, _site$siteMetadata2;

  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : null,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}

SearchEngineOptimization.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
SearchEngineOptimization.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchEngineOptimization);

/***/ }),

/***/ "./src/pages/swap.js":
/*!***************************!*\
  !*** ./src/pages/swap.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shipping_shipping_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shipping/shipping-options */ "./src/components/shipping/shipping-options.jsx");
/* harmony import */ var _components_swaps_swap_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/swaps/swap-item */ "./src/components/swaps/swap-item.jsx");
/* harmony import */ var _components_utility_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utility/divider */ "./src/components/utility/divider.jsx");
/* harmony import */ var _components_utility_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utility/error-message */ "./src/components/utility/error-message.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");
/* harmony import */ var _hooks_use_medusa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-medusa */ "./src/hooks/use-medusa.js");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/format-price */ "./src/utils/format-price.js");










const Swap = ({
  location
}) => {
  const {
    0: swap,
    1: setSwap
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: cart,
    1: setCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: amountDue,
    1: setAmountDue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: currencyCode,
    1: setCurrencyCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("eur");
  const {
    0: taxRate,
    1: setTaxRate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: swapItems,
    1: setSwapItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    additionalItems: [],
    returnItems: [],
    returnShipping: undefined
  });
  const {
    0: additionalShippingOptions,
    1: setAdditionalShippingOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: seletedShippingOption,
    1: setSelectedShippingOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: paymentError,
    1: setPaymentError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const client = (0,_hooks_use_medusa__WEBPACK_IMPORTED_MODULE_7__.useMedusa)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getReturn = async () => {
      const state = location.state;
      const stateSwap = state === null || state === void 0 ? void 0 : state.swap;

      if (stateSwap) {
        setSwap(stateSwap);
        const cart = await client.carts.retrieve(stateSwap.cart_id).then(({
          cart
        }) => cart).catch(_ => undefined);
        setCart(cart);
        const options = await client.shippingOptions.listCartOptions(cart.id).then(({
          shipping_options
        }) => shipping_options).catch(_ => []);
        setSelectedShippingOption(options === null || options === void 0 ? void 0 : options[0]);
        setAdditionalShippingOptions(options);
      }

      setLoading(false);
    };

    getReturn(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (cart) {
      setCurrencyCode(cart.region.currency_code);
      setTaxRate(cart.region.tax_rate);
      const additionalItems = cart.items.filter(item => item.unit_price > 0 && item.variant_id !== null);
      const returnItems = cart.items.filter(item => item.unit_price < 0 && item.variant_id !== null);
      const returnShipping = cart.items.find(item => item.unit_price >= 0 && item.variant_id === null);
      setSwapItems({
        additionalItems,
        returnItems,
        returnShipping
      });
    }
  }, [cart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let amountDue = 0;

    if (cart) {
      amountDue += cart.total;
    }

    if (seletedShippingOption) {
      amountDue += seletedShippingOption.amount;
    }

    setAmountDue((0,_utils_format_price__WEBPACK_IMPORTED_MODULE_8__.formatPrice)(amountDue, currencyCode, 1, taxRate));
  }, [cart, seletedShippingOption, currencyCode, taxRate]);

  const handlePayment = async () => {
    var _cart$payment_session;

    setIsSubmitting(true);
    const cartWithShipping = await client.carts.addShippingMethod(cart.id, {
      option_id: seletedShippingOption === null || seletedShippingOption === void 0 ? void 0 : seletedShippingOption.id
    }).then(({
      cart
    }) => cart).catch(_ => undefined);

    if (cartWithShipping) {
      setCart(cartWithShipping);
    } else {
      setIsSubmitting(false);
      setPaymentError("An error has occurred, please try again.");
      return;
    }

    if (!cart.payment_sessions || ((_cart$payment_session = cart.payment_sessions) === null || _cart$payment_session === void 0 ? void 0 : _cart$payment_session.length) === 0) {
      const cartRes = await client.carts.createPaymentSessions(cart.id).then(({
        cart
      }) => cart).catch(_ => undefined);

      if (cartRes) {
        setCart(cartRes);
      } else {
        setIsSubmitting(false);
        return;
      }
    }

    const cartWithPayment = await client.carts.setPaymentSession(cart.id, {
      provider_id: "manual"
    }).then(({
      cart
    }) => cart).catch(_ => undefined);

    if (cartWithPayment) {
      setCart(cartWithPayment);
    } else {
      setIsSubmitting(false);
      setPaymentError("An error has occurred, please try again.");
      return;
    }

    const confirmed = await client.carts.complete(cart.id).then(res => res).catch(_ => undefined);

    if (confirmed) {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_0__.navigate)("/swap-confirmed", {
        state: {
          success: true
        },
        replace: true
      });
    } else {
      setIsSubmitting(false);
      setPaymentError("An error has occurred, please try again.");
      return;
    }
  };

  return !loading && swap ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "layout-base flex justify-center pb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Complete Exchange"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "max-w-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-xs font-medium mb-2"
  }, "ALMOST THERE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Difference Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-md font-light mt-3"
  }, "The total of your additional items was greater then the total of the items you are returning. To complete your exchange you must pay the difference."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "mb-2"
  }, "Additional Items"), swapItems.additionalItems.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_swaps_swap_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: item,
      currencyCode: currencyCode,
      taxRate: taxRate
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "mb-2"
  }, "Return Items"), swapItems.returnItems.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_swaps_swap_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      item: item,
      currencyCode: currencyCode,
      taxRate: taxRate
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Select shipping for additiona items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_shipping_shipping_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: additionalShippingOptions,
    currencyCode: currencyCode,
    onSelect: setSelectedShippingOption,
    defaultValue: seletedShippingOption
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), swapItems.returnShipping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "font-semibold"
  }, swapItems.returnShipping.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "font-light"
  }, "(for return items)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_8__.formatPrice)(swapItems.returnShipping.unit_price, currencyCode, 1, taxRate))), seletedShippingOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex items-center justify-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "font-semibold"
  }, seletedShippingOption.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "font-light"
  }, "(for exchange items)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_8__.formatPrice)(seletedShippingOption.amount, currencyCode, 1, taxRate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex items-center justify-between mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "font-semibold"
  }, "Amount Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, amountDue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, paymentError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_error_message__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: paymentError
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_error_message__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: "This is for testing purposes only, and should not be used in a production environment."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "w-full btn-ui mt-2",
    onClick: handlePayment,
    disabled: isSubmitting
  }, "Pay")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "loading..."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swap);

/***/ }),

/***/ "./src/utils/format-price.js":
/*!***********************************!*\
  !*** ./src/utils/format-price.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPrice": () => (/* binding */ formatPrice)
/* harmony export */ });
/**
 *
 * @param {number} amount the amount to format
 * @param {string} currencyCode the currency code to use for the price
 * @param {nunber} taxRate the tax rate to apply to the price
 * @param {number} quantity is optional and defaults to 1
 * @returns {string} the formatted price
 */
const formatPrice = (amount, currencyCode, quantity = 1, taxRate = 0) => {
  return parseFloat((amount / 100 * quantity * 1).toFixed(2)) + " " + currencyCode.toUpperCase();
};

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Medusa Gatsby Starter","description":"Kick off your next, great e-commerce project with this default starter with Medusa, Gatsby and common dev tools.","author":"@medusajs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-swap-js.js.map