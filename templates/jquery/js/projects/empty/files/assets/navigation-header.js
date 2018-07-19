/// <reference path="../ignite-cli-views.js" />

$(function () {
	var menu = "<ul id='list' class='nav-menu'></ul>"
	$('body').prepend(menu);
	var result = "";

	var path = window.location.pathname;
	path = path.slice(1);


	result += "<li class='nav-menu-item" + (path ? "" : " active") + "'><a href='/'>Home</a></li>"
	
	for (var i = 0; i < igniteCLIViews.length; i++) {
		var navMenuClass = "nav-menu-item";
		
		var view = igniteCLIViews[i];
		if(view.path === path) {
			navMenuClass += " active"; 
		}
		result += "<li class=\"" + navMenuClass +"\"><a href='/" + view.path + "'>" + view.name + "</a></li>"
	}

	result += "<li class=\"nav-menu-item-logo\"><div>Ignite UI CLI</div></li>"; $("#list").append(result);
});