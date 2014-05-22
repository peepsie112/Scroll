function scrolls(scrollPoints, links){

	for(var points = 0; points < scrollPoints.length; points++){

		scrollPoints[points] = document.getElementById(scrollPoints[points]);
		links[points] = document.getElementById(links[points]);

	}

	// if(document.body.scrollTop >= scrollPoints[1].offsetTop && document.body.scrollTop <= scrollPoints[1].offsetTop + scrollPoints[1].offsetHeight){
	// 	links[1].style.color = "#f0f";
	// }else if(document.body.scrollTop <= scrollPoints[1].offsetTop){

	// 	links[1].style.color = "#fff";
	// }

	// if(document.body.scrollTop >= scrollPoints[2].offsetTop && document.body.scrollTop <= scrollPoints[2].offsetTop + scrollPoints[2].offsetHeight){
	// 	links[2].style.color = "#f0f";
	// 	links[1].style.color = "#fff";
	// }

	// if(0 in scrollPoints){
	// 	console.log("s");
	// }

	for(var i = 0; i < scrollPoints.length; i++){


		if(document.body.scrollTop < scrollPoints[i].offsetTop || document.body.scrollTop > (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

			links[i].style.color = "#fff";

		}else if(document.body.scrollTop >= scrollPoints[i].offsetTop && document.body.scrollTop <= (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

			links[i].style.color = "#f0f";

		}

	}

	// if(document.body.scrollTop >= scrollPoints)

}


document.addEventListener("scroll", function(){

	var scrollPoints = ["section1", "section2", "section3", "section4"];
	var links = ["link1", "link2", "link3", "link4"];
	scrolls(scrollPoints, links);

});