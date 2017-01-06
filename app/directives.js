angular.module('app.directives', [])
    .directive('navigationbar', [ function(){
        return {
        
            restrict: 'E',
            templateUrl: 'partials/navigationbar.html',
            link: function($scope, iElm, iAttrs, controller) {
                
            }
        }
    }]).directive('whenScrollEnds', function($window) {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
            
            var raw = elem[0];

            elem.bind('scroll', function() {
                if (raw.scrollTop + raw.offsetHeight + 10 >= raw.scrollHeight ) {
                    scope.$apply(attrs.whenScrolled);
                }
              });
            }
    }});