
var i = 0;
var product1 = 0;
var shipping1 = 0;
var rev = 0;
var pic = ["images/product1.jpg","images/product2.jpg","images/product3.jpg"];
		
var allProducts = [
		g1={
			product_description: "This are one of several Squier models available that offer a pretty good product for a reasonably low price. The pick-ups and hardware are sometimes suspect, and the workmanship varies from instrument to instrument, but for the price, these are a very good beginner guitar choice.",
			shipping_details : "charges for shipping $20",
			customer_reviews: "Hmm...well, sounds like a tele at low volumes...the higher the volume, the worse the squeals;like a pig really...ah well, it's a cheap guitar...also tends to rattle above the 10th fret; on the 1st and 2nd strings (to the point of fretting out completely); and on the 5 and 6 stings on the 1st through 3rd frets...weird...action; settings help, but not much...hard to set the intonation as well (read, damn near impossible)... ",
			price: "$204.99",
			stock: "true",
			no_of_items: "10"
		},
		g2={
			product_description: "Modelled after the much more expensive Gibson SG guitars, the Epiphone SG G310 keeps it's cost low by using cheaper hardware and lower quality humbucking pick-ups. The G-310 features an alder body, a mahogany neck, and a dot-inlayed rosewood fingerboard.",
			shipping_details:"charges for shipping $25",
			customer_reviews:"  Heck...I bought it as a knock around guitar I could beat up a little as I carried it around with me; (I hate not having a guitar next to me...)...but it hasn't even fit this role very well;I considered putting in new pickups and tuners...but the whole buzzing thing seems impossible to cure;well, there you go...I'm planning to sell it, or failing that; when my new band plays our first show I guess I'll pull a Townsend on it...",
			price: "$249.99",
			stock:"true",
			no_of_items:"14"
		},
		g3={
			product_description: "Here's another guitar many people feel is a great value. This Pacifica features an agathis body, maple neck, and rosewood fretboard, with two single coil pick-ups, and one humbucker. The consensus is the guitar is reasonably well made, and the quality of the wood tends to be high.",			
			shipping_details:"charges for shipping $18",
			customer_reviews:"  yep...those were the pros above...basically this guitar;I guess it might be okay if you need something that looks and feels like a guitar;hmm...well, hit it hard and it chips...no finish flaws though;the tuners suck so bad it's hard to describe...tuning it is a real pain...but it doesn't go out too quickly I guess... ; just to practice on if you don't care what it sounds like at all... ",			
			price: "$179.99",
			stock:"true",
			no_of_items:"14"
		}
	];

