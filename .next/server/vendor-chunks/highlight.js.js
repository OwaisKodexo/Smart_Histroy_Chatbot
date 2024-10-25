/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/highlight.js";
exports.ids = ["vendor-chunks/highlight.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/highlight.js/lib/languages/profile.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/profile.js ***!
  \************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Python profiler\nDescription: Python profiler results\nAuthor: Brian Beck <exogen@gmail.com>\n*/\n\nfunction profile(hljs) {\n  return {\n    name: 'Python profiler',\n    contains: [\n      hljs.C_NUMBER_MODE,\n      {\n        begin: '[a-zA-Z_][\\\\da-zA-Z_]+\\\\.[\\\\da-zA-Z_]{1,3}',\n        end: ':',\n        excludeEnd: true\n      },\n      {\n        begin: '(ncalls|tottime|cumtime)',\n        end: '$',\n        keywords: 'ncalls tottime|10 cumtime|10 filename',\n        relevance: 10\n      },\n      {\n        begin: 'function calls',\n        end: '$',\n        contains: [ hljs.C_NUMBER_MODE ],\n        relevance: 10\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'string',\n        begin: '\\\\(',\n        end: '\\\\)$',\n        excludeBegin: true,\n        excludeEnd: true,\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = profile;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxJQUFJO0FBQzFEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC11aS8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wcm9maWxlLmpzPzU2MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQeXRob24gcHJvZmlsZXJcbkRlc2NyaXB0aW9uOiBQeXRob24gcHJvZmlsZXIgcmVzdWx0c1xuQXV0aG9yOiBCcmlhbiBCZWNrIDxleG9nZW5AZ21haWwuY29tPlxuKi9cblxuZnVuY3Rpb24gcHJvZmlsZShobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1B5dGhvbiBwcm9maWxlcicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16QS1aX11bXFxcXGRhLXpBLVpfXStcXFxcLltcXFxcZGEtekEtWl9dezEsM30nLFxuICAgICAgICBlbmQ6ICc6JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcobmNhbGxzfHRvdHRpbWV8Y3VtdGltZSknLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICduY2FsbHMgdG90dGltZXwxMCBjdW10aW1lfDEwIGZpbGVuYW1lJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdmdW5jdGlvbiBjYWxscycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogWyBobGpzLkNfTlVNQkVSX01PREUgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICBlbmQ6ICdcXFxcKSQnLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9maWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/highlight.js/lib/languages/profile.js\n");

/***/ })

};
;