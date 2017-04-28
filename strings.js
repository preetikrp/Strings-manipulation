console.log("Hi Strings");
//Initialized the variable

var input = document.getElementById("input");
var button = document.getElementById("btn");
var output = document.getElementById("output");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");

//Added eventlistener

button.addEventListener("click", reversal);
button.addEventListener("click",alphabits);
button.addEventListener("click", palindrome);

//Function for reversal

function reversal(){
	if(isNaN(input.value)){
var inputvar = input.value;
var splited = inputvar.split("").reverse().join("");
	output.innerHTML = splited;
	}else{
		alert("Its not a number");
	}

	}
//Function for alphabits


	function alphabits(){
		if(isNaN(input.value)){
		var alpha = input.value;
		 alpha = alpha.split("").sort().join("");
output1.innerHTML = alpha;
		}else{
			alert("Its not a number");
		}
	}

//Function for palindrome

	function palindrome(){
		if(isNaN(input.value)){
			var palininput = input.value;
			var plalinoutput = palininput.split("").reverse().join("");
			if (palininput == plalinoutput){
				output2.innerHTML = "Its a palindrome";

			}else{
				output2.innerHTML = "Its not a palindrome";
			}
		}
	}