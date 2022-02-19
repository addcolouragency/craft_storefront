"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

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

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");




const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
  className: "layout-base"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "404: Not found"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
  className: "h-full w-full flex flex-col justify-center items-center mt-8"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
  className: "text-3xl"
}, "404: NOT FOUND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
  className: "mt-2"
}, "You just hit a route that doesn't exist... the sadness \uD83D\uDE22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "mt-4 btn-ui"
}, "Go to frontpage")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

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
//# sourceMappingURL=component---src-pages-404-js.js.map