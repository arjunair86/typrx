// ==UserScript==
// @name        typrx
// @namespace   arjunair86@gmail.com
// @description typrx hack
// @include     http://app.typrx.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js 
// @version     1
// @grant       none
// ==/UserScript==

function whenAppears(selector, callback){
  if(jQuery(selector).length == 0){
     setTimeout(function(){ whenAppears(selector, callback); }, 100);
     return null;
  }else{
    callback(selector);
    return true;
  }
}

function typeFast(selector){
  var palabra = jQuery(selector).text();
  var longitud = palabra.length;
  for(k=0; k<longitud; k++){
    jQuery("input.cw-TypedTextBox").val(jQuery("input.cw-TypedTextBox").val() + palabra[k]);
    jQuery("input.cw-TypedTextBox").trigger(
      jQuery.Event('keydown', {
        which: jQuery.ui.keyCode.BACKSPACE, 
        keyCode:jQuery.ui.keyCode.BACKSPACE
      }));
  }
  setTimeout(function(){ whenAppears(selector, typeFast);}, 5000);
}

jQuery(function(){
  whenAppears("span.wordToType.current-word", typeFast);
});
