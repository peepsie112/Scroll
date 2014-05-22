function scrolls(scrollPoints, links){

	for(var points = 0; points < scrollPoints.length; points++){

		scrollPoints[points] = document.getElementById(scrollPoints[points]);
		links[points] = document.getElementById(links[points]);

	}

	for(var i = 0; i < scrollPoints.length; i++){


		if(document.body.scrollTop < scrollPoints[i].offsetTop || document.body.scrollTop > (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

			links[i].style.color = "#fff";

		}else if(document.body.scrollTop >= scrollPoints[i].offsetTop && document.body.scrollTop <= (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

			links[i].style.color = "#f0f";

		}

	}

}


document.addEventListener("scroll", function(){

	var scrollPoints = ["section1", "section2", "section3", "section4"];
	var links = ["link1", "link2", "link3", "link4"];
	scrolls(scrollPoints, links);

});