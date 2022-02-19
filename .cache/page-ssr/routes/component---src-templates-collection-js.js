"use strict";
exports.id = "component---src-templates-collection-js";
exports.ids = ["component---src-templates-collection-js"];
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

/***/ "./src/components/categories/mobile-product-filter.jsx":
/*!*************************************************************!*\
  !*** ./src/components/categories/mobile-product-filter.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const MobileProductFilter = ({
  open,
  setOpen,
  filterables,
  activeFilters,
  setActiveFilters
}) => {
  const handleChange = e => {
    const {
      key,
      value
    } = JSON.parse(e.target.value);

    const tmp = _objectSpread({}, activeFilters);

    if (e.target.checked) {
      if (!tmp[key]) {
        tmp[key] = [];
      }

      tmp[key].push(value);
    } else {
      tmp[key] = tmp[key].filter(item => item !== value);

      if (tmp[key].length === 0) {
        delete tmp[key];
      }
    }

    setActiveFilters(tmp);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    as: "div",
    className: "fixed inset-0 flex z-40 lg:hidden",
    onClose: setOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
    enter: "transition-opacity ease-linear duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-linear duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
    className: "fixed inset-0 bg-black bg-opacity-25"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
    enter: "transition ease-in-out duration-300 transform",
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leave: "transition ease-in-out duration-300 transform",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "relative max-w-md w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "px-4 pt-5 pb-2 flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "sr-only"
  }, "Close menu"), "\xD7")), Object.keys(filterables).map(key => {
    const filterable = filterables[key];
    const values = filterable.values;
    const options = values.map(value => {
      const checked = (activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters[key]) && activeFilters[key].includes(value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        key: value,
        className: "block px-4 py-2 text-sm leading-5 text-gray-700"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "checkbox",
        className: "checkbox-ui",
        value: JSON.stringify({
          key,
          value
        }),
        checked: checked,
        onChange: handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
        className: "ml-2"
      }, value));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: key,
      className: "px-4 py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
      className: "text-sm leading-5 font-medium text-gray-900"
    }, filterable.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "mt-2"
    }, options));
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileProductFilter);

/***/ }),

/***/ "./src/components/products/product-filter.jsx":
/*!****************************************************!*\
  !*** ./src/components/products/product-filter.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const ProductFilter = ({
  filterables,
  activeFilters,
  setActiveFilters
}) => {
  const handleChange = e => {
    const {
      key,
      value
    } = JSON.parse(e.target.value);

    const tmp = _objectSpread({}, activeFilters);

    if (e.target.checked) {
      if (!tmp[key]) {
        tmp[key] = [];
      }

      tmp[key].push(value);
    } else {
      tmp[key] = tmp[key].filter(item => item !== value);

      if (tmp[key].length === 0) {
        delete tmp[key];
      }
    }

    setActiveFilters(tmp);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lg:sticky lg:top-0"
  }, Object.keys(filterables).map((key, index) => {
    const filterable = filterables[key];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: index,
      className: "py-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "font-medium mb-2"
    }, filterable.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, filterable.values.map((value, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        key: index,
        className: "block py-2 leading-5 text-sm text-gray-700"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        className: "checkbox-ui",
        type: "checkbox",
        value: JSON.stringify({
          key,
          value
        }),
        onChange: handleChange
      }), value);
    })));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductFilter);

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

/***/ "./src/hooks/use-filter.js":
/*!*********************************!*\
  !*** ./src/hooks/use-filter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilter": () => (/* binding */ useFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFilter = (products, activeFilters = null) => {
  const filteredProducts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let filtered = [];

    if (activeFilters) {
      const filters = Object.keys(activeFilters);
      filtered = products.filter(product => {
        return filters.every(filter => {
          return product.options.find(option => {
            if (option.title === filter && activeFilters[filter].some(r => option.values.map(v => v.value).includes(r))) {
              return product;
            } else {
              return null;
            }
          });
        });
      });
    } else {
      filtered = products;
    }

    return filtered;
  }, [products, activeFilters]);
  return filteredProducts;
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

/***/ "./src/templates/collection.js":
/*!*************************************!*\
  !*** ./src/templates/collection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_categories_mobile_product_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/categories/mobile-product-filter */ "./src/components/categories/mobile-product-filter.jsx");
/* harmony import */ var _components_products_product_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/products/product-filter */ "./src/components/products/product-filter.jsx");
/* harmony import */ var _components_products_product_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/products/product-list-item */ "./src/components/products/product-list-item.jsx");
/* harmony import */ var _components_utility_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utility/grid */ "./src/components/utility/grid.jsx");
/* harmony import */ var _components_utility_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utility/seo */ "./src/components/utility/seo.jsx");
/* harmony import */ var _hooks_use_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-filter */ "./src/hooks/use-filter.js");
/* harmony import */ var _icons_funnel_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/funnel.svg */ "./src/icons/funnel.svg");









const Collection = ({
  pageContext
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: activeFilters,
    1: setActiveFilters
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    title,
    filterables,
    products
  } = pageContext;
  const filteredProducts = (0,_hooks_use_filter__WEBPACK_IMPORTED_MODULE_6__.useFilter)(products, activeFilters);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_categories_mobile_product_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    setOpen: setOpen,
    filterables: filterables,
    activeFilters: activeFilters,
    setActiveFilters: setActiveFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout-base relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full border-b border-ui-medium pb-6 mb-2 lg:mb-6 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "font-semibold"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "lg:hidden",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _icons_funnel_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "",
    className: "w-4 h-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden lg:block lg:w-2/5 relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_products_product_filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filterables: filterables,
    activeFilters: activeFilters,
    setActiveFilters: setActiveFilters
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:ml-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_utility_grid__WEBPACK_IMPORTED_MODULE_4__["default"], null, filteredProducts.map(product => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_products_product_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product.handle,
      product: product
    });
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);

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

/***/ "./src/icons/funnel.svg":
/*!******************************!*\
  !*** ./src/icons/funnel.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZlcnNpb249IjEuMSIgaWQ9ImxuaV9sbmktZnVubmVsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI1LjIsNjIuN2MtMC41LDAtMS0wLjEtMS41LTAuNGMtMC44LTAuNS0xLjMtMS4zLTEuMy0yLjNWMjZMNC44LDUuNkM0LjEsNC44LDQsMy42LDQuNSwyLjdDNC45LDEuOCw1LjksMS4yLDcsMS4yaDUwCgkJYzEuMSwwLDIuMSwwLjcsMi42LDEuN2MwLjQsMSwwLjIsMi4xLTAuNSwyLjhMNDEuNywyNS44djI1LjZjMCwwLjUtMC4yLDEuMy0xLDJsLTAuMywwLjJsLTEzLjksOC43QzI2LjEsNjIuNiwyNS42LDYyLjcsMjUuMiw2Mi43CgkJeiBNMjUuMywyMy45YzAuNCwwLjUsMC42LDEuMiwwLjYsMS43djMzbDEyLjMtNy44VjI1LjdjMC0wLjQsMC0xLjIsMC43LTEuOWwxNi40LTE5SDguN0wyNS4zLDIzLjl6IE0yMi42LDI2LjIKCQlDMjIuNiwyNi4yLDIyLjYsMjYuMiwyMi42LDI2LjJMMjIuNiwyNi4yeiBNNTYuNSwzLjRDNTYuNCwzLjQsNTYuNCwzLjQsNTYuNSwzLjRMNTYuNSwzLjR6Ii8+CjwvZz4KPC9zdmc+");

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
//# sourceMappingURL=component---src-templates-collection-js.js.map