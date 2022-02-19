"use strict";
exports.id = "component---src-pages-account-order-history-js";
exports.ids = ["component---src-pages-account-order-history-js"];
exports.modules = {

/***/ "./src/components/account/account-layout.jsx":
/*!***************************************************!*\
  !*** ./src/components/account/account-layout.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-customer */ "./src/hooks/use-customer.js");
/* harmony import */ var _account_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-nav */ "./src/components/account/account-nav.jsx");





const AccountLayout = ({
  children
}) => {
  const {
    loading,
    customer
  } = (0,_hooks_use_customer__WEBPACK_IMPORTED_MODULE_2__.useCustomer)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!loading && !customer) {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_0__.navigate)("/sign-in");
    }
  }, [loading, customer]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "bg-ui"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col lg:flex-row layout-base py-0 lg:py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lg:mr-24 relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_account_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex-grow my-4 lg:my-0"
  }, loading && !customer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
  })) : children)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountLayout);

/***/ }),

/***/ "./src/components/account/account-nav-link.jsx":
/*!*****************************************************!*\
  !*** ./src/components/account/account-nav-link.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const AccountNavLink = ({
  svg,
  label,
  to
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: to,
    className: "group hover:bg-ui-light rounded-lg text-left w-56 px-4 py-2 inline-flex items-center justify-center lg:justify-start mb-3 last:mb-0 text-ui-dark flex-grow",
    activeClassName: "bg-ui-light text-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: svg,
    alt: "",
    className: "h-6 w-auto mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, label));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountNavLink);

/***/ }),

/***/ "./src/components/account/account-nav.jsx":
/*!************************************************!*\
  !*** ./src/components/account/account-nav.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_package_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/package.svg */ "./src/icons/package.svg");
/* harmony import */ var _icons_user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/user.svg */ "./src/icons/user.svg");
/* harmony import */ var _account_nav_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-nav-link */ "./src/components/account/account-nav-link.jsx");





const AccountNav = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start lg:items-center lg:flex-col text-sm mt-8 lg:mt-0 lg:sticky lg:top-28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_account_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    svg: _icons_user_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    label: "Account",
    to: "/account"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-1 lg:mx-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_account_nav_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    svg: _icons_package_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    label: "Order History",
    to: "/account/order-history"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountNav);

/***/ }),

/***/ "./src/components/orders/order-bulletin-info.jsx":
/*!*******************************************************!*\
  !*** ./src/components/orders/order-bulletin-info.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const OrderBulletinInfo = ({
  label,
  info
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold mb-2"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-light"
  }, info));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBulletinInfo);

/***/ }),

/***/ "./src/components/orders/order-bulletin.jsx":
/*!**************************************************!*\
  !*** ./src/components/orders/order-bulletin.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/capitalize */ "./src/utils/capitalize.js");
/* harmony import */ var _utils_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/class-names */ "./src/utils/class-names.js");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");
/* harmony import */ var _order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-bulletin-info */ "./src/components/orders/order-bulletin-info.jsx");







const OrderBulletin = ({
  order,
  cta = true
}) => {
  const {
    0: isReturnable,
    1: setIsReturnable
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (order !== null && order !== void 0 && order.fulfillment_status) {
      switch (order.fulfillment_status) {
        case "returned":
          setIsReturnable(false);
          break;

        case "not_fulfilled":
          setIsReturnable(false);
          break;

        case "canceled":
          setIsReturnable(false);
          break;

        case "requires_action":
          setIsReturnable(false);
          break;

        default:
          setIsReturnable(true);
          break;
      }
    }
  }, [order]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "bg-ui-light flex items-center justify-between p-4 rounded-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (0,_utils_class_names__WEBPACK_IMPORTED_MODULE_3__.classNames)("flex items-center", !cta ? "justify-between w-full" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Order number",
    info: `#${order.display_id}`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hidden lg:block mr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Date placed",
    info: new Date(order.created_at).toLocaleDateString()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hidden lg:block mr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Shipment",
    info: (0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(order.fulfillment_status.replace(/_/g, " "))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hidden lg:block mr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Payment",
    info: (0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.capitalize)(order.payment_status.replace(/_/g, " "))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hidden lg:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_order_bulletin_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Total amount",
    info: (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_4__.formatPrice)(order.total, order.currency_code)
  }))), cta && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: (0,_utils_class_names__WEBPACK_IMPORTED_MODULE_3__.classNames)(!isReturnable ? "pointer-events-none opacity-50" : ""),
    to: "/create-return",
    state: {
      order: order
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn-ui"
  }, !isReturnable ? "Can't be returned" : "Create return")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBulletin);

