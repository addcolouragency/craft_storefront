"use strict";
exports.id = "component---src-pages-shopping-bag-js";
exports.ids = ["component---src-pages-shopping-bag-js"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {



const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = Object.assign({
    pascalCase: false
  }, options);

  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  const hasUpperCase = input !== input.toLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};

module.exports = camelCase; // TODO: Remove this for the next major release

module.exports["default"] = camelCase;

/***/ }),

/***/ "./src/components/cart/cart-item.jsx":
/*!*******************************************!*\
  !*** ./src/components/cart/cart-item.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-cart */ "./src/hooks/use-cart.js");
/* harmony import */ var _utils_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/class-names */ "./src/utils/class-names.js");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format-price */ "./src/utils/format-price.js");
/* harmony import */ var _products_quantity_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products/quantity-selector */ "./src/components/products/quantity-selector.jsx");






const CartItem = ({
  item,
  currencyCode,
  showDescription = true
}) => {
  var _item$variant, _item$variant$product;

  const {
    actions: {
      removeItem,
      updateQuantity
    }
  } = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_1__.useCart)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-6 last:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-ui rounded-md overflow-hidden mr-4 max-w-1/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-auto w-full object-cover",
    src: item.thumbnail,
    alt: item.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex text-sm flex-grow py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-between w-full flex-grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold mb-2"
  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: (0,_utils_class_names__WEBPACK_IMPORTED_MODULE_2__.classNames)(showDescription && "lg:block mb-4", "hidden font-light")
  }, (_item$variant = item.variant) === null || _item$variant === void 0 ? void 0 : (_item$variant$product = _item$variant.product) === null || _item$variant$product === void 0 ? void 0 : _item$variant$product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-ui-dark"
  }, "Variant:"), " ", item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold"
  }, (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(item.unit_price, currencyCode, item.quantity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => await removeItem(item.id)
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_products_quantity_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    quantity: item.quantity,
    increment: () => updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }),
    decrement: () => updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    })
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);

/***/ }),

/***/ "./src/components/cart/cart-review.jsx":
/*!*********************************************!*\
  !*** ./src/components/cart/cart-review.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkout_totals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkout/totals */ "./src/components/checkout/totals.jsx");




const CartReview = ({
  cart
}) => {
  var _cart$region;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "bg-white rounded-md shadow px-8 py-6 w-full sticky top-28"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "font-semibold mb-4"
  }, "Order Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_checkout_totals__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtotal: cart.subtotal,
    total: cart.total,
    currencyCode: (_cart$region = cart.region) === null || _cart$region === void 0 ? void 0 : _cart$region.currency_code,
    cartId: cart.id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/checkout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn-ui w-full"
  }, "Checkout")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartReview);

/***/ }),

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

/***/ "./src/components/products/product-list-item.jsx":
/*!*******************************************************!*\
  !*** ./src/components/products/product-list-item.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-price */ "./src/hooks/use-price.js");
/* harmony import */ var _hooks_use_region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-region */ "./src/hooks/use-region.js");
/* harmony import */ var _utility_regional_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/regional-link */ "./src/components/utility/regional-link.jsx");






const ProductListItem = ({
  product
}) => {
  var _product$thumbnail, _product$thumbnail$ch;

  const {
    actions: {
      getFromPrice
    }
  } = (0,_hooks_use_price__WEBPACK_IMPORTED_MODULE_1__.usePrice)();
  const {
    region
  } = (0,_hooks_use_region__WEBPACK_IMPORTED_MODULE_2__.useRegion)();
  const fromPrice = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return getFromPrice(product, region === null || region === void 0 ? void 0 : region.currency_code); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, region === null || region === void 0 ? void 0 : region.currency_code]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utility_regional_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: product.handle,
    className: "font-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: product.id,
    className: "group relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: (_product$thumbnail = product.thumbnail) === null || _product$thumbnail === void 0 ? void 0 : (_product$thumbnail$ch = _product$thumbnail.childImageSharp) === null || _product$thumbnail$ch === void 0 ? void 0 : _product$thumbnail$ch.gatsbyImageData,
    alt: product.title,
    className: "w-auto h-full object-center object-cover"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-4 flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm text-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-normal"
  }, product.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-semibold text-gray-900"
  }, "from ", fromPrice))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductListItem);

