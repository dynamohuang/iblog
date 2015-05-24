var blogModule = angular.module("BlogModule", []);
blogModule.controller('blogCtrl', function($http) {
	     var self = this;
	     self.items = [];
	     
		 var fetchData = function(){$http.get('/blog').success(function(blogs) {
			 self.items = blogs;
			
         });
		 };
		 fetchData();
	
});

var shareModule = angular.module("ShareModule", []);
shareModule.controller('shareCtrl', function($http) {
	     var self = this;
	     self.items = [];
	     
		 var fetchData = function(){$http.get('/links').success(function(links) {
			 self.items = links;
         });
		 };
		 fetchData();
	
});

var postModule = angular.module("PostModule", []);
postModule.controller('postCtrl', function($http) {
	     var self = this;
	     self.data ={};
	     
		 var fetchData = function(){$http.get('/post/mean_intro').success(function(post) {
			 self.data = post;
			
			
         });
		 };
		 fetchData();
	
});