/***/ }),

/***/ "./src/components/orders/order-history-entry.jsx":
/*!*******************************************************!*\
  !*** ./src/components/orders/order-history-entry.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_bulletin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-bulletin */ "./src/components/orders/order-bulletin.jsx");
/* harmony import */ var _order_history_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-history-item */ "./src/components/orders/order-history-item.jsx");




const OrderHistoryEntry = ({
  order
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-b border-ui-medium last:border-none mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order_bulletin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    order: order
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, order.items.map((item, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order_history_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      item: item,
      currencyCode: order.currency_code
    });
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderHistoryEntry);

/***/ }),

/***/ "./src/components/orders/order-history-item.jsx":
/*!******************************************************!*\
  !*** ./src/components/orders/order-history-item.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-cart */ "./src/hooks/use-cart.js");
/* harmony import */ var _utility_regional_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/regional-link */ "./src/components/utility/regional-link.jsx");




const OrderHistoryItem = ({
  item,
  currencyCode
}) => {
  const {
    actions: {
      addItem
    }
  } = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_1__.useCart)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mt-8 mb-8 last:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-64 w-72 bg-ui-light rounded-lg mr-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-full h-auto object-cover object-center",
    src: item.thumbnail,
    alt: item.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-between w-full py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-baseline justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm lg:text-lg"
  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm flex flex-col mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Variant: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Quantity: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, item.quantity)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm lg:text-lg font-semibold"
  }, (item.unit_price * item.quantity / 100).toFixed(2), " ", currencyCode.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center text-sm font-medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_regional_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: item.variant.product.handle
  }, "View Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-ui-dark h-4 w-px mx-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "text-gray-500 hover:text-gray-700 font-medium",
    onClick: () => addItem({
      variant_id: item.variant.id,
      quantity: item.quantity
    })
  }, "Buy Again")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderHistoryItem);

/***/ }),

/***/ "./src/components/utility/regional-link.jsx":
/*!**************************************************!*\
  !*** ./src/components/utility/regional-link.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-region */ "./src/hooks/use-region.js");
/* harmony import */ var _utils_to_kebab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/to-kebab */ "./src/utils/to-kebab.js");





const RegionalLink = ({
  to,
  children
}) => {
  const {
    region
  } = (0,_hooks_use_region__WEBPACK_IMPORTED_MODULE_2__.useRegion)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: `/${(0,_utils_to_kebab__WEBPACK_IMPORTED_MODULE_3__.toKebab)(region === null || region === void 0 ? void 0 : region.name)}/${to}`
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegionalLink);

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

/***/ "./src/pages/account/order-history.js":
/*!********************************************!*\
  !*** ./src/pages/account/order-history.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_account_account_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/account/account-layout */ "./src/components/account/account-layout.jsx");
/* harmony import */ var _components_orders_order_history_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/orders/order-history-entry */ "./src/components/orders/order-history-entry.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/seo */ "./src/components/utility/seo.jsx");
/* harmony import */ var _hooks_use_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-customer */ "./src/hooks/use-customer.js");






