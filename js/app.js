var app = angular.module('app', []);
app.controller("PanelController",  function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});



app.directive('homePage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/home.html'
	};
});

app.directive('aboutPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/about.html'
	};
});

app.directive('projectsPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/projects.html'
	};
});

app.directive('downloadsPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/downloads.html'
	};
});

/*app.directive('toolsPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/tools.html'
	};
});
*/
app.directive('teachingPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/teaching.html'
	};
});

app.directive('contactPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/contact.html'
	};
});