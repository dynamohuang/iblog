var routerApp = angular.module('routerApp', [ 'ui.router', 'ngGrid','BlogModule','ShareModule','PostModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * 
 * @param {[type]}
 *            $rootScope
 * @param {[type]}
 *            $state
 * @param {[type]}
 *            $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home', {
		url : '/home',
		views : {
			'' : {
				templateUrl : 'partials/home.html'
			},
			'nav@home' : {
				templateUrl : 'partials/nav.html'
			}
		},

	})
	.state('index', {
		url : '/index',
		views : {
			'' : {
				templateUrl : 'partials/index.html'
			},
			'nav@index' : {
				templateUrl : 'partials/nav.html'
			},
			'main@index' : {
				templateUrl : 'partials/blog.html'
			},
			'footer@index' : {
				templateUrl : 'partials/footer.html'
			}
		}
	})
	.state('shares', {
        url: '/shares',
        views : {
			'' : {
				templateUrl : 'partials/index.html'
			},
			'nav@shares' : {
				templateUrl : 'partials/nav.html'
			},
			'main@shares' : {
				templateUrl : 'partials/shares.html'
			},
			'footer@shares' : {
				templateUrl : 'partials/footer.html'
			}
		}
    })
    .state('post', {
        url: '/post/{postUrl}',
        views : {
			'' : {
				templateUrl : 'partials/index.html'
			},
			'nav@post' : {
				templateUrl : 'partials/nav.html'
			},
			'main@post' : {
				templateUrl : 'partials/post.html'
			},
			'footer@post' : {
				templateUrl : 'partials/footer.html'
			}
		}
    });
});