const OrderHistory = () => {
  const {
    0: orders,
    1: setOrders
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    customer,
    loading,
    actions: {
      retrieveOrders
    }
  } = (0,_hooks_use_customer__WEBPACK_IMPORTED_MODULE_4__.useCustomer)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getOrders = async () => {
      if (!loading && customer) {
        const orderResponse = await retrieveOrders();

        if (orderResponse) {
          setOrders(orderResponse);
        }
      }
    };

    getOrders();
  }, [loading, customer, retrieveOrders]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_account_account_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Order History"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white shadow rounded-lg p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-xl"
  }, "Order History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-light lg:w-2/3 leading-5"
  }, "View the status of recent orders, and manage returns. It is not possible to return an order before it has been processed, if you wish to cancel your order then please contact us.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, orders.map(order => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: order.display_id,
      className: "mb-10 last:mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_orders_order_history_entry__WEBPACK_IMPORTED_MODULE_2__["default"], {
      order: order
    }));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderHistory);

/***/ }),

/***/ "./src/utils/capitalize.js":
/*!*********************************!*\
  !*** ./src/utils/capitalize.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize)
/* harmony export */ });
const capitalize = str => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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

/***/ "./src/utils/to-kebab.js":
/*!*******************************!*\
  !*** ./src/utils/to-kebab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toKebab": () => (/* binding */ toKebab)
/* harmony export */ });
const toKebab = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join("-");

/***/ }),

/***/ "./src/icons/package.svg":
/*!*******************************!*\
  !*** ./src/icons/package.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZlcnNpb249IjEuMSIgaWQ9ImxuaV9sbmktcGFja2FnZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IgoJIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNNjIuNSwyMS4xTDU3LjgsNi42Yy0wLjgtMi41LTMuMS00LjItNS43LTQuMkgxMi40Yy0yLjUsMC00LjgsMS42LTUuNiw0TDEuNiwyMWMtMC4yLDAuNi0wLjMsMS4xLTAuMywxLjd2MzEuNAoJYzAsNC4xLDMuMyw3LjQsNy40LDcuNGg0Ni43YzQuMSwwLDcuNC0zLjMsNy40LTcuNFYyMi43QzYyLjgsMjIuMiw2Mi43LDIxLjcsNjIuNSwyMS4xeiBNNTQuNSw3LjdsNC4xLDEyLjhIMzMuOFY1LjloMTguNAoJQzUzLjIsNS45LDU0LjIsNi42LDU0LjUsNy43eiBNMTAuMSw3LjZjMC40LTEsMS4zLTEuNywyLjQtMS43aDE3Ljh2MTQuNUg1LjVMMTAuMSw3LjZ6IE01NS4zLDU4LjFIOC43Yy0yLjIsMC0zLjktMS44LTMuOS0zLjlWMjMuOQoJaDU0LjV2MzAuMkM1OS4zLDU2LjMsNTcuNSw1OC4xLDU1LjMsNTguMXoiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/icons/user.svg":
/*!****************************!*\
  !*** ./src/icons/user.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZlcnNpb249IjEuMSIgaWQ9ImxuaV9sbmktdXNlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IgoJIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zMiwzNi40YzguMiwwLDE0LjktNi43LDE0LjktMTQuOVM0MC4yLDYuNSwzMiw2LjVzLTE0LjksNi43LTE0LjksMTQuOVMyMy44LDM2LjQsMzIsMzYuNHogTTMyLDEwCgkJYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNGMwLDYuMy01LjEsMTEuNC0xMS40LDExLjRjLTYuMywwLTExLjQtNS4xLTExLjQtMTEuNEMyMC42LDE1LjIsMjUuNywxMCwzMiwxMHoiLz4KCTxwYXRoIGQ9Ik02Mi4xLDU0LjRjLTguMy03LjEtMTktMTEtMzAuMS0xMXMtMjEuOCwzLjktMzAuMSwxMUMxLjEsNTUsMSw1Ni4xLDEuNyw1Ni45YzAuNiwwLjcsMS43LDAuOCwyLjUsMC4yCgkJYzcuNy02LjUsMTcuNi0xMC4xLDI3LjktMTAuMXMyMC4yLDMuNiwyNy45LDEwLjFjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC41LDAsMS0wLjIsMS4zLTAuNkM2Myw1Ni4xLDYyLjksNTUsNjIuMSw1NC40eiIvPgo8L2c+Cjwvc3ZnPgo=");

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
//# sourceMappingURL=component---src-pages-account-order-history-js.js.map