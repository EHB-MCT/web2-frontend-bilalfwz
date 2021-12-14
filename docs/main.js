/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const baseUrl = \"https://api.tvmaze.com/\"\ndocument.querySelectorAll(\".genre\").forEach(e => e.onclick = filterByGenre)\nwindow.onload = setup\n\nasync function setup() {\n    let shows = await getShows()\n    console.log(shows)\n    renderHomePage(shows[0])\n}\n\nasync function filterByGenre(e) {\n    let genre = e.target.innerText\n    let shows = await getShows()\n    let filteredShows = shows.filter(s => s.genres.includes(genre))\n    if (filteredShows.length > 0) {\n        let showId = Math.floor(Math.random() * filteredShows.length)\n        renderHomePage(filteredShows[showId])\n    } else {\n        console.log(\"no shows found for this genre\")\n    }\n}\n\nasync function getShows() {\n    let response = await fetch(`${baseUrl}shows`)\n    let result = await response.json()\n    return result\n}\n\nfunction renderHomePage(show) {\n    let poster = document.getElementById(\"poster\")\n    poster.src = show.image.original\n    setShowInfo(show)\n}\n\nfunction setShowInfo(show) {\n    let title = document.getElementById(\"title\")\n    let rating = document.getElementById(\"rating\")\n    let description = document.getElementById(\"description\")\n\n\n    title.innerText = show.name\n    rating.innerText = `${show.rating.average}/10`\n    description.innerHTML = show.summary\n\n}\n\nconsole.log('this is');\n\n//# sourceURL=webpack://web2-frontend-bilalfwz/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;