/***/ }),

/***/ "./src/components/products/quantity-selector.jsx":
/*!*******************************************************!*\
  !*** ./src/components/products/quantity-selector.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const QuantitySelector = ({
  quantity,
  increment,
  decrement
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center rounded-md px-4 py-2 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => decrement()
  }, "\u2013"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-8 text-center"
  }, quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => increment()
  }, "+"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantitySelector);

/***/ }),

/***/ "./src/components/utility/grid.jsx":
/*!*****************************************!*\
  !*** ./src/components/utility/grid.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/arrow */ "./src/icons/arrow.jsx");




const Grid = ({
  title,
  cta,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, title && cta ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-2xl font-semibold text-gray-700"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: cta.to,
    className: "text-ui-dark flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "mr-2 text-ui-dark"
  }, cta.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icons_arrow__WEBPACK_IMPORTED_MODULE_2__["default"], null))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
  }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

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

/***/ "./src/hooks/use-price.js":
/*!********************************!*\
  !*** ./src/hooks/use-price.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePrice": () => (/* binding */ usePrice)
/* harmony export */ });
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format-price */ "./src/utils/format-price.js");

const usePrice = () => {
  const getFromPrice = (product, currencyCode) => {
    const {
      variants
    } = product;
    let prices = [];

    for (const variant of variants) {
      const currencySpecificPrices = variant.prices.filter(price => price.currency_code === currencyCode);
      prices = [...prices, ...currencySpecificPrices];
    }

    if (prices.length) {
      const lowestPrice = prices.reduce((lowest, current) => {
        if (lowest.amount > current.amount) {
          return current;
        }

        return lowest;
      });
      return (0,_utils_format_price__WEBPACK_IMPORTED_MODULE_0__.formatPrice)(lowestPrice.amount, lowestPrice.currency_code);
    }

    return undefined;
  };

  return {
    actions: {
      getFromPrice
    }
  };
};

/***/ }),

/***/ "./src/hooks/use-suggestions.js":
/*!**************************************!*\
  !*** ./src/hooks/use-suggestions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSuggestions": () => (/* binding */ useSuggestions)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1489252726_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1489252726.json */ "./public/page-data/sq/d/1489252726.json");

const useSuggestions = () => {
  const data = _public_page_data_sq_d_1489252726_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const products = data.products.edges.map(edge => edge.node);

  const getSuggestionsFromCart = cart => {
    if (!cart) return [];
    const cartProductHandles = cart.items.map(item => {
      var _item$variant, _item$variant$product;

      return (_item$variant = item.variant) === null || _item$variant === void 0 ? void 0 : (_item$variant$product = _item$variant.product) === null || _item$variant$product === void 0 ? void 0 : _item$variant$product.handle;
    });
    const suggestions = products.filter(product => !cartProductHandles.includes(product.handle));
    return suggestions;
  };

  return {
    getSuggestionsFromCart
  };
};

/***/ }),

/***/ "./src/icons/arrow.jsx":
/*!*****************************!*\
  !*** ./src/icons/arrow.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Arrow = ({
  color
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16",
    height: "8",
    viewBox: "0 0 16 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z",
    fill: color ? color : "#89959C"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);

/***/ }),

/***/ "./src/pages/shopping-bag.js":
/*!***********************************!*\
  !*** ./src/pages/shopping-bag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart/cart-item */ "./src/components/cart/cart-item.jsx");
/* harmony import */ var _components_cart_cart_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cart/cart-review */ "./src/components/cart/cart-review.jsx");
/* harmony import */ var _components_products_product_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/products/product-list-item */ "./src/components/products/product-list-item.jsx");
/* harmony import */ var _components_utility_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utility/grid */ "./src/components/utility/grid.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");
/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-cart */ "./src/hooks/use-cart.js");
/* harmony import */ var _hooks_use_suggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-suggestions */ "./src/hooks/use-suggestions.js");