// first page
    function a(){
			//alert(i);
			if (i == 0) {
				i = pic.length;
					
			}
			i--;
			document.getElementsByTagName('img')[0].src = pic[i];
			document.getElementById('subContent').removeAttribute("hidden");
			document.getElementById('buy').style.display="block";
			text();
			shipf();
			rev2();
			
		}	
	function b(){
			if (i == pic.length-1) {
				i = -1;
			}
			i++;
			document.getElementsByTagName('img')[0].src = pic[i];
			document.getElementById('subContent').removeAttribute("hidden");
			document.getElementById('buy').style.display="block";
			text();
			shipf();
			rev2();

		}
	function productInfo(){
			if (product1 == 0) {
				document.getElementById('product_Info').removeAttribute("hidden");
				document.getElementsByClassName('plus')[0].innerHTML = "-";

				product1++;
			}else if(product1 == 1){
				document.getElementById('product_Info').setAttribute("hidden","");
				document.getElementsByClassName('plus')[0].innerHTML = "+";
				product1--;
			}
	}
	function shipping(){
			if (shipping1 == 0) {
				document.getElementById('shipping_Info').removeAttribute("hidden");
				document.getElementsByClassName('plus')[1].innerHTML = "-";

				shipping1++;
			}else if(shipping1 == 1){
				document.getElementById('shipping_Info').setAttribute("hidden","");
				document.getElementsByClassName('plus')[1].innerHTML = "+";
				shipping1--;
			}
	}
	function review(){
			if (rev == 0) {
				document.getElementById('reviewInfo').removeAttribute("hidden");
				document.getElementsByClassName('plus')[2].innerHTML = "-";

				rev++;
			}else if(rev == 1){
				document.getElementById('reviewInfo').setAttribute("hidden","");
				document.getElementsByClassName('plus')[2].innerHTML = "+";
				rev--;
			}
	}
	function text(){
			document.getElementById('product_Info1').innerHTML = allProducts[i].product_description;
			document.getElementById('price').innerHTML = allProducts[i].price;
	}
	function shipf(){
			document.getElementById('shipping_Info1').innerHTML = allProducts[i].shipping_details;
		
	}
	function rev2(){
			document.getElementById('review_Info').innerHTML = allProducts[i].customer_reviews;
	}		
		
    // first page calling second page
   function page2(){
    		window.location="guitar2.html?image=" + pic[i] + "&i=" + i;
    }
   //second page
    function pageg(){
	    	var source= location.search.split("image=")[1].split("&")[0];
	    	var j =location.search.split("i=")[1];
	    	document.getElementById("image2").src= source;
	    	document.getElementById("product2").innerHTML = allProducts[j].product_description;
	    	document.getElementById("price2").innerHTML = allProducts[j].price;
	    }
    text();
	shipf();
	rev2();
    //first page
    function purchaseForm(){
			var fName = document.getElementById('fName').value.toUpperCase();
			var lName = document.getElementById('lName').value.toUpperCase();
			var cc = document.getElementById('cc').value;
			var email = document.getElementById('email').value.toLowerCase();
					if(fName=="" || lName=="" || email==""){
						alert("enter all the details");
					}//else if (cc=="" || isNaN(cc)|| cc.length!==16)
					else if (cc=="" || isNaN(cc)){
						alert("enter credit card details and it should be 16 digits number");
					}else{
			document.getElementById('fName1').innerHTML = fName;
			document.getElementById('lName1').innerHTML = lName;
			document.getElementById('cc1').innerHTML = cc;
			document.getElementById('email1').innerHTML = email;
			document.getElementById('purchase').setAttribute("hidden","");
			document.getElementById('info1').removeAttribute("hidden")
			document.getElementById('purchasebtn').setAttribute("hidden","");
		}
		}
	function formDetails(){
			document.getElementById('fName').innerHTML = document.getElementById('fName1').value;
			document.getElementById('lName').innerHTML = document.getElementById('lName1').value;
			document.getElementById('cc').innerHTML = document.getElementById('cc1').value;
			document.getElementById('email').innerHTML = document.getElementById('email1').value;
			document.getElementById('purchase').removeAttribute("hidden");
			document.getElementById('purchasebtn').removeAttribute("hidden");
			document.getElementById('info1').setAttribute("hidden","");
		}
//opens the third page 
	function checkOut(){
			var j = location.search.split("i=")[1];
			window.location = "guitar3.html?image=" + pic[j] +"&j=" + j;
			}
//third page
	function final() {
			var k = location.search.split("image=")[1].split("&")[0];
			var m = location.search.split("j=")[1];
			document.getElementById('final_prod').src = k;
			document.getElementById('final_prod_info').innerHTML = allProducts[m].product_description;
			document.getElementById('final_price_info').innerHTML = allProducts[m].price;
			
			var ship_price = allProducts[m].shipping_details.split("shipping $")[1];
			var g_price = allProducts[m].price.split("$")[1];
			var final_price = parseFloat(ship_price) + parseFloat(g_price);
			document.getElementById('final_ship_info').innerHTML = "$" + ship_price;
			document.getElementById('final_total_info').innerHTML = "$" + final_price;
			document.getElementById('final_order_info').innerHTML = parseInt(Math.abs(1 + Math.random()*999999));
			
		}
