"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-math";
exports.ids = ["vendor-chunks/mdast-util-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-math/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mdast-util-math/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mathFromMarkdown: () => (/* binding */ mathFromMarkdown),\n/* harmony export */   mathToMarkdown: () => (/* binding */ mathToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var longest_streak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! longest-streak */ \"(ssr)/./node_modules/longest-streak/index.js\");\n/**\n * @typedef {import('hast').Element} HastElement\n * @typedef {import('hast').ElementContent} HastElementContent\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('../index.js').InlineMath} InlineMath\n * @typedef {import('../index.js').Math} Math\n *\n * @typedef ToOptions\n *   Configuration.\n * @property {boolean | null | undefined} [singleDollarTextMath=true]\n *   Whether to support math (text) with a single dollar (default: `true`).\n *\n *   Single dollars work in Pandoc and many other places, but often interfere\n *   with “normal” dollars in text.\n *   If you turn this off, you can still use two or more dollars for text math.\n */\n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown`.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */\nfunction mathFromMarkdown() {\n  return {\n    enter: {\n      mathFlow: enterMathFlow,\n      mathFlowFenceMeta: enterMathFlowMeta,\n      mathText: enterMathText\n    },\n    exit: {\n      mathFlow: exitMathFlow,\n      mathFlowFence: exitMathFlowFence,\n      mathFlowFenceMeta: exitMathFlowMeta,\n      mathFlowValue: exitMathData,\n      mathText: exitMathText,\n      mathTextData: exitMathData\n    }\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathFlow(token) {\n    /** @type {HastElement} */\n    const code = {\n      type: 'element',\n      tagName: 'code',\n      properties: {className: ['language-math', 'math-display']},\n      children: []\n    }\n    this.enter(\n      {\n        type: 'math',\n        meta: null,\n        value: '',\n        data: {hName: 'pre', hChildren: [code]}\n      },\n      token\n    )\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathFlowMeta() {\n    this.buffer()\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlowMeta() {\n    const data = this.resume()\n    const node = this.stack[this.stack.length - 1]\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'math')\n    node.meta = data\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlowFence() {\n    // Exit if this is the closing fence.\n    if (this.data.mathFlowInside) return\n    this.buffer()\n    this.data.mathFlowInside = true\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlow(token) {\n    const data = this.resume().replace(/^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g, '')\n    const node = this.stack[this.stack.length - 1]\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'math')\n    this.exit(token)\n    node.value = data\n    // @ts-expect-error: we defined it in `enterMathFlow`.\n    const code = /** @type {HastElement} */ (node.data.hChildren[0])\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.type === 'element')\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.tagName === 'code')\n    code.children.push({type: 'text', value: data})\n    this.data.mathFlowInside = undefined\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathText(token) {\n    this.enter(\n      {\n        type: 'inlineMath',\n        value: '',\n        data: {\n          hName: 'code',\n          hProperties: {className: ['language-math', 'math-inline']},\n          hChildren: []\n        }\n      },\n      token\n    )\n    this.buffer()\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathText(token) {\n    const data = this.resume()\n    const node = this.stack[this.stack.length - 1]\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'inlineMath')\n    this.exit(token)\n    node.value = data\n    const children = /** @type {Array<HastElementContent>} */ (\n      // @ts-expect-error: we defined it in `enterMathFlow`.\n      node.data.hChildren\n    )\n    children.push({type: 'text', value: data})\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathData(token) {\n    this.config.enter.data.call(this, token)\n    this.config.exit.data.call(this, token)\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown`.\n *\n * @param {ToOptions | null | undefined} [options]\n *   Configuration (optional).\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */\nfunction mathToMarkdown(options) {\n  let single = (options || {}).singleDollarTextMath\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  inlineMath.peek = inlineMathPeek\n\n  return {\n    unsafe: [\n      {character: '\\r', inConstruct: 'mathFlowMeta'},\n      {character: '\\n', inConstruct: 'mathFlowMeta'},\n      {\n        character: '$',\n        after: single ? undefined : '\\\\$',\n        inConstruct: 'phrasing'\n      },\n      {character: '$', inConstruct: 'mathFlowMeta'},\n      {atBreak: true, character: '$', after: '\\\\$'}\n    ],\n    handlers: {math, inlineMath}\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {Math} node\n   */\n  // Note: fixing this code? Please also fix the similar code for code:\n  // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/code.js>\n  function math(node, _, state, info) {\n    const raw = node.value || ''\n    const tracker = state.createTracker(info)\n    const sequence = '$'.repeat(Math.max((0,longest_streak__WEBPACK_IMPORTED_MODULE_1__.longestStreak)(raw, '$') + 1, 2))\n    const exit = state.enter('mathFlow')\n    let value = tracker.move(sequence)\n\n    if (node.meta) {\n      const subexit = state.enter('mathFlowMeta')\n      value += tracker.move(\n        state.safe(node.meta, {\n          after: '\\n',\n          before: value,\n          encode: ['$'],\n          ...tracker.current()\n        })\n      )\n      subexit()\n    }\n\n    value += tracker.move('\\n')\n\n    if (raw) {\n      value += tracker.move(raw + '\\n')\n    }\n\n    value += tracker.move(sequence)\n    exit()\n    return value\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineMath} node\n   */\n  // Note: fixing this code? Please also fix the similar code for inline code:\n  // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/inline-code.js>\n  function inlineMath(node, _, state) {\n    let value = node.value || ''\n    let size = 1\n\n    if (!single) size++\n\n    // If there is a single dollar sign on its own in the math, use a fence of\n    // two.\n    // If there are two in a row, use one.\n    while (\n      new RegExp('(^|[^$])' + '\\\\$'.repeat(size) + '([^$]|$)').test(value)\n    ) {\n      size++\n    }\n\n    const sequence = '$'.repeat(size)\n\n    // If this is not just spaces or eols (tabs don’t count), and either the\n    // first and last character are a space or eol, or the first or last\n    // character are dollar signs, then pad with spaces.\n    if (\n      // Contains non-space.\n      /[^ \\r\\n]/.test(value) &&\n      // Starts with space and ends with space.\n      ((/^[ \\r\\n]/.test(value) && /[ \\r\\n]$/.test(value)) ||\n        // Starts or ends with dollar.\n        /^\\$|\\$$/.test(value))\n    ) {\n      value = ' ' + value + ' '\n    }\n\n    let index = -1\n\n    // We have a potential problem: certain characters after eols could result in\n    // blocks being seen.\n    // For example, if someone injected the string `'\\n# b'`, then that would\n    // result in an ATX heading.\n    // We can’t escape characters in `inlineMath`, but because eols are\n    // transformed to spaces when going from markdown to HTML anyway, we can swap\n    // them out.\n    while (++index < state.unsafe.length) {\n      const pattern = state.unsafe[index]\n\n      // Only look for `atBreak`s.\n      // Btw: note that `atBreak` patterns will always start the regex at LF or\n      // CR.\n      if (!pattern.atBreak) continue\n\n      const expression = state.compilePattern(pattern)\n      /** @type {RegExpExecArray | null} */\n      let match\n\n      while ((match = expression.exec(value))) {\n        let position = match.index\n\n        // Support CRLF (patterns only look for one of the characters).\n        if (\n          value.codePointAt(position) === 10 /* `\\n` */ &&\n          value.codePointAt(position - 1) === 13 /* `\\r` */\n        ) {\n          position--\n        }\n\n        value = value.slice(0, position) + ' ' + value.slice(match.index + 1)\n      }\n    }\n\n    return sequence + value + sequence\n  }\n\n  /**\n   * @returns {string}\n   */\n  function inlineMathPeek() {\n    return '$'\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tYXRoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLCtCQUErQjtBQUM1QyxhQUFhLG1EQUFtRDtBQUNoRSxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLDJDQUEyQztBQUN4RCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLDBDQUEwQztBQUN2RCxhQUFhLGtDQUFrQztBQUMvQyxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DO0FBQ1M7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekMsSUFBSSwyQ0FBTTtBQUNWLElBQUksMkNBQU07QUFDVix3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyw2Q0FBNkM7QUFDcEQsT0FBTyw2Q0FBNkM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTyw0Q0FBNEM7QUFDbkQsT0FBTztBQUNQO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkRBQWE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC11aS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLW1hdGgvbGliL2luZGV4LmpzP2IzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gSGFzdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50Q29udGVudH0gSGFzdEVsZW1lbnRDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkhhbmRsZX0gVG9NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2luZGV4LmpzJykuSW5saW5lTWF0aH0gSW5saW5lTWF0aFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW5kZXguanMnKS5NYXRofSBNYXRoXG4gKlxuICogQHR5cGVkZWYgVG9PcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbc2luZ2xlRG9sbGFyVGV4dE1hdGg9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBzdXBwb3J0IG1hdGggKHRleHQpIHdpdGggYSBzaW5nbGUgZG9sbGFyIChkZWZhdWx0OiBgdHJ1ZWApLlxuICpcbiAqICAgU2luZ2xlIGRvbGxhcnMgd29yayBpbiBQYW5kb2MgYW5kIG1hbnkgb3RoZXIgcGxhY2VzLCBidXQgb2Z0ZW4gaW50ZXJmZXJlXG4gKiAgIHdpdGgg4oCcbm9ybWFs4oCdIGRvbGxhcnMgaW4gdGV4dC5cbiAqICAgSWYgeW91IHR1cm4gdGhpcyBvZmYsIHlvdSBjYW4gc3RpbGwgdXNlIHR3byBvciBtb3JlIGRvbGxhcnMgZm9yIHRleHQgbWF0aC5cbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtsb25nZXN0U3RyZWFrfSBmcm9tICdsb25nZXN0LXN0cmVhaydcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYC5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0aEZyb21NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjoge1xuICAgICAgbWF0aEZsb3c6IGVudGVyTWF0aEZsb3csXG4gICAgICBtYXRoRmxvd0ZlbmNlTWV0YTogZW50ZXJNYXRoRmxvd01ldGEsXG4gICAgICBtYXRoVGV4dDogZW50ZXJNYXRoVGV4dFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgbWF0aEZsb3c6IGV4aXRNYXRoRmxvdyxcbiAgICAgIG1hdGhGbG93RmVuY2U6IGV4aXRNYXRoRmxvd0ZlbmNlLFxuICAgICAgbWF0aEZsb3dGZW5jZU1ldGE6IGV4aXRNYXRoRmxvd01ldGEsXG4gICAgICBtYXRoRmxvd1ZhbHVlOiBleGl0TWF0aERhdGEsXG4gICAgICBtYXRoVGV4dDogZXhpdE1hdGhUZXh0LFxuICAgICAgbWF0aFRleHREYXRhOiBleGl0TWF0aERhdGFcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW50ZXJNYXRoRmxvdyh0b2tlbikge1xuICAgIC8qKiBAdHlwZSB7SGFzdEVsZW1lbnR9ICovXG4gICAgY29uc3QgY29kZSA9IHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6ICdjb2RlJyxcbiAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnbGFuZ3VhZ2UtbWF0aCcsICdtYXRoLWRpc3BsYXknXX0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gICAgdGhpcy5lbnRlcihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21hdGgnLFxuICAgICAgICBtZXRhOiBudWxsLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRhdGE6IHtoTmFtZTogJ3ByZScsIGhDaGlsZHJlbjogW2NvZGVdfVxuICAgICAgfSxcbiAgICAgIHRva2VuXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyTWF0aEZsb3dNZXRhKCkge1xuICAgIHRoaXMuYnVmZmVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aEZsb3dNZXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGFzc2VydChub2RlLnR5cGUgPT09ICdtYXRoJylcbiAgICBub2RlLm1ldGEgPSBkYXRhXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhGbG93RmVuY2UoKSB7XG4gICAgLy8gRXhpdCBpZiB0aGlzIGlzIHRoZSBjbG9zaW5nIGZlbmNlLlxuICAgIGlmICh0aGlzLmRhdGEubWF0aEZsb3dJbnNpZGUpIHJldHVyblxuICAgIHRoaXMuYnVmZmVyKClcbiAgICB0aGlzLmRhdGEubWF0aEZsb3dJbnNpZGUgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhGbG93KHRva2VuKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKCkucmVwbGFjZSgvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZywgJycpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGFzc2VydChub2RlLnR5cGUgPT09ICdtYXRoJylcbiAgICB0aGlzLmV4aXQodG9rZW4pXG4gICAgbm9kZS52YWx1ZSA9IGRhdGFcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBkZWZpbmVkIGl0IGluIGBlbnRlck1hdGhGbG93YC5cbiAgICBjb25zdCBjb2RlID0gLyoqIEB0eXBlIHtIYXN0RWxlbWVudH0gKi8gKG5vZGUuZGF0YS5oQ2hpbGRyZW5bMF0pXG4gICAgYXNzZXJ0KGNvZGUudHlwZSA9PT0gJ2VsZW1lbnQnKVxuICAgIGFzc2VydChjb2RlLnRhZ05hbWUgPT09ICdjb2RlJylcbiAgICBjb2RlLmNoaWxkcmVuLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IGRhdGF9KVxuICAgIHRoaXMuZGF0YS5tYXRoRmxvd0luc2lkZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyTWF0aFRleHQodG9rZW4pIHtcbiAgICB0aGlzLmVudGVyKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5saW5lTWF0aCcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGhOYW1lOiAnY29kZScsXG4gICAgICAgICAgaFByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnbGFuZ3VhZ2UtbWF0aCcsICdtYXRoLWlubGluZSddfSxcbiAgICAgICAgICBoQ2hpbGRyZW46IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlblxuICAgIClcbiAgICB0aGlzLmJ1ZmZlcigpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhUZXh0KHRva2VuKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ2lubGluZU1hdGgnKVxuICAgIHRoaXMuZXhpdCh0b2tlbilcbiAgICBub2RlLnZhbHVlID0gZGF0YVxuICAgIGNvbnN0IGNoaWxkcmVuID0gLyoqIEB0eXBlIHtBcnJheTxIYXN0RWxlbWVudENvbnRlbnQ+fSAqLyAoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBkZWZpbmVkIGl0IGluIGBlbnRlck1hdGhGbG93YC5cbiAgICAgIG5vZGUuZGF0YS5oQ2hpbGRyZW5cbiAgICApXG4gICAgY2hpbGRyZW4ucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogZGF0YX0pXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhEYXRhKHRva2VuKSB7XG4gICAgdGhpcy5jb25maWcuZW50ZXIuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIHRoaXMuY29uZmlnLmV4aXQuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gLlxuICpcbiAqIEBwYXJhbSB7VG9PcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGhUb01hcmtkb3duKG9wdGlvbnMpIHtcbiAgbGV0IHNpbmdsZSA9IChvcHRpb25zIHx8IHt9KS5zaW5nbGVEb2xsYXJUZXh0TWF0aFxuXG4gIGlmIChzaW5nbGUgPT09IG51bGwgfHwgc2luZ2xlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaW5nbGUgPSB0cnVlXG4gIH1cblxuICBpbmxpbmVNYXRoLnBlZWsgPSBpbmxpbmVNYXRoUGVla1xuXG4gIHJldHVybiB7XG4gICAgdW5zYWZlOiBbXG4gICAgICB7Y2hhcmFjdGVyOiAnXFxyJywgaW5Db25zdHJ1Y3Q6ICdtYXRoRmxvd01ldGEnfSxcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXG4nLCBpbkNvbnN0cnVjdDogJ21hdGhGbG93TWV0YSd9LFxuICAgICAge1xuICAgICAgICBjaGFyYWN0ZXI6ICckJyxcbiAgICAgICAgYWZ0ZXI6IHNpbmdsZSA/IHVuZGVmaW5lZCA6ICdcXFxcJCcsXG4gICAgICAgIGluQ29uc3RydWN0OiAncGhyYXNpbmcnXG4gICAgICB9LFxuICAgICAge2NoYXJhY3RlcjogJyQnLCBpbkNvbnN0cnVjdDogJ21hdGhGbG93TWV0YSd9LFxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJyQnLCBhZnRlcjogJ1xcXFwkJ31cbiAgICBdLFxuICAgIGhhbmRsZXJzOiB7bWF0aCwgaW5saW5lTWF0aH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAgICogQHBhcmFtIHtNYXRofSBub2RlXG4gICAqL1xuICAvLyBOb3RlOiBmaXhpbmcgdGhpcyBjb2RlPyBQbGVhc2UgYWxzbyBmaXggdGhlIHNpbWlsYXIgY29kZSBmb3IgY29kZTpcbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2Jsb2IvbWFpbi9saWIvaGFuZGxlL2NvZGUuanM+XG4gIGZ1bmN0aW9uIG1hdGgobm9kZSwgXywgc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCByYXcgPSBub2RlLnZhbHVlIHx8ICcnXG4gICAgY29uc3QgdHJhY2tlciA9IHN0YXRlLmNyZWF0ZVRyYWNrZXIoaW5mbylcbiAgICBjb25zdCBzZXF1ZW5jZSA9ICckJy5yZXBlYXQoTWF0aC5tYXgobG9uZ2VzdFN0cmVhayhyYXcsICckJykgKyAxLCAyKSlcbiAgICBjb25zdCBleGl0ID0gc3RhdGUuZW50ZXIoJ21hdGhGbG93JylcbiAgICBsZXQgdmFsdWUgPSB0cmFja2VyLm1vdmUoc2VxdWVuY2UpXG5cbiAgICBpZiAobm9kZS5tZXRhKSB7XG4gICAgICBjb25zdCBzdWJleGl0ID0gc3RhdGUuZW50ZXIoJ21hdGhGbG93TWV0YScpXG4gICAgICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoXG4gICAgICAgIHN0YXRlLnNhZmUobm9kZS5tZXRhLCB7XG4gICAgICAgICAgYWZ0ZXI6ICdcXG4nLFxuICAgICAgICAgIGJlZm9yZTogdmFsdWUsXG4gICAgICAgICAgZW5jb2RlOiBbJyQnXSxcbiAgICAgICAgICAuLi50cmFja2VyLmN1cnJlbnQoKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgc3ViZXhpdCgpXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKCdcXG4nKVxuXG4gICAgaWYgKHJhdykge1xuICAgICAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKHJhdyArICdcXG4nKVxuICAgIH1cblxuICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZShzZXF1ZW5jZSlcbiAgICBleGl0KClcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAgICogQHBhcmFtIHtJbmxpbmVNYXRofSBub2RlXG4gICAqL1xuICAvLyBOb3RlOiBmaXhpbmcgdGhpcyBjb2RlPyBQbGVhc2UgYWxzbyBmaXggdGhlIHNpbWlsYXIgY29kZSBmb3IgaW5saW5lIGNvZGU6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iL21haW4vbGliL2hhbmRsZS9pbmxpbmUtY29kZS5qcz5cbiAgZnVuY3Rpb24gaW5saW5lTWF0aChub2RlLCBfLCBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcbiAgICBsZXQgc2l6ZSA9IDFcblxuICAgIGlmICghc2luZ2xlKSBzaXplKytcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2luZ2xlIGRvbGxhciBzaWduIG9uIGl0cyBvd24gaW4gdGhlIG1hdGgsIHVzZSBhIGZlbmNlIG9mXG4gICAgLy8gdHdvLlxuICAgIC8vIElmIHRoZXJlIGFyZSB0d28gaW4gYSByb3csIHVzZSBvbmUuXG4gICAgd2hpbGUgKFxuICAgICAgbmV3IFJlZ0V4cCgnKF58W14kXSknICsgJ1xcXFwkJy5yZXBlYXQoc2l6ZSkgKyAnKFteJF18JCknKS50ZXN0KHZhbHVlKVxuICAgICkge1xuICAgICAgc2l6ZSsrXG4gICAgfVxuXG4gICAgY29uc3Qgc2VxdWVuY2UgPSAnJCcucmVwZWF0KHNpemUpXG5cbiAgICAvLyBJZiB0aGlzIGlzIG5vdCBqdXN0IHNwYWNlcyBvciBlb2xzICh0YWJzIGRvbuKAmXQgY291bnQpLCBhbmQgZWl0aGVyIHRoZVxuICAgIC8vIGZpcnN0IGFuZCBsYXN0IGNoYXJhY3RlciBhcmUgYSBzcGFjZSBvciBlb2wsIG9yIHRoZSBmaXJzdCBvciBsYXN0XG4gICAgLy8gY2hhcmFjdGVyIGFyZSBkb2xsYXIgc2lnbnMsIHRoZW4gcGFkIHdpdGggc3BhY2VzLlxuICAgIGlmIChcbiAgICAgIC8vIENvbnRhaW5zIG5vbi1zcGFjZS5cbiAgICAgIC9bXiBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJlxuICAgICAgLy8gU3RhcnRzIHdpdGggc3BhY2UgYW5kIGVuZHMgd2l0aCBzcGFjZS5cbiAgICAgICgoL15bIFxcclxcbl0vLnRlc3QodmFsdWUpICYmIC9bIFxcclxcbl0kLy50ZXN0KHZhbHVlKSkgfHxcbiAgICAgICAgLy8gU3RhcnRzIG9yIGVuZHMgd2l0aCBkb2xsYXIuXG4gICAgICAgIC9eXFwkfFxcJCQvLnRlc3QodmFsdWUpKVxuICAgICkge1xuICAgICAgdmFsdWUgPSAnICcgKyB2YWx1ZSArICcgJ1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICAvLyBXZSBoYXZlIGEgcG90ZW50aWFsIHByb2JsZW06IGNlcnRhaW4gY2hhcmFjdGVycyBhZnRlciBlb2xzIGNvdWxkIHJlc3VsdCBpblxuICAgIC8vIGJsb2NrcyBiZWluZyBzZWVuLlxuICAgIC8vIEZvciBleGFtcGxlLCBpZiBzb21lb25lIGluamVjdGVkIHRoZSBzdHJpbmcgYCdcXG4jIGInYCwgdGhlbiB0aGF0IHdvdWxkXG4gICAgLy8gcmVzdWx0IGluIGFuIEFUWCBoZWFkaW5nLlxuICAgIC8vIFdlIGNhbuKAmXQgZXNjYXBlIGNoYXJhY3RlcnMgaW4gYGlubGluZU1hdGhgLCBidXQgYmVjYXVzZSBlb2xzIGFyZVxuICAgIC8vIHRyYW5zZm9ybWVkIHRvIHNwYWNlcyB3aGVuIGdvaW5nIGZyb20gbWFya2Rvd24gdG8gSFRNTCBhbnl3YXksIHdlIGNhbiBzd2FwXG4gICAgLy8gdGhlbSBvdXQuXG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGF0ZS51bnNhZmUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gc3RhdGUudW5zYWZlW2luZGV4XVxuXG4gICAgICAvLyBPbmx5IGxvb2sgZm9yIGBhdEJyZWFrYHMuXG4gICAgICAvLyBCdHc6IG5vdGUgdGhhdCBgYXRCcmVha2AgcGF0dGVybnMgd2lsbCBhbHdheXMgc3RhcnQgdGhlIHJlZ2V4IGF0IExGIG9yXG4gICAgICAvLyBDUi5cbiAgICAgIGlmICghcGF0dGVybi5hdEJyZWFrKSBjb250aW51ZVxuXG4gICAgICBjb25zdCBleHByZXNzaW9uID0gc3RhdGUuY29tcGlsZVBhdHRlcm4ocGF0dGVybilcbiAgICAgIC8qKiBAdHlwZSB7UmVnRXhwRXhlY0FycmF5IHwgbnVsbH0gKi9cbiAgICAgIGxldCBtYXRjaFxuXG4gICAgICB3aGlsZSAoKG1hdGNoID0gZXhwcmVzc2lvbi5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gbWF0Y2guaW5kZXhcblxuICAgICAgICAvLyBTdXBwb3J0IENSTEYgKHBhdHRlcm5zIG9ubHkgbG9vayBmb3Igb25lIG9mIHRoZSBjaGFyYWN0ZXJzKS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLmNvZGVQb2ludEF0KHBvc2l0aW9uKSA9PT0gMTAgLyogYFxcbmAgKi8gJiZcbiAgICAgICAgICB2YWx1ZS5jb2RlUG9pbnRBdChwb3NpdGlvbiAtIDEpID09PSAxMyAvKiBgXFxyYCAqL1xuICAgICAgICApIHtcbiAgICAgICAgICBwb3NpdGlvbi0tXG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHBvc2l0aW9uKSArICcgJyArIHZhbHVlLnNsaWNlKG1hdGNoLmluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VxdWVuY2UgKyB2YWx1ZSArIHNlcXVlbmNlXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGlubGluZU1hdGhQZWVrKCkge1xuICAgIHJldHVybiAnJCdcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-math/lib/index.js\n");

/***/ })

};
;