
$(function(){

var h = window.getComputedStyle(
	document.querySelector('.home-font'), ':after'
).getPropertyValue('height')
	document.getElementById("section1").style.top=h;

	var sect1=document.getElementById("section1");
	var top2= 2*sect1.offsetTop;
	var top3=3*sect1.offsetTop;
	document.getElementById("section2").style.top=top2+"px";
	document.getElementById("section3").style.top=top3+"px";



var header=document.getElementById("myHeader");

	$("li>a").click(function(){
		header.style.backgroundColor="black";
	});

	var sec1= document.getElementById("section1");
	var w=window.innerWidth;

	if (w>1300){
		$("#about-me-text").style.fontSize="28px";
	}
	
	$(document).scroll(function(){
   if($(this).scrollTop() > 0) {   
        header.style.backgroundColor="black";
    } else  { 
   		header.style.backgroundColor="inherit";
     };
});

});



	


