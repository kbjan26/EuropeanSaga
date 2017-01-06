app.controller('GalleryCtrl', function($scope) {
	$scope.isHomePage = false;
	console.log("Inside image gallery js");
	$scope.imageGallery = [ {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Cliff_Jump.JPG',
		galleryImageUrl : 'resources/images/gallery/Cliff_Jump.JPG',
		imageInfo : 'Captured during cliff jumping at Amoudi Bay.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Hallstatt.JPG',
		galleryImageUrl : 'resources/images/gallery/Hallstatt.JPG',
		imageInfo : 'Tiny wonder from Austia lake districts - Hallstatt.',
		imageClass : 'image-block col-sm-8'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Blue_caves_Capri.JPG',
		galleryImageUrl : 'resources/images/gallery/Blue_caves_Capri.JPG',
		imageInfo : 'Blue Caves alias Blue Grotto , Capri,Italy.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Budapest_Parliament.JPG',
		galleryImageUrl : 'resources/images/gallery/Budapest_Parliament.JPG',
		imageInfo : 'Parliament at Budapest , Hungary.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Burano.JPG',
		galleryImageUrl : 'resources/images/gallery/Burano.JPG',
		imageInfo : 'Burano , Venice, Italy.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Colosseum.JPG',
		galleryImageUrl : 'resources/images/gallery/Colosseum.JPG',
		imageInfo : 'Colosseum , Rome,Italy.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Faraglioni_Capri.JPG',
		galleryImageUrl : 'resources/images/gallery/Faraglioni_Capri.JPG',
		imageInfo : 'Capri,Italy.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Positano_Italy.JPG',
		galleryImageUrl : 'resources/images/gallery/Positano_Italy.JPG',
		imageInfo : 'Positano,Amalfi Coast,Italy.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/St_Peter_Basilica.JPG',
		galleryImageUrl : 'resources/images/gallery/St_Peter_Basilica.JPG',
		imageInfo : 'St Peter Basilica ,Vatican City,Italy.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Dubrovnik.JPG',
		galleryImageUrl : 'resources/images/gallery/Dubrovnik.JPG',
		imageInfo : 'Kings Landing,Captial of Croatia, Dubrovnik.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/PlitVice_Croatia.JPG',
		galleryImageUrl : 'resources/images/gallery/PlitVice_Croatia.JPG',
		imageInfo : 'PlitVice National Park, Croatia.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/ICeland_glacier.JPG',
		galleryImageUrl : 'resources/images/gallery/ICeland_glacier.JPG',
		imageInfo : 'Stokkur Iceland.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Black_Sand_beach.JPG',
		galleryImageUrl : 'resources/images/gallery/Black_Sand_beach.JPG',
		imageInfo : 'Black Sand beach , Iceland.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/geycer_Iceland.JPG',
		galleryImageUrl : 'resources/images/gallery/geycer_Iceland.JPG',
		imageInfo : 'Strokkur Geycer,Icleand.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Amoudi_bay.JPG',
		galleryImageUrl : 'resources/images/gallery/Amoudi_bay.JPG',
		imageInfo : 'Amoudi Bay - Santorini.',
		imageClass : 'image-block col-sm-8'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Pyrgos_easter.JPG',
		galleryImageUrl : 'resources/images/gallery/Pyrgos_easter.JPG',
		imageInfo : 'Pyrgos ,Santorini Easter.',
		imageClass : 'image-block col-sm-4'
	},{
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Pyrgos_easter_1.JPG',
		galleryImageUrl : 'resources/images/gallery/Pyrgos_easter_1.JPG',
		imageInfo : 'Pyrgos ,Santorini Easter.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Santorini_sunet.JPG',
		galleryImageUrl : 'resources/images/gallery/Santorini_sunet.JPG',
		imageInfo : 'Oia Sunset.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Santorini-Greece.JPG',
		galleryImageUrl : 'resources/images/gallery/Santorini-Greece.JPG',
		imageInfo : 'Oia , Picturesque wonder.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Disney_1.JPG',
		galleryImageUrl : 'resources/images/gallery/Disney_1.JPG',
		imageInfo : 'Disney Land ,Paris.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Disney_2.JPG',
		galleryImageUrl : 'resources/images/gallery/Disney_2.JPG',
		imageInfo : 'Disney Land ,Paris.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Disney_3.JPG',
		galleryImageUrl : 'resources/images/gallery/Disney_3.JPG',
		imageInfo : 'Disney Land ,Paris.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Monsterrat.JPG',
		galleryImageUrl : 'resources/images/gallery/Monsterrat.JPG',
		imageInfo : 'Monsterrat , Spain.',
		imageClass : 'image-block col-sm-4'
	}, {
		galleryTbImageUrl:'resources/images/gallery/thumbnail/Reyjavik.JPG',
		galleryImageUrl : 'resources/images/gallery/Reyjavik.JPG',
		imageInfo : 'Rejyavik , Iceland.',
		imageClass : 'image-block col-sm-4'
	} ];
	 $scope.items = [{
	      'name': 'First Item',
	      'description': 'first description'
	    }, {
	      'name': 'Second item',
	      'description': 'second description'
	    }, {
	      'name': 'Third Item',
	      'description': 'third description'
	    }];
});
