/**
 * A directive to embed a Disqus comments widget on your AngularJS page.
 *
 * Created by Michael on 22/01/14.
 * Modified by Serkan "coni2k" Holat on 24/02/16.
 * Copyright Michael Bromley 2014
 * Available under the MIT license.
 */

(function() {

	/**
	 * Config
	 */
	var moduleName = 'myApp';

	/**
	 * Module
	 */
	var module;
	try {
		module = angular.module(moduleName);
	} catch (err) {
		// named module does not exist, so create one
		module = angular.module(moduleName, []);
	}

	module
			.directive(
					'dirDisqus',
					[
							'$window',
							function($window) {
								var _initDisqus = function _initDisqus(scope) {
									if ($window.DISQUS) {
										$window.DISQUS
												.reset({
													reload : true,
													config : function() {
														this.page.identifier = threadId;
														this.disqus_container_id = 'disqus_thread';
													}
												});
									} else {
										$log
												.error('window.DISQUS did not exist before directive was loaded.');
									}
								};

								var _linkFn = function link(scope, element,
										attrs) {
									element
											.html('<div id="disqus_thread"></div>');
									_initDisqus(scope);
								};

								return {
									replace : true,
									template : 'false',
									scope : {
										threadId : '@'
									},
									link : _linkFn
								};
							} ]);
})();