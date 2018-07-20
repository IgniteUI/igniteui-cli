/// <reference path="../ignite-cli-views.js" />

$(function () {
	var $menu = $("<ul id='list' class='nav-menu'></ul>");
	$menu.prependTo("body");
	var result = "";
	result += "<li class=\"nav-menu-item-logo\"><h1>$(name)</h1></li>";

	var path = window.location.pathname;
	path = path.slice(1);


	result += "<li class='nav-menu-item" + (path ? "" : " active") + "'><a href='/'>Home</a></li>";

	for (var i = 0; i < igniteCLIViews.length; i++) {
		var navMenuClass = "nav-menu-item";
		var view = igniteCLIViews[i];
		if(view.path === path) {
			navMenuClass += " active"; 
		}
		result += "<li class=\"" + navMenuClass +"\"><a href='/" + view.path + "'>" + view.name + "</a></li>"
	}

	$menu.append(result);
	var $active = $menu.children(".active");
	if ($active.length) {
		$active.get(0).scrollIntoView(false);
	}
});