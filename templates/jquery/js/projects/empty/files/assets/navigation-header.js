/// <reference path="../ignite-cli-views.js" />

$(function () {
	var menu = "<ul id='list' class='nav-menu'><li class='nav-menu-item'><a href='/'>$(name)</a></li></ul>"
	$('body').prepend(menu);
	var result = "";
	for (var i = 0; i < igniteCLIViews.length; i++) {
		var view = igniteCLIViews[i];
		result += "<li class=\"nav-menu-item\"><a href='/" + view.path + "'>" + view.name + "</a></li>"
	}
	result += "<li class=\"nav-menu-item-logo\"><div>Ignite UI CLI</div></li>"; $("#list").append(result);
});