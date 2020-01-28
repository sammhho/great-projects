/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

require('normalize.css');
require('./src/css/reset.css');
require('./src/prism-styles');
require('./src/css/algolia.css');

// Expose React and ReactDOM as globals for console playground
window.React = React;
window.ReactDOM = ReactDOM;

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
exports.onClientEntry = () => {};
