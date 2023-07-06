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
exports.id = "pages/api/transaction1_2";
exports.ids = ["pages/api/transaction1_2"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction1_2.js":
/*!*************************************!*\
  !*** ./pages/api/transaction1_2.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$transaction(async (prisma)=>{\n                await prisma.product.delete({\n                    where: {\n                        product_id: 22\n                    }\n                });\n            //return { product };\n            });\n            res.status(200).json(result);\n        } catch (error) {\n            await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$queryRaw(\"ROLLBACK\");\n            res.status(500).json({\n                error: \"Error al llamar la transacci\\xf3n\"\n            });\n            console.error(error);\n        } finally{\n            // Cierra la conexión de Prisma\n            await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24xXzIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFMUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNTCxtRUFBbUJNLENBQUMsT0FBT047Z0JBRTlDLE1BQU1BLE9BQU9PLFFBQVFDLE9BQU87b0JBQzFCQyxPQUFPO3dCQUNMQyxZQUFZO29CQUNkO2dCQUNGO1lBRUEscUJBQXFCO1lBQ3ZCO1lBRUFQLElBQUlRLE9BQU8sS0FBS0MsS0FBS1A7UUFDdkIsRUFBRSxPQUFPUSxPQUFPO1lBQ2QsTUFBTWIsZ0VBQWdCYyxDQUFDO1lBQ3ZCWCxJQUFJUSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLE9BQU87WUFBaUM7WUFDL0RFLFFBQVFGLE1BQU1BO1FBQ2hCLFNBQVU7WUFDUiwrQkFBK0I7WUFDL0IsTUFBTWIsa0VBQWtCZ0I7UUFDMUI7SUFDRixPQUFPO1FBQ0xiLElBQUlRLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPO1FBQXNCO0lBQ3REO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25leGlvbmRiLy4vcGFnZXMvYXBpL3RyYW5zYWN0aW9uMV8yLmpzPzA2OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIChwcmlzbWEpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBwcmlzbWEucHJvZHVjdC5kZWxldGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgcHJvZHVjdF9pZDogMjIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JldHVybiB7IHByb2R1Y3QgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYXdhaXQgcHJpc21hLiRxdWVyeVJhdyhcIlJPTExCQUNLXCIpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIGFsIGxsYW1hciBsYSB0cmFuc2FjY2nDs25cIiB9KTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvLyBDaWVycmEgbGEgY29uZXhpw7NuIGRlIFByaXNtYVxyXG4gICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNw6l0b2RvIG5vIHBlcm1pdGlkb1wiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3VsdCIsIiR0cmFuc2FjdGlvbiIsInByb2R1Y3QiLCJkZWxldGUiLCJ3aGVyZSIsInByb2R1Y3RfaWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkcXVlcnlSYXciLCJjb25zb2xlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction1_2.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction1_2.js"));
module.exports = __webpack_exports__;

})();