var zumWaypoint = function zumWaypoint(WaypointService, $timeout) {
	return {
		controller: 'WaypointController',
		scope: {
			up: '@',
			down: '@',
			offset: '@',
			waypoints: '=?zumWaypoint',
			timeout:'@'
		},
		link: function zumWaypointLink(scope, element, attrs, ctrl) {
			var callback = $.proxy(ctrl.processWaypoint, ctrl);
			
			$timeout(function () {
				element.waypoint({
					handler: WaypointService.getHandlerSync(scope, callback),
					offset: scope.offset || 0
				});
			}, scope.timeout || 0);
		}
	};
};