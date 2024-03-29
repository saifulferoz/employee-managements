/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/pace.min.css');
require('bootstrap');
require("@coreui/coreui")
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
const $ = require('jquery');
window.$ = $;
window.jQuery = $;
require("../js/jquery-3.3.1.slim.min.js")
require("../js/pace.min.js");
require("../js/popper.min.js");
require("../js/bootstrap.min.js");
//require("")



// or you can include specific pieces
//require('bootstrap/js/dist/tooltip');
//require('bootstrap/js/dist/popover');

