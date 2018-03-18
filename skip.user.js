// ==UserScript==
// @name        DMM-agecheck-skiper
// @namespace   ik-fib.com
// @description This script doing DMM age check page auto redirect.
// @include     https://www.dmm.com/age_check/*
// @version     1
// @grant       none
// ==/UserScript==
(function () {
    var url = location.href;
    var rurl = url.match(/rurl=([^\/]*)/)[1];

    location.href = "https://www.dmm.com/age_check/=/declared=yes/rurl=" + rurl +"/";
})();
