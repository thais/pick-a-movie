import jsdom from 'jsdom';

// Setup the simplest document possible.
const doc = jsdom.jsdom();
const win = doc.defaultView;

// Set globals for mocha that make access to document and window feel
// natural in the test environment.
global.document = doc;
global.window = win;
global.navigator = {
 userAgent: 'node.js'
};

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
//function propagateToGlobal (window) {
// for (let key in window) {
//   if (!window.hasOwnProperty(key)) continue;
//   if (key in global) continue;
//
//   global[key] = window[key];
// }
//}

// Take all properties of the window object and also attach it to the
// mocha global object.
//propagateToGlobal(win);
