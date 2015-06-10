var app = angular.module('app', []);
app.controller("PanelController",  function(){
	this.tab = 1;
	this.selectTab = function(selectTab){
		this.tab = setTab;
	};
});