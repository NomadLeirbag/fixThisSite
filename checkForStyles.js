$(document).ready(function() {
	if($('style:not(:empty)').length == 0 && $('link[rel="stylesheet"]').length == 0) {
		var style   = document.createElement( 'link' );
		style.rel   = 'stylesheet';
		style.type  = 'text/css';
		style.href  = chrome.extension.getURL('style.css');
		document.getElementsByTagName( 'head' )[0].appendChild( style );
		}
	});