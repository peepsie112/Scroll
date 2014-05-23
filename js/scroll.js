var myScroll, scrolls;

(function(){

    myScroll = scrolls = function(points, sect){

        return new MyScroll(points, sect);

    };

    var MyScroll = function(points, sect){

    	for(var p = 0; p < points.length; p++){

				points[p] = document.getElementById(points[p]);
				sect[p] = document.getElementById(sect[p]);

		}

		this.scrollPoints = points;
		this.links = sect;


        return this;
    };

    myScroll.fn = MyScroll.prototype = {

        a: function(){
        	var scrollPoints = this.scrollPoints;
        	var links = this.links;

			document.addEventListener("scroll", function(){
			            
	            for(var i = 0; i < scrollPoints.length; i++){


	                if(document.body.scrollTop < scrollPoints[i].offsetTop || document.body.scrollTop > (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

	                    links[i].style.color = "#fff";

	                }else if(document.body.scrollTop >= scrollPoints[i].offsetTop && document.body.scrollTop <= (scrollPoints[i].offsetTop + scrollPoints[i].offsetHeight)){

	                    links[i].style.color = "#f0f";

	                }

	            }

	            return this;

	        });

        }
        
    };

}());