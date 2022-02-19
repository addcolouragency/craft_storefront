"use strict";
exports.id = "component---src-pages-order-confirmed-js";
exports.ids = ["component---src-pages-order-confirmed-js"];
exports.modules = {

/***/ "./src/components/checkout/totals.jsx":
/*!********************************************!*\
  !*** ./src/components/checkout/totals.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_estimated_shipping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-estimated-shipping */ "./src/hooks/use-estimated-shipping.js");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");




const Totals = ({
  subtotal = 0,
  shipping = null,
  discount = null,
  total = 0,
  currencyCode = "eur",
  cartId = null
}) => {
  const {
    estimatedShipping
  } = (0,_hooks_use_estimated_shipping__WEBPACK_IMPORTED_MODULE_1__.useEstimatedShipping)(cartId);
  const appliedDiscount = discount !== null && discount !== void 0 && discount.length ? discount[0] : 0;
  const totalPrice = shipping ? total + shipping : total + estimatedShipping;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-light text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Subtotal (incl. taxes)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-medium"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(subtotal, currencyCode))), shipping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Shipping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-medium"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(shipping, currencyCode))), !shipping && estimatedShipping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Estimated shipping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-medium"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(estimatedShipping, currencyCode))), appliedDiscount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-2xs py-1 px-3 rounded-2xl bg-ui-medium ml-2 font-medium"
  }, discount.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-medium"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(discount.amount, currencyCode))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-px w-full bg-ui-medium mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-medium"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(totalPrice, currencyCode))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Totals);

/***/ }),

/***/ "./src/components/orders/order-completed-item.jsx":
/*!********************************************************!*\
  !*** ./src/components/orders/order-completed-item.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");
/* harmony import */ var _utility_divided_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/divided-container */ "./src/components/utility/divided-container.jsx");
/* harmony import */ var _utility_image_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/image-container */ "./src/components/utility/image-container.jsx");





const OrderCompletedItem = ({
  item,
  currencyCode,
  taxRate
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-6 last:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mr-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_image_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: item.thumbnail,
    alt: item.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-between py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-2 last:mb-0"
  }, "Variant: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm text-ui-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_divided_container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Quantity", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-700 font-semibold"
  }, item.quantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Price", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-700 font-semibold"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(item.unit_price, currencyCode, item.quantity, taxRate)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderCompletedItem);

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

/***/ "./src/components/utility/image-container.jsx":
/*!****************************************************!*\
  !*** ./src/components/utility/image-container.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/class-names */ "./src/utils/class-names.js");



const ImageContainer = ({
  size = "md",
  src,
  alt
}) => {
  const styles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (size) {
      case "xs":
        return "w-24 h-32 rounded-sm";

      case "sm":
        return "w-32 h-48 rounded-md";

      case "md":
        return "w-48 h-64 rounded-lg";

      case "lg":
        return "w-full h-96 rounded-lg";

      case "xl":
        break;

      default:
        break;
    }
  }, [size]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_class_names__WEBPACK_IMPORTED_MODULE_1__.classNames)(styles, "bg-ui-light overflow-hidden flex items-center justify-center")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-5/6 h-auto object-center object-contain",
    src: src,
    alt: alt
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageContainer);

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

/***/ "./src/hooks/use-estimated-shipping.js":
/*!*********************************************!*\
  !*** ./src/hooks/use-estimated-shipping.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEstimatedShipping": () => (/* binding */ useEstimatedShipping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_medusa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-medusa */ "./src/hooks/use-medusa.js");
/* harmony import */ var _use_region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-region */ "./src/hooks/use-region.js");



const useEstimatedShipping = cartId => {
  const {
    0: estimatedShipping,
    1: setEstimatedShipping
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    region
  } = (0,_use_region__WEBPACK_IMPORTED_MODULE_2__.useRegion)();
  const client = (0,_use_medusa__WEBPACK_IMPORTED_MODULE_1__.useMedusa)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updateEstimation = async () => {
      if (cartId && region) {
        const shippingOptions = await client.shippingOptions.listCartOptions(cartId).then(({
          shipping_options
        }) => shipping_options).catch(_err => []);
        const cheapestOption = shippingOptions.reduce((prev, curr) => prev.amount < curr.amount ? prev : curr);

        if (cheapestOption) {
          setEstimatedShipping(cheapestOption.amount);
        }
      }
    };

    updateEstimation();
  }, [cartId, client, region]);
  return {
    estimatedShipping
  };
};

/***/ }),

/***/ "./src/pages/order-confirmed.js":
/*!**************************************!*\
  !*** ./src/pages/order-confirmed.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_checkout_totals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/checkout/totals */ "./src/components/checkout/totals.jsx");
/* harmony import */ var _components_orders_order_completed_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/orders/order-completed-item */ "./src/components/orders/order-completed-item.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");





const OrderConfirmed = ({
  location
}) => {
  const {
    0: order,
    1: setOrder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getOrder = async () => {
      const state = location.state;
      const stateOrder = state === null || state === void 0 ? void 0 : state.order;

      if (stateOrder) {
        setOrder(stateOrder);
      }

      setLoading(false);
    };

    getOrder();
  }, [location.state]);
  return !loading && order ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout-base flex justify-center pb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Order Confirmed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-medium mb-2"
  }, "THANK YOU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Order Confirmed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md font-light mt-3"
  }, "Your order #", order.display_id, " was successfully processed. You will receive an email with the tracking number of your parcel once it\u2019s avaliable."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-8"
  }, order.items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_orders_order_completed_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: item,
      currencyCode: order.currency_code,
      taxRate: order.tax_rate
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_checkout_totals__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currencyCode: order.currency_code,
    subtotal: order.subtotal,
    shipping: order.shipping_total,
    total: order.total,
    discount: order.discounts
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "loading..."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderConfirmed);

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
//# sourceMappingURL=component---src-pages-order-confirmed-js.js.map