const ShoppingBag = () => {
  const {
    0: related,
    1: setRelated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    cart
  } = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_6__.useCart)();
  const {
    getSuggestionsFromCart
  } = (0,_hooks_use_suggestions__WEBPACK_IMPORTED_MODULE_7__.useSuggestions)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cart.items.length > 0) {
      const relatedProducts = getSuggestionsFromCart(cart);
      setRelated(relatedProducts);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [cart]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Shopping Bag"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex relative flex-col-reverse lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col lg:mr-12 lg:w-3/5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "font-semibold"
  }, "Shopping Bag")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full"
  }, cart.items.map(item => {
    var _cart$region;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      item: item,
      currencyCode: (_cart$region = cart.region) === null || _cart$region === void 0 ? void 0 : _cart$region.currency_code
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative w-full mb-8 lg:mb-0 lg:w-2/5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cart_cart_review__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: cart
  }))), related.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "You might also like",
    cta: {
      to: "/products",
      text: "Browse all products"
    }
  }, related.slice(0, 4).map(product => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_products_product_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product.handle,
      product: product
    });
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingBag);

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

/***/ "./public/page-data/sq/d/1489252726.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1489252726.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"products":{"edges":[{"node":{"handle":"t-shirt","title":"Medusa T-Shirt","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/4c3d1b098836a962c1583ddf6cdb773c/81fa2/tee-black-front.png","srcSet":"/static/4c3d1b098836a962c1583ddf6cdb773c/10be3/tee-black-front.png 420w,\\n/static/4c3d1b098836a962c1583ddf6cdb773c/21bf6/tee-black-front.png 839w,\\n/static/4c3d1b098836a962c1583ddf6cdb773c/81fa2/tee-black-front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/4c3d1b098836a962c1583ddf6cdb773c/d36aa/tee-black-front.webp 420w,\\n/static/4c3d1b098836a962c1583ddf6cdb773c/850b4/tee-black-front.webp 839w,\\n/static/4c3d1b098836a962c1583ddf6cdb773c/75b1d/tee-black-front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]},{"prices":[{"amount":1950,"currency_code":"eur"},{"amount":2200,"currency_code":"usd"}]}]}},{"node":{"handle":"sweatshirt","title":"Medusa Sweatshirt","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/81fa2/sweatshirt-vintage-front.png","srcSet":"/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/10be3/sweatshirt-vintage-front.png 420w,\\n/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/21bf6/sweatshirt-vintage-front.png 839w,\\n/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/81fa2/sweatshirt-vintage-front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/d36aa/sweatshirt-vintage-front.webp 420w,\\n/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/850b4/sweatshirt-vintage-front.webp 839w,\\n/static/bfe3bb2b6678a98cd3b2bb8d5632c4a6/75b1d/sweatshirt-vintage-front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]}]}},{"node":{"handle":"sweatpants","title":"Medusa Sweatpants","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/77f055b1d982fa47abd5679b99540236/81fa2/sweatpants-gray-front.png","srcSet":"/static/77f055b1d982fa47abd5679b99540236/10be3/sweatpants-gray-front.png 420w,\\n/static/77f055b1d982fa47abd5679b99540236/21bf6/sweatpants-gray-front.png 839w,\\n/static/77f055b1d982fa47abd5679b99540236/81fa2/sweatpants-gray-front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/77f055b1d982fa47abd5679b99540236/d36aa/sweatpants-gray-front.webp 420w,\\n/static/77f055b1d982fa47abd5679b99540236/850b4/sweatpants-gray-front.webp 839w,\\n/static/77f055b1d982fa47abd5679b99540236/75b1d/sweatpants-gray-front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]},{"prices":[{"amount":2950,"currency_code":"eur"},{"amount":3350,"currency_code":"usd"}]}]}},{"node":{"handle":"shorts","title":"Medusa Shorts","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/579f2a7f4496773d67cb578201f8f607/81fa2/shorts-vintage-front.png","srcSet":"/static/579f2a7f4496773d67cb578201f8f607/10be3/shorts-vintage-front.png 420w,\\n/static/579f2a7f4496773d67cb578201f8f607/21bf6/shorts-vintage-front.png 839w,\\n/static/579f2a7f4496773d67cb578201f8f607/81fa2/shorts-vintage-front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/579f2a7f4496773d67cb578201f8f607/d36aa/shorts-vintage-front.webp 420w,\\n/static/579f2a7f4496773d67cb578201f8f607/850b4/shorts-vintage-front.webp 839w,\\n/static/579f2a7f4496773d67cb578201f8f607/75b1d/shorts-vintage-front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":2500,"currency_code":"eur"},{"amount":2850,"currency_code":"usd"}]},{"prices":[{"amount":2500,"currency_code":"eur"},{"amount":2850,"currency_code":"usd"}]},{"prices":[{"amount":2500,"currency_code":"eur"},{"amount":2850,"currency_code":"usd"}]},{"prices":[{"amount":2500,"currency_code":"eur"},{"amount":2850,"currency_code":"usd"}]}]}},{"node":{"handle":"hoodie","title":"Medusa Hoodie","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/29eaac071676b13c7622a871bdec2273/81fa2/black_hoodie_front.png","srcSet":"/static/29eaac071676b13c7622a871bdec2273/10be3/black_hoodie_front.png 420w,\\n/static/29eaac071676b13c7622a871bdec2273/21bf6/black_hoodie_front.png 839w,\\n/static/29eaac071676b13c7622a871bdec2273/81fa2/black_hoodie_front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/29eaac071676b13c7622a871bdec2273/d36aa/black_hoodie_front.webp 420w,\\n/static/29eaac071676b13c7622a871bdec2273/850b4/black_hoodie_front.webp 839w,\\n/static/29eaac071676b13c7622a871bdec2273/75b1d/black_hoodie_front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]}]}},{"node":{"handle":"longsleeve","title":"Medusa Longsleeve","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/58e8e187b55590d1ada946742507f6f2/81fa2/ls-black-front.png","srcSet":"/static/58e8e187b55590d1ada946742507f6f2/10be3/ls-black-front.png 420w,\\n/static/58e8e187b55590d1ada946742507f6f2/21bf6/ls-black-front.png 839w,\\n/static/58e8e187b55590d1ada946742507f6f2/81fa2/ls-black-front.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/58e8e187b55590d1ada946742507f6f2/d36aa/ls-black-front.webp 420w,\\n/static/58e8e187b55590d1ada946742507f6f2/850b4/ls-black-front.webp 839w,\\n/static/58e8e187b55590d1ada946742507f6f2/75b1d/ls-black-front.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]},{"prices":[{"amount":3650,"currency_code":"eur"},{"amount":4150,"currency_code":"usd"}]}]}},{"node":{"handle":"coffee-mug","title":"Medusa Coffee Mug","thumbnail":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b1318466458a86380b6798b989eb5941/81fa2/coffee-mug.png","srcSet":"/static/b1318466458a86380b6798b989eb5941/10be3/coffee-mug.png 420w,\\n/static/b1318466458a86380b6798b989eb5941/21bf6/coffee-mug.png 839w,\\n/static/b1318466458a86380b6798b989eb5941/81fa2/coffee-mug.png 1678w","sizes":"(min-width: 1678px) 1678px, 100vw"},"sources":[{"srcSet":"/static/b1318466458a86380b6798b989eb5941/d36aa/coffee-mug.webp 420w,\\n/static/b1318466458a86380b6798b989eb5941/850b4/coffee-mug.webp 839w,\\n/static/b1318466458a86380b6798b989eb5941/75b1d/coffee-mug.webp 1678w","type":"image/webp","sizes":"(min-width: 1678px) 1678px, 100vw"}]},"width":1678,"height":2098}}},"variants":[{"prices":[{"amount":1000,"currency_code":"eur"},{"amount":1200,"currency_code":"usd"}]}]}}]}}}');

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
//# sourceMappingURL=component---src-pages-shopping-bag-js.js.map