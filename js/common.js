$(document).ready(function(){
	var clientWid = document.body.clientWidth,
	    doc = document.documentElement;;
	doc.style.fontSize = clientWid / 5 + "px";
	$(window).resize(function(){
		var clientWid = document.body.clientWidth,
		    doc = document.documentElement;
		doc.style.fontSize = clientWid / 5 + "px";
	})

	$(".item_bg")
})