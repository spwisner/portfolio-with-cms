webpackHotUpdate(0,{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268);
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/swisner/spw/repos/portfolio-with-cms/src/components/Navbar.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).enterModule;
  enterModule && enterModule(module);
})();





var logoText = "<SW>";
function NavBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      navBarActiveClass = _useState2[0],
      setNavBarActiveClass = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerHeight),
      width = _useState3[0],
      setWidth = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleResize = function handleResize() {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var toggleHamburger = function toggleHamburger() {
    setActive(!active);
    var newClass = !active ? "is-active" : "";
    setNavBarActiveClass(newClass);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar is-transparent",
    role: "navigation",
    "aria-label": "main-navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "navbar-item",
    title: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, width >= 1088 ? logoText : 'Steve Wisner')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-burger burger " + navBarActiveClass,
    "data-target": "navMenu",
    onClick: function onClick() {
      return toggleHamburger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navMenu",
    className: "navbar-menu " + navBarActiveClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-start has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "navbar-item navbar-option",
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "navbar-item navbar-option",
    to: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "navbar-item navbar-option",
    to: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-end has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    href: "https://github.com/spwisner",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))))));
} // export default Navbar;

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logoText, "logoText", "/Users/swisner/spw/repos/portfolio-with-cms/src/components/Navbar.js");
  reactHotLoader.register(NavBar, "NavBar", "/Users/swisner/spw/repos/portfolio-with-cms/src/components/Navbar.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(266);
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(280);
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(284);
var _jsxFileName = "/Users/swisner/spw/repos/portfolio-with-cms/src/templates/index-page.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).enterModule;
  enterModule && enterModule(module);
})();








function IndexPageTemplate(_ref) {
  var title = _ref.title,
      subheading = _ref.subheading,
      image = _ref.image,
      about = _ref.about,
      contact = _ref.contact,
      skills = _ref.skills;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerHeight),
      height = _useState[0],
      setHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleResize = function handleResize() {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image margin-top-0 profile-image " + (height < 500 ? 'static-profile-image' : ''),
    style: {
      maxWidth: '100%',
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-text-container",
    style: {
      display: 'flex',
      height: '150px',
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered",
    style: {
      boxShadow: 'rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px',
      backgroundColor: 'rgb(19.6, 24.3, 16.1)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      boxShadow: 'rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px',
      backgroundColor: 'rgb(19.6, 24.3, 16.1)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, subheading))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-5 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, about.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, about.description))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-5 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, contact.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, skills.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, skills.subtitle)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gridItems: skills.blurbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Latest Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "All Projects"))))))))));
}
IndexPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  about: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  skills: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    title: frontmatter.title,
    subheading: frontmatter.subheading,
    image: frontmatter.image,
    about: frontmatter.about,
    contact: frontmatter.contact,
    skills: frontmatter.skills,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "152172687";
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/Users/swisner/spw/repos/portfolio-with-cms/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/Users/swisner/spw/repos/portfolio-with-cms/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/swisner/spw/repos/portfolio-with-cms/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/swisner/spw/repos/portfolio-with-cms/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ })

})
//# sourceMappingURL=0.5b46c64ddb25bb39f45d.hot-update.js.map