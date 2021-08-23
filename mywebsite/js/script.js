
$(function(){


	 $("#physics-link").click(function(){
           var x=document.getElementById("section2");
           var y=document.getElementById("section3");
           var z=document.getElementById("section4");
           document.getElementById("section1").style.display="none";
           y.style.display="";
           z.style.display="";
           document.getElementById("maths-link").style.backgroundColor="";
           document.getElementById("home-page").style.backgroundColor="";
           document.getElementById("contact-link").style.backgroundColor="";
           if(x.style.display==""){
           	x.style.display="block";
           	document.getElementById("physics-link").style.backgroundColor="#FFEFD5";
           }else{
           	x.style.display="";
           }
        });

	 $("#maths-link").click(function(){
	 	var x=document.getElementById("section3");
	 	var y=document.getElementById("section2");
	 	var z=document.getElementById("section4");
	 	   document.getElementById("section1").style.display="none";
	 	z.style.display="";
	 	y.style.display="";
	 	document.getElementById("physics-link").style.backgroundColor="";
	 	document.getElementById("home-page").style.backgroundColor="";
	 	document.getElementById("contact-link").style.backgroundColor="";
	 	if(x.style.display==""){
           	x.style.display="block";
           	document.getElementById("maths-link").style.backgroundColor="#FFEFD5";
           }else{
           	x.style.display="";
           }


	 });

	  $("#contact-link").click(function(){
	 	var x=document.getElementById("section4");
	 	var y=document.getElementById("section2");
	 	var z=document.getElementById("section3");
	 	   document.getElementById("section1").style.display="none";
	 	y.style.display="";
	 	z.style.display="";
	 	document.getElementById("physics-link").style.backgroundColor="";
	 	document.getElementById("maths-link").style.backgroundColor="";
	 	document.getElementById("home-page").style.backgroundColor="";
	 	if(x.style.display==""){
           	x.style.display="block";
           	document.getElementById("contact-link").style.backgroundColor="#FFEFD5";
           }else{
           	x.style.display="";
           }


	 });

	 $("#home-page").click(function(){
	 	document.getElementById("home-page").style.backgroundColor="#FFEFD5";
	 	document.getElementById("physics-link").style.backgroundColor="";
	 	document.getElementById("maths-link").style.backgroundColor="";
	 	document.getElementById("contact-link").style.backgroundColor="";
	 	var x=document.getElementById("section2");
	 	var y=document.getElementById("section3");
	 	var z=document.getElementById("section4");
	 	   document.getElementById("section1").style.display="inline-block";
	 	x.style.display="";
	 	y.style.display="";
	 	z.style.display="";

	 });
});
	


