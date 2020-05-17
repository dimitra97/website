
$(function(){

var h = window.getComputedStyle(
	document.querySelector('.home-font'), ':after'
).getPropertyValue('height')
console.log(h);
	document.getElementById("section1").style.top=h;

var header=document.getElementById("myHeader");
	$("li>a").click(function(){
		header.style.backgroundColor="black";
	});

	
	$(document).scroll(function(){
   if($(this).scrollTop() > 0) {   
        header.style.backgroundColor="black";
    } else  { 
   		header.style.backgroundColor="inherit";
     };
});

});
	


