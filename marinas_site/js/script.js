
$(function(){

var x = document.getElementsByTagName("BODY")[0]; 	
document.getElementById("copyright").style.top= x.clientHeight;


	$('.link1').click(function(){
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.clientHeight);
		document.getElementById("copyright").style.top= x.clientHeight;
		var x=document.getElementById("section1");
		var y=document.getElementById("section2");
		var z=document.getElementById("section3");
		document.getElementById("hagiography").style.display="none";
		document.getElementById("painting").style.display="none";
		document.getElementById("drawing").style.display="none";
		document.getElementById("jesuschrist").style.display="none";
		document.getElementById("maryandjesus").style.display="none";
		document.getElementById("agioi").style.display="none";
		x.style.display="block";
		y.style.display="none";
		z.style.display="none";

	});

	$('.link2').click(function(){
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.clientHeight);
		document.getElementById("copyright").style.top= x.clientHeight;
		var x=document.getElementById("section1");
		var y=document.getElementById("section2");
		var z=document.getElementById("section3");
		document.getElementById("hagiography").style.display="none";
		document.getElementById("painting").style.display="none";
		document.getElementById("drawing").style.display="none";
		document.getElementById("jesuschrist").style.display="none";
		document.getElementById("maryandjesus").style.display="none";
		document.getElementById("agioi").style.display="none";
		x.style.display="none";
		y.style.display="block";
		z.style.display="none";
		

	});

	$('.link3').click(function(){
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.clientHeight);
		document.getElementById("copyright").style.top= x.clientHeight;
		var x=document.getElementById("section1");
		var y=document.getElementById("section2");
		var z=document.getElementById("section3");
		x.style.display="none";
		y.style.display="none";
		z.style.display="block";
		document.getElementById("hagiography").style.display="none";
		document.getElementById("painting").style.display="none";
		document.getElementById("drawing").style.display="none";
		document.getElementById("jesuschrist").style.display="none";
		document.getElementById("maryandjesus").style.display="none";
		document.getElementById("agioi").style.display="none";
	});

	$("#holy-tile").hover(function(){
		document.getElementById("holy-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("holy-tile").style.boxShadow="none";
	});

		$("#painting-tile").hover(function(){
		document.getElementById("painting-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("painting-tile").style.boxShadow="none";
		document.getElementById("hagiography").style.boxShadow="none";
		
	});

		$("#drawing-tile").hover(function(){
		document.getElementById("drawing-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("drawing-tile").style.boxShadow="none";

	});

	$("#jesus-tile").hover(function(){
		document.getElementById("jesus-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("jesus-tile").style.boxShadow="none";
	});

		$("#mary-tile").hover(function(){
		document.getElementById("mary-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("mary-tile").style.boxShadow="none";
		
	});

		$("#agioi-tile").hover(function(){
		document.getElementById("agioi-tile").style.boxShadow="10px 10px 15px white";
	}, function(){
		document.getElementById("agioi-tile").style.boxShadow="none";
		

	});

	var visits1=0;
	var visits2=0;
	var visits3=0;
	var visits4=0;
	var visits5=0;
	
	$("#holy-tile").click(function(){
		document.getElementById("hagiography").style.display="inline-block";
		document.getElementById("section2").style.display="none";
		document.getElementById("painting").style.display="none";
		document.getElementById("drawing").style.display="none";
		

		$("#jesus-tile").click(function(){
			document.getElementById("jesuschrist").style.display="inline-block";
			document.getElementById("hagiography").style.display="none";
			if(visits1==0){

		var parent    = document.getElementById('jesuschrist');
		var imagePath = 'js/hagiography/jesus';

		var img;
		var w = window.innerWidth;
		var h = window.innerHeight;

		for (var i = 1; i <6; i++) {
			var a = document.createElement('a'); 
			var text=document.createTextNode("Πίσω");
    		img = new Image();
   		 $("img").addClass("image");
    		img.src = imagePath+'/image'+i+'.jpg';
    		var height=img.height;
   		 	var width=img.width;
    		var adjW = "300";
   			var adjH ="300";
    		img.height=adjH;
    		img.width=adjW;
    		img.appendChild(text);
    		a.appendChild(img);
    		a.style.width=adjW;
    		a.style.height=adjH;
    		a.href=img.src;
   			parent.appendChild(a);
		}
	

		visits1=visits1+1;
		

	}
	var x = document.getElementsByTagName("BODY")[0]; 
		document.getElementById("copyright").style.top= x.offsetHeight;


		$('.back-button').click(function(){
			document.getElementById("jesuschrist").style.display="none";
			document.getElementById("hagiography").style.display="inline-block";
			var x = document.getElementsByTagName("BODY")[0]; 
			document.getElementById("copyright").style.top= x.offsetHeight;

		});
	});


		$("#mary-tile").click(function(){
			document.getElementById("maryandjesus").style.display="inline-block";
			document.getElementById("hagiography").style.display="none";
			if(visits2==0){

		var parent    = document.getElementById('maryandjesus');
		var imagePath = 'js/hagiography/jesus and Maria';

		var img;
		var w = window.innerWidth;
		var h = window.innerHeight;

		for (var i = 1; i <7; i++) {
			var a = document.createElement('a'); 
			var text=document.createTextNode("Πίσω");
    		img = new Image();
   		 $("img").addClass("image");
    		img.src = imagePath+'/image'+i+'.jpg';
    		var height=img.height;
   		 	var width=img.width;
    		var adjW = "300";
   			var adjH ="300";
    		img.height=adjH;
    		img.width=adjW;
    		img.appendChild(text);
    		a.appendChild(img);
    		a.style.width=adjW;
    		a.style.height=adjH;
    		a.href=img.src;
   			parent.appendChild(a);
		}
	

		visits2=visits2+1;
	}
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.offsetHeight);
		document.getElementById("copyright").style.top= x.offsetHeight;

		$('.back-button').click(function(){
			document.getElementById("maryandjesus").style.display="none";
			document.getElementById("hagiography").style.display="inline-block";
			var x = document.getElementsByTagName("BODY")[0]; 
			document.getElementById("copyright").style.top= x.offsetHeight;

		});

	});
		$("#agioi-tile").click(function(){
			document.getElementById("agioi").style.display="inline-block";
			document.getElementById("hagiography").style.display="none";
			if(visits3==0){

		var parent    = document.getElementById('agioi');
		var imagePath = 'js/hagiography/agioi';

		var img;
		var w = window.innerWidth;
		var h = window.innerHeight;

		for (var i = 1; i <16; i++) {
			var a = document.createElement('a'); 
			var text=document.createTextNode("Πίσω");
    		img = new Image();
   		 $("img").addClass("image");
    		img.src = imagePath+'/image'+i+'.jpg';
    		var height=img.height;
   		 	var width=img.width;
    		var adjW = "300";
   			var adjH ="300";
    		img.height=adjH;
    		img.width=adjW;
    		img.appendChild(text);
    		a.appendChild(img);
    		a.style.width=adjW;
    		a.style.height=adjH;
    		a.href=img.src;
   			parent.appendChild(a);
		}
	

		visits3=visits3+1;
	}
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.offsetHeight);
		document.getElementById("copyright").style.top= x.offsetHeight;
		$('.back-button').click(function(){
			document.getElementById("agioi").style.display="none";
			document.getElementById("hagiography").style.display="inline-block";
			var x = document.getElementsByTagName("BODY")[0]; 
			document.getElementById("copyright").style.top= x.offsetHeight;

		});

	});

		});

	

	$("#painting-tile").click(function(){
		document.getElementById("painting").style.display="inline-block";
		document.getElementById("section2").style.display="none";
		document.getElementById("hagiography").style.display="none";
		document.getElementById("drawing").style.display="none";

	if(visits4==0){

		var parent    = document.getElementById('painting');
		var imagePath = 'js/painting';

		var img;
		var w = window.innerWidth;
		var h = window.innerHeight;

		for (var i = 1; i <12; i++) {
			var a = document.createElement('a'); 
			var text=document.createTextNode("Πίσω");
    		img = new Image();
   		 $("img").addClass("image");
    		img.src = imagePath+'/image'+i+'.jpg';
    		var height=img.height;
   		 	var width=img.width;
    		var adjW = "300";
   			var adjH ="300";
   			if (i==3){
   			var adjW = "450";
   			var adjH ="300";
   			}
    		img.height=adjH;
    		img.width=adjW;
    		img.appendChild(text);
    		a.appendChild(img);
    		a.style.width=adjW;
    		a.style.height=adjH;
    		a.href=img.src;
   			parent.appendChild(a);
		}
	

		visits4=visits4+1;
	}
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.offsetHeight);
		document.getElementById("copyright").style.top= x.offsetHeight;

	});

var visits5=0;
	$("#drawing-tile").click(function(){
		document.getElementById("drawing").style.display="inline-block";
		document.getElementById("section2").style.display="none";
		document.getElementById("painting").style.display="none";
		document.getElementById("hagiography").style.display="none";

	if(visits5==0){

		var parent    = document.getElementById('drawing');
		var imagePath = 'js/drawing';

		var img;
		var w = window.innerWidth;
		var h = window.innerHeight;

		for (var i = 1; i <8; i++) {
			var a = document.createElement('a'); 
			var text=document.createTextNode("Πίσω");
    		img = new Image();
   		 $("img").addClass("image");
    		img.src = imagePath+'/image'+i+'.jpg';
    		var height=img.height;
   		 	var width=img.width;
    		var adjW = "300";
   			var adjH ="300";
    		img.height=adjH;
    		img.width=adjW;
    		img.appendChild(text);
    		a.appendChild(img);
    		a.style.width=adjW;
    		a.style.height=adjH;
    		a.href=img.src;
   			parent.appendChild(a);
		}
	

		visits5=visits5+1;
	}
		var x = document.getElementsByTagName("BODY")[0]; 
		console.log(x.offsetHeight);
		document.getElementById("copyright").style.top= x.offsetHeight;

	});









});



	


