var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap', 'ngAnimate']);


app.config(function($routeProvider,$locationProvider,$provide) {
	
	$locationProvider
	  .html5Mode(true)
	  .hashPrefix('!');
	$routeProvider
	.when('/', {
		templateUrl : 'resources/html/internal/index.html',
		controller : 'indexController as ctrl'
	})

	.when('/European-Saga-Scuba-Diving-Costa_Brava', {
		templateUrl : 'resources/html/internal/scuba_diving_experience.html',
		controller : 'indexController as ctrl'
	})

	.when('/destinations', {
		templateUrl : 'resources/html/internal/destinations.html',
		controller : 'destinationCtrl as ctrl'
	})

	.when('/Iceland', {
		templateUrl : 'resources/html/internal/destinations/Iceland.html',
		controller : 'indexController as ctrl'
	})

	.when('/Santorini', {
		templateUrl : 'resources/html/internal/destinations/Santorini.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Paris', {
		templateUrl : 'resources/html/internal/destinations/Paris.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Amsterdam', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Barcealona', {
		templateUrl : 'resources/html/internal/destinations/Barcealona.html',
		controller : 'indexController as ctrl'
	})

	.when('/Vienna-Salzgermmut', {
		templateUrl : 'resources/html/internal/destinations/Vienna-Salzgermmut.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Croatia', {
		templateUrl : 'resources/html/internal/destinations/Croatia.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Italy', {
		templateUrl : 'resources/html/internal/destinations/Italy.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Solo-Travel-Acquaintances', {
		templateUrl : 'resources/html/internal/solo_travelling.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/travelPlanning', {
		templateUrl : 'resources/html/internal/travel_planning.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/BalajiKannan', {
		templateUrl : 'resources/html/internal/About_Me.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/What-it-Has-to-Offer', {
		templateUrl : 'resources/html/internal/what_it_has_to_offer.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/How-Solo-Travelling-Began', {
		templateUrl : 'resources/html/internal/How_it_started.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/How-it-Feels-to-Travel-Alone', {
		templateUrl : 'resources/html/internal/How_it_feels.html',
		controller : 'soloTravellingCtrl as ctrl'
	})
	
	.when('/gallery', {
		templateUrl : 'resources/html/internal/Gallery.html',
		controller : 'GalleryCtrl as ctrl'
	})
	
	.when('/Amsterdam/Day-Trip-Rotterdam', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam/Rotterdam.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/amsterdamCruise', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam/Amsterdam_Cruise.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Amsterdam/Visit-to-AnneFrank-Museum', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam/Anne_Frank.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Amsterdam/Visit-to-Keukenof-Gardens-Flower-Fields', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam/Tulips.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Amsterdam/Visit-to-Kinderjik-Windmills', {
		templateUrl : 'resources/html/internal/destinations/Amsterdam/Kinderjik.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland/Visit-to-Blue-Lagoon', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Blue_Lagoon.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland-Day-Trip-Reykjavik-Jokusarlon-Glacier', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Jokusarlon_glacier.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland/Date-with-Lady-Aurora', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Northern_lights.html',
		controller : 'destinationCtrl as ctrl'
	})

	.when('/Iceland/Day-In-Reykjavik', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Reykjavik.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland/Stay-at-KEX-Hostel' ,{
		templateUrl : 'resources/html/internal/destinations/Iceland/Kex_hostel.html',
		controller : 'destinationCtrl as ctrl'
	})
	
		.when('/Iceland/Day-Trip-To-Golden-Circle-Stokkur-Geycir', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Golden_circle_classic.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland/Visit-to-Skogafoss', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Skogafoss.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/budgetPlanner', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Budget_planner.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Iceland/Solheimajokull-Glacier-Hike', {
		templateUrl : 'resources/html/internal/destinations/Iceland/Solheimajokull_glacier.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Barcealona/CampNou-Live-Experience', {
		templateUrl : 'resources/html/internal/destinations/Barcealona/Cam_Nou_Experience.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Barcealona/Day-In-Barcealona', {
		templateUrl : 'resources/html/internal/destinations/Barcealona/Day_In_Barcealona.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Barcealona/Hostel-360', {
		templateUrl : 'resources/html/internal/destinations/Barcealona/Hostel_360.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Barcealona/DayTrip-Barcealona-Monsterrat', {
		templateUrl : 'resources/html/internal/destinations/Barcealona/Monsterrat.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Barcealona/Scuba-Diving-Costa-Brava', {
		templateUrl : 'resources/html/internal/destinations/Barcealona/Scuba_diving.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Visit-to-Akrotiri-Excavations-Red-Beach', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Akrotiri_red_beach.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Walk-around-Oia', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Walk_around_Oia.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Easter-Celebrations-Pyrgos-village-Santorini', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Pyrgos_Easter.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Fira-Oia-10KM-Hike', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Oia_Fira_hike.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Oia-Sunset', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Oia_sunset.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Santorini/Light-House-Cliffs-Santorini', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Light_house_cliffs_santorini.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Vienna-Salzgermmut/Day-In-Vienna', {
		templateUrl : 'resources/html/internal/destinations/Vienna-Salzgermmut/Day_In_Vienna.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Vienna-Salzgermmut/Day-In-HallStatt-Dachstein-Icecaves-Viewing-Platform', {
		templateUrl : 'resources/html/internal/destinations/Vienna-Salzgermmut/HallStatAndDachstein.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Vienna-Salzgermmut/Day-In-Mondsee-St-Wolfgangsee', {
		templateUrl : 'resources/html/internal/destinations/Vienna-Salzgermmut/Mondsee_St_Wolfgansee.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Vienna-Salzgermmut/Day-In-StGilgen', {
		templateUrl : 'resources/html/internal/destinations/Vienna-Salzgermmut/Day_In_St_Gilgen.html',
		controller : 'destinationCtrl as ctrl'
	})

	.when('/Croatia/Omis-Cetina-River-Rafting', {
		templateUrl : 'resources/html/internal/destinations/Croatia/Cetina_River_Rafting.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Croatia/Visit-to-PlitVice-lakes-KRKA-National-Parks', {
		templateUrl : 'resources/html/internal/destinations/Croatia/PlitVice_Krka.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Croatia/Day-Trip-Split-HVAR-Island', {
		templateUrl : 'resources/html/internal/destinations/Croatia/Hvar_island.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Croatia/Day-Trip-Split-Dubrovnik', {
		templateUrl : 'resources/html/internal/destinations/Croatia/Dubrovnik.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Day-Trip-Naples-Positano', {
		templateUrl : 'resources/html/internal/destinations/Italy/Day_trip_to_Positano.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Day-Trip-Naples-Capri', {
		templateUrl : 'resources/html/internal/destinations/Italy/Day_trip_to_Capri.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Day-Trip-Naples-Pompeii-Scavi-Mount-Vesuvius', {
		templateUrl : 'resources/html/internal/destinations/Italy/Pompeii_Vesuvius.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Rome-Vatican-City', {
		templateUrl : 'resources/html/internal/destinations/Italy/Rome_Vatican_city.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Visit-to-Venice', {
		templateUrl : 'resources/html/internal/destinations/Italy/Venice.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/Italy/Visit-to-Pisa-Leaning-Tower', {
		templateUrl : 'resources/html/internal/destinations/Italy/Visit_to_Pisa.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/ParisPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Paris.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/AmsterdamPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Amsterdam.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/IcelandPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Iceland.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/SantoriniPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Santorini_Planner.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/SantoriniPlanning/Planning-for-Pyrgos-Easter-Celebrations', {
		templateUrl : 'resources/html/internal/travel_planning/Santorini/Pyrgos_Easter.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/SantoriniPlanning/Things-To-Do-In-Santorini', {
		templateUrl : 'resources/html/internal/travel_planning/Santorini/Things_to_do_Santorini.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/SantoriniPlanning/How-To-Reach-And-Roam-In-Santorini', {
		templateUrl : 'resources/html/internal/travel_planning/Santorini/Getting_Around_Santorini.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/SalzgermmutPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Vienna-Salzgermmut_Planner.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/StGilgenAndCogWheelRide', {
		templateUrl : 'resources/html/internal/travel_planning/Vienna-Salzgermmut/CogWheel_Woflgangsee.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/HallStattDachsteinPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Vienna-Salzgermmut/HallStat_Dachstein.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/La-Tomatina-2016', {
		templateUrl : 'resources/html/internal/destinations/LaTomatina/La_Tomatina.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/La-Tomatina-Bunol-Planning-Information', {
		templateUrl : 'resources/html/internal/travel_planning/LaTomatina/La_Tomatina.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaPlanning', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona_Planner.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaTravelPlanning/How-to-do-DayTrip-Barcealona-Monsterrat', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona/Barcealona_Monsterrat_day_trip.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaTravelPlanning/How-to-Plan-Scuba-Diving-Costa-Brava', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona/Scuba_diving_in_Spain.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaTravelPlanning/Best-way-from-Barcealona-Airport-City-Center', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona/Barcealona_airport_to_city.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaTravelPlanning/BarcealonaMetro-Information', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona/Inside_Barcealona_city.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/BarcealonaTravelPlanning/Visting-Antonio-Gaudi-Buildings', {
		templateUrl : 'resources/html/internal/travel_planning/Barcealona/Visiting_Gaudi_Architectures.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/travelResources', {
		templateUrl : 'resources/html/internal/travel_planning/Travel_Resources.html',
		controller : 'destinationCtrl as ctrl'
	})
	
	.when('/How-to-prepare-Indian-Food-in-SoloTravel', {
		templateUrl : 'resources/html/internal/Cooking_experience.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Hostel-Culture-Experience-In-Europe', {
		templateUrl : 'resources/html/internal/Hostel_culture.html',
		controller : 'indexController as ctrl'
	})
	
	.when('/Santorini/Cliff-jumping-at-Amoudi-Bay', {
		templateUrl : 'resources/html/internal/destinations/Santorini/Cliff_jumping.html',
		controller : 'destinationCtrl as ctrl'
	});
	

});
app.controller('indexController', function($scope,$window) {
					$scope.isHomePage = true;
					$scope.loadCountryDetails = function(url,identifer) {
						//$window.location.reload();
						$('.btn.navbar-toggle').click();
						$scope.disqusConfig.disqus_url='http://www.europeansaga.com/'+url;
						$scope.disqusConfig.disqus_identifier=identifer;
					};
					$scope.$on('$locationChangeStart', 
						    function (event, next, current) {
						        if (next.indexOf('/images/') > 0) {
						                event.preventDefault();
						            }
						        });
					$scope.threadId=$window.location.href;
					if($scope.disqusConfig== undefined){
						$scope.disqusConfig = {
							    disqus_shortname: 'www-europeansaga-com',
							    disqus_identifier: $window.location.href,
							    disqus_url: $window.location.href
							};
					}				
					$scope.mainMenu = [ {

						name : 'Home',
						hasChild : false,
						iconClass : 'glyphicon glyphicon-home',
						url : '/',
						identifier:'European Saga Home Page'
					}, {

						name : 'Gallery',
						hasChild : false,
						iconClass : 'glyphicon glyphicon-camera',
						isActive : false,
						url : 'gallery',
						identifier:'gallery2016'
					}, {
						
						name : 'Destination',
						hasChild : true,
						iconClass : 'glyphicon glyphicon-map-marker',
						isActive : false,
						url : '/destinations',
						identifier:'Destinations list'
					}, {

						name : 'Best of Solo Travel',
						hasChild : true,
						iconClass : 'glyphicon glyphicon-heart',
						isActive : false,
						url : '/bestOfSoloTravel',
						identifier:'Best of Solo Travel'
					}, {

						name : 'Travel Planning',
						hasChild : true,
						iconClass : 'glyphicon glyphicon-book',
						isActive : false,
						url : '/travelPlanning',
						identifier:'European city travel planning'
					} ];
					var destinationSubMenuItems = [  {
						name : 'Iceland',
						url : 'Iceland',
						identifier:'Iceland'
					}, {
						name : 'Amsterdam',
						url : 'Amsterdam',
						identifier:'Rotterdam'
					}, {
						name : 'Barcealona',
						url : 'Barcealona',
						identifier:'Barcealona'
					}, {
						name : 'Santorini',
						url : 'Santorini',
						identifier:'Santorini'
					}, {
						name : 'La Tomatina 2016',
						url : 'La-Tomatina-2016',
						identifier:'La-Tomatina-2016'
					}, {
						name : 'Croatia',
						url : 'Croatia',
						identifier:'Croatia2016'
					}, {
						name : 'Italy',
						url : 'Italy',
						identifier:'Italy'
					} ];
					var travelPlanningSubMenuItems = [ {
						name : 'Barcealona',
						url : 'BarcealonaPlanning',
						identifier:'BarcealonaPlanning'
					}, {
						name : 'Santorini',
						url : 'SantoriniPlanning',
						identifier:'9042950364'
					},{
						name : 'Salzgermmut',
						url : 'SalzgermmutPlanning',
						identifier:'SalzgermmutPlanning'
					},
					{
						name : 'La-Tomatina',
						url : 'La-Tomatina-Bunol-Planning-Information',
						identifier:'La-Tomatina-Bunol-Planning-Information'
					}];
					var bestofSoloTravelSubMenuItems = [ {
						name : 'Nomads acquaintance',
						url : 'Solo-Travel-Acquaintances',
						identifier:'SoloTravelAcquaintances'
					}, {
						name : 'Hostel Culture',
						url : 'Hostel-Culture-Experience-In-Europe',
						identifier:'HostelCultureExperienceInEurope'
					}, {
						name : 'Unleashing cooking skills',
						url : 'How-to-prepare-Indian-Food-in-SoloTravel',
						identifier:'HowtoprepareIndianFoodinSoloTravel'
					} ];
					$scope.selectedDestination = null;
					$scope.submenu = {};
					$scope.submenu['Travel Planning'] = [];
					for (var i = 0; i < travelPlanningSubMenuItems.length; i++) {
						$scope.submenu['Travel Planning'].push(travelPlanningSubMenuItems[i]);
					}
					$scope.submenu['Destination'] = [];
					for (var i = 0; i < destinationSubMenuItems.length; i++) {
						$scope.submenu['Destination'].push(destinationSubMenuItems[i]);
					}
					$scope.submenu['Best of Solo Travel'] = [];
					for (var i = 0; i < bestofSoloTravelSubMenuItems.length; i++) {
						$scope.submenu['Best of Solo Travel'].push(bestofSoloTravelSubMenuItems[i]);
					}
					$scope.footerMenuItem = [ {
						name : 'Home',
						url : '/'
					}, {
						name : 'Gallery',
						url : '/gallery'
					}, {
						name : 'Best of Solo Travel',
						url : 'Solo-Travel-Acquaintances'
					}, {
						name : 'Gallery',
						url : 'gallery'
					} ];
					$scope.popularPosts = [
							{
								experienceDescription : 'Lady Aurora'
										+ "'"
										+ 's dance performance.Mindblowing northern lights experience.',
								imageLocation : 'resources/images/popular_posts/northern_lights.JPG',
								url:'Iceland/Date-with-Lady-Aurora'
							},
							{
								experienceDescription : 'Amazing scuba diving at Costa Brava.',
								imageLocation : 'resources/images/popular_posts/scuba_diving.jpg',
								url:'Barcealona/Scuba-Diving-Costa-Brava'
							},
							{
								experienceDescription : 'Cliff jumping at Amoudi bay.',
								imageLocation : 'resources/images/popular_posts/cliff_jump.JPG',
								url:'Santorini/Cliff-jumping-at-Amoudi-Bay'
							},
							{
								experienceDescription : 'Camp Nou experience - Barcealons vs Sporting Gjon.',
								imageLocation : 'resources/images/popular_posts/camp_nou.JPG',
								url:'Barcealona/CampNou-Live-Experience'
							},
							{
								experienceDescription : 'Fira to Oia - 10 KM hike.',
								imageLocation : 'resources/images/popular_posts/fira_oia_hike.JPG',
								url:'Santorini/Fira-Oia-10KM-Hike'
							},
							{
								experienceDescription : 'Greek easter celebrations at Pyrgos - candle light march.',
								imageLocation : 'resources/images/popular_posts/Greek easter in Pyrgos.JPG',
								url:'Santorini/Easter-Celebrations-Pyrgos-village-Santorini'
							} ];
					$scope.imageSlides = [
							{
								imagePath : 'resources/images/countries/Austria.jpg',
								mediumImagePath : 'resources/images/countries/1200/Austria.jpg',
								countryDetails : 'Austria',
								imageText : 'Visit to Austria included Vienna and lake districts in Salzkammergut region which was amazingly beautiful.'
							},
							{
								imagePath : 'resources/images/countries/Netherlands.jpg',
								mediumImagePath : 'resources/images/countries/1200/Netherlands.jpg',
								countryDetails : 'Netherlands',
								imageText : 'Amsterdam - place with maximum fun and freedom. Visit to Tulips garden was world class'
							},
							{
								imagePath : 'resources/images/countries/Italy.JPG',
								mediumImagePath : 'resources/images/countries/1200/Italy.JPG',
								countryDetails : 'Italy',
								imageText : 'One of the iconic,sexiest destinations in Europe.Covered Venice,Pisa,Rome,Naples with 7 days of duration.'
							},
							{
								imagePath : 'resources/images/countries/Croatia.JPG',
								mediumImagePath : 'resources/images/countries/1200/Croatia.JPG',
								countryDetails : 'Croatia',
								imageText : 'Croatia - a tiny little beast with breathtaking landscapes.Having Split as base did several day trips.'
							},
							{
								imagePath : 'resources/images/countries/La_Tomatina.jpg',
								mediumImagePath : 'resources/images/countries/1200/La_Tomatina.jpg',
								countryDetails : 'La Tomatina - 2016',
								imageText : 'My second trip to Spain was solely for this event.The most awaited,cherished,celebrated event of my adventures.'
							},
							{
								imagePath : 'resources/images/countries/Iceland.jpg',
								mediumImagePath : 'resources/images/countries/1200/Iceland.jpg',
								countryDetails : 'Iceland',
								imageText : 'Iceland is probably the best country I have ever visited and would ever visit.From dancing of Lady Aurora to beautiful glaciers ,Iceland will remain on top my charts forever'
							},
							{
								imagePath : 'resources/images/countries/Spain.jpg',
								mediumImagePath : 'resources/images/countries/1200/Spain.jpg',
								countryDetails : 'Spain',
								imageText : '4 days in Barcealona was not enough.Yet , did scuba diving, saw Barca playing,tasted Paella,Sangria,Tapas ,roamed freely in La Rambles'
							} ];
					$scope.myInterval = 5000;
					$scope.briefIntro = 'I, Balaji Kannan,Indian by nationality , Software Engineer by profession and a short term European expat by coincidence who has been fortunate enough to have travelled to some of the exotic locations all alone.';
					$scope.whatItHasToOffer = 'Welcome to the page of a Solo traveller.In this website, you can find the adventourous journey that I have undertaken all alone.In this page I will share the wonderful experiences I have had,best of solo travelling,efficient travel plans,tips and useful resouces.';
					$scope.howItStarted = 'Landed in Poland around November 2015. With initial few months being winter , I was all home and took initial days to understand the lifestyle here.I did not realise Poland would be my gateway to Europe until I visited magnificent Reyjavik,Iceland.';
					$scope.howItFeels = 'Solo travel is an experience like none other.Allows me to explore a destination the way I want.It does not involve the schedule or intervention of others.Solo travel so far has given me wonderful,lifetime and everlasting memories so far.';
				});
