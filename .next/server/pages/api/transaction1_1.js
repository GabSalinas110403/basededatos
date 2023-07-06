"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/transaction1_1";
exports.ids = ["pages/api/transaction1_1"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction1_1.js":
/*!*************************************!*\
  !*** ./pages/api/transaction1_1.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$transaction(async (prisma)=>{\n                await prisma.product.create({\n                    data: {\n                        product_id: 22,\n                        product_name: \"Capitan\",\n                        product_description: \"Figura de acci\\xf3n\",\n                        brand_id: 2,\n                        category_id: 2,\n                        model_year: 2023,\n                        list_price: 10.0\n                    }\n                });\n            //return { product };\n            });\n            res.status(200).json({\n                result\n            });\n        } catch (error) {\n            await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$queryRaw(\"ROLLBACK\");\n            res.status(500).json({\n                error: \"Error al llamar la transacci\\xf3n\"\n            });\n            console.error(error);\n        } finally{\n            // Cierra la conexión de Prisma\n            await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24xXzEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFMUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNTCxtRUFBbUJNLENBQUMsT0FBT047Z0JBQzlDLE1BQU1BLE9BQU9PLFFBQVFDLE9BQU87b0JBQzFCQyxNQUFNO3dCQUNKQyxZQUFZO3dCQUNaQyxjQUFjO3dCQUNkQyxxQkFBcUI7d0JBQ3JCQyxVQUFVO3dCQUNWQyxhQUFhO3dCQUNiQyxZQUFZO3dCQUNaQyxZQUFZO29CQUNkO2dCQUNGO1lBRUEscUJBQXFCO1lBQ3ZCO1lBRUFiLElBQUljLE9BQU8sS0FBS0MsS0FBSztnQkFBQ2I7WUFBTTtRQUU5QixFQUFFLE9BQU9jLE9BQU87WUFDZCxNQUFNbkIsZ0VBQWdCb0IsQ0FBQztZQUN2QmpCLElBQUljLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsT0FBTztZQUFpQztZQUMvREUsUUFBUUYsTUFBTUE7UUFDaEIsU0FBVTtZQUNSLCtCQUErQjtZQUMvQixNQUFNbkIsa0VBQWtCc0I7UUFDMUI7SUFDRixPQUFPO1FBQ0xuQixJQUFJYyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFzQjtJQUN0RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZXhpb25kYi8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbjFfMS5qcz83YzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL3ByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAocHJpc21hKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLnByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcHJvZHVjdF9pZDogMjIsXHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogXCJDYXBpdGFuXCIsXHJcbiAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiRmlndXJhIGRlIGFjY2nDs25cIixcclxuICAgICAgICAgICAgYnJhbmRfaWQ6IDIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAyLFxyXG4gICAgICAgICAgICBtb2RlbF95ZWFyOiAyMDIzLFxyXG4gICAgICAgICAgICBsaXN0X3ByaWNlOiAxMC4wLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4geyBwcm9kdWN0IH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Jlc3VsdH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS4kcXVlcnlSYXcoJ1JPTExCQUNLJyk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgYWwgbGxhbWFyIGxhIHRyYW5zYWNjacOzblwiIH0pO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIC8vIENpZXJyYSBsYSBjb25leGnDs24gZGUgUHJpc21hXHJcbiAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk3DqXRvZG8gbm8gcGVybWl0aWRvXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzdWx0IiwiJHRyYW5zYWN0aW9uIiwicHJvZHVjdCIsImNyZWF0ZSIsImRhdGEiLCJwcm9kdWN0X2lkIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9kZXNjcmlwdGlvbiIsImJyYW5kX2lkIiwiY2F0ZWdvcnlfaWQiLCJtb2RlbF95ZWFyIiwibGlzdF9wcmljZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRxdWVyeVJhdyIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction1_1.js\n");

/***/ }),

/***/ "(api)/./prisma/client.js":
/*!**************************!*\
  !*** ./prisma/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsUUFBUTtRQUNsQkUsT0FBT0YsU0FBUyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0Y7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmV4aW9uZGIvLi9wcmlzbWEvY2xpZW50LmpzP2IxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction1_1.js"));
module.exports = __webpack_exports__;

})();