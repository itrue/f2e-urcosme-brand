// JavaScript Document
$(document).ready(function() {
  $( "#brand_index_tabs" ).tabs();
  $( "#brand_product_search" ).tabs();
  $( "#brand_product_attribute" ).tabs();
  $( "#brand_product_search_result" ).tabs();
  
  
});


$(document).ready(function() {
  $('.brand_kv_slider').bxSlider({
	auto: true,
	autoHover: true
  });
  
});

$(document).ready(function() {
  $('.brand_promotion_history_slide').bxSlider({
    slideWidth: 207,
    minSlides: 2,
    maxSlides: 4,
		moveSlides: 1,
    slideMargin: 20

  });
	
});

$(document).ready(function(){
  $('#jlocator').jlocator({					
	geolocation: true,
	latitude: 25.026199,
	longitude: 121.530841,
	startZoom: 7,
	markerIcon: $('#jlocator').attr("data-icon")
	//,markerIcon: 'img/museum.png'
  });
});
		
$("#pe-thumbs").each(function() {
	var ul = $(this);
	$(".black-cover");
	ul.find('li').each(function() {
		var li = $(this);
		// li.find(".pe-description")
		li.find("img").on("mouseover", function() {
			li.css("z-index", 1000)
			li.find("a").css("z-index", 1000)
			li.find(".pe-description").css("z-index", 1000).fadeIn(500);
			$(".black-cover").show();
		});
		li.find("img").on("mouseout", function() {
			li.css("z-index", 1);
			li.find("a").css("z-index", 1)
			li.find(".pe-description").css("z-index", 1).hide();
			$(".black-cover").hide();
		});
	})
})

