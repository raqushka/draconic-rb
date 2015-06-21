app.directive('searchDirective', function ($compile) {
	var linker = function(scope, element, attrs) {
		// DO SOMETHING
	}

	return {
		restrict: "E",
		link: linker,
		scope: {
			//content:'='
		}
	};
});