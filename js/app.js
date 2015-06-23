var app = angular.module('pages', []);
app.controller("PanelController",  function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

app.controller("LocationController", function(){

  this.productObj = expensesObject;

  this.getDate = function(){
    this.productObj.showDate = true;

    var x = new Date();
    this.productObj.date = x.toLocaleString();
  };

  this.isOther = function(store){
    return store == "Other";
  };

});
/*
app.controller('EmailController', function(){
  this.email = false;
  this.isEmail = function(){
    return this.email;
  }
  this.showForm = function(){
    this.email = true;
  };

  this.cancelForm = function(){
    this.email = false;
  }

});
*/

app.controller('ReviewController', function() {
  this.review = {};
  this.toShow = true;
  this.outputObj = localObj;
  this.sum = 0;
  
  this.setValues = function(indexs,others, totals, dates){
    if(typeof(localStorage.indexing) == "undefined"){
      localStorage.indexing = 0;
      var t = [];
      localStorage["testing"] = JSON.stringify(t);
    }
    if(totals == null){
      totals = 0;
    }
    if(indexs == "Other"){
      indexs = others;
    }
    localStorage.showOutput = "true";
    localStorage.store = indexs;
    localStorage.total = totals;
    localStorage.date = (new Date()).toLocaleString();
  };

    this.showOutput = function(){
      
      var str = JSON.parse(localStorage["testing"]);
      if(str.length == 0){
        this.outputObj = [];
        return false;
      
      }
      var res = str.split("//");
      var i = 0;
      this.outputObj = [];
      this.sum = 0;
      for (i = 1; i < res.length; i++) { 
        var temp = {
          store: {},
        total: {},
        date: {},
        index: 0
      };
          var x = res[i].split(">>");
        temp.store = x[0];
        var noComma = x[1].split(",");
        temp.total = noComma[noComma.length-1];
        this.sum  = this.sum + parseFloat(temp.total);
        noComma = x[2].split(",");
        temp.date =noComma[noComma.length-2] + " " + noComma[noComma.length-1];
        this.outputObj.push(temp);
        temp.index = i;
    }
    };

    if(localStorage.indexing == "0"){
      localStorage.showOutput = "true";
      this.showOutput();
    }

    this.cleanHistory = function(){
      var t = [];
      localStorage["testing"] = JSON.stringify(t);
      localStorage.showOutput = "true";
      this.showOutput();
    };

    this.shouldClear = function(){
      var str = JSON.parse(localStorage["testing"]);
      if(str.length == 0){
        return false;
      }
      if(localStorage.showOutput == "true"){
        localStorage.showOutput = "false";
        this.showOutput();
      }
      return true;
    };

    this.addReview = function(dateTime) {
      if(localStorage.store == "undefined"){
        this.showOutput();
        return;
      }
      if(dateTime !== null){
        localStorage.date = dateTime.toLocaleString();
      }

      var values = ["//" + localStorage.store + ">>", localStorage.total + ">>", localStorage.date];

      var newArray = JSON.parse(localStorage["testing"]);
      localStorage["testing"] = JSON.stringify(values + newArray );
      localStorage.showOutput = "true";
      //this.shouldClear();
    this.showOutput();
    //location.reload();
  };

  this.saveObj = function(){
      var i;
      var t = [];
      localStorage["testing"] = JSON.stringify(t);
      for(i = this.outputObj.length - 1; i >= 0 ; i--){
        localStorage.store = this.outputObj[i].store;
        localStorage.total = this.outputObj[i].total;
        localStorage.date = this.outputObj[i].date;
        
        var values = ["//" + localStorage.store + ">>", localStorage.total + ">>", localStorage.date];

        var newArray = JSON.parse(localStorage["testing"]);
        localStorage["testing"] = JSON.stringify(values + newArray );
      }
    };

    this.removeRow = function(place){
      this.outputObj.splice(place-1, 1);
      this.saveObj();
      this.showOutput();
    };
  
});

var expensesObject = {
  showDate: false,

  date: new Date(),

  location: ['Babys R Us','Chipotle','Home Depot',
  'McDonald','Panda Express','Papa Johns',
  'Pizza Hut','Publix','Shell','Subway',
  'Walmart','Other'
  ]
};

var localObj = []
var val = {
  store: {},
  total: {},
  date: {}

}


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

app.directive('expensesPage', function(){
	return{
		restrict: 'E',
		templateUrl: 'public/expenses.html'
	};
});

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


