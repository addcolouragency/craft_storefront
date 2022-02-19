"use strict";
exports.id = "component---src-pages-return-confirmed-js";
exports.ids = ["component---src-pages-return-confirmed-js"];
exports.modules = {

/***/ "./src/components/returns/return-completed.item.jsx":
/*!**********************************************************!*\
  !*** ./src/components/returns/return-completed.item.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_image_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/image-container */ "./src/components/utility/image-container.jsx");



const ReturnCompletedItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-6 last:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mr-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_image_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Quantity", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-700 font-semibold"
  }, item.quantity)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturnCompletedItem);

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

/***/ "./src/hooks/use-order.js":
/*!********************************!*\
  !*** ./src/hooks/use-order.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRetrieveOrder": () => (/* binding */ useRetrieveOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_medusa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-medusa */ "./src/hooks/use-medusa.js");


const useRetrieveOrder = orderId => {
  const client = (0,_use_medusa__WEBPACK_IMPORTED_MODULE_1__.useMedusa)();
  const retrieve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const order = await client.orders.retrieve(orderId).then(({
      order
    }) => order).catch(_ => undefined);
    return order;
  }, [client.orders, orderId]);
  return retrieve;
};

/***/ }),

/***/ "./src/pages/return-confirmed.js":
/*!***************************************!*\
  !*** ./src/pages/return-confirmed.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_returns_return_completed_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/returns/return-completed.item */ "./src/components/returns/return-completed.item.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");
/* harmony import */ var _hooks_use_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-order */ "./src/hooks/use-order.js");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format-price */ "./src/utils/format-price.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const ReturnConfirmed = ({
  location
}) => {
  var _location$state, _location$state$confi;

  const {
    0: confirmedReturn,
    1: setConfirmedReturn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: currencyCode,
    1: setCurrencyCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("eur");
  const {
    0: refundAmount,
    1: setRefundAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const retrieve = (0,_hooks_use_order__WEBPACK_IMPORTED_MODULE_4__.useRetrieveOrder)((_location$state = location.state) === null || _location$state === void 0 ? void 0 : (_location$state$confi = _location$state.confirmedReturn) === null || _location$state$confi === void 0 ? void 0 : _location$state$confi.order_id);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getReturn = async () => {
      const state = location.state;
      const stateReturn = state === null || state === void 0 ? void 0 : state.confirmedReturn;

      if (stateReturn) {
        setConfirmedReturn(stateReturn);
        setRefundAmount(stateReturn.refund_amount);
        const order = await retrieve();

        if (order) {
          setCurrencyCode(order.currency_code);
          const itemIds = stateReturn.items.map(({
            item_id
          }) => item_id);
          const returnedItems = [];
          order.items.forEach(item => {
            if (itemIds.includes(item.id)) {
              const quantity = stateReturn.items.find(({
                item_id
              }) => item_id === item.id).quantity;
              returnedItems.push(_objectSpread(_objectSpread({}, item), {}, {
                quantity
              }));
            }
          });
          setItems(returnedItems);
        }
      }

      setLoading(false);
    };

    getReturn();
  }, [location.state, retrieve]);
  return !loading && confirmedReturn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "layout-base flex justify-center pb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Return Confirmed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "max-w-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-xs font-medium mb-2"
  }, "THANK YOU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Return Confirmed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-md font-light mt-3"
  }, "Your return was successful. If you purchased return shipping you will receive an email with further instruction shortly. Once the return is processed, your refund of", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "font-semibold"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_5__.formatPrice)(refundAmount, currencyCode)), " ", "will be released to your account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-8"
  }, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_returns_return_completed_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: item
    });
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "loading..."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturnConfirmed);

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
//# sourceMappingURL=component---src-pages-return-confirmed-js.js.map