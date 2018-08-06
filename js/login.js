
function logIn(){
	
	var userName = document.getElementById('userName').value;
	var password = document.getElementById('password').value;

    if(userName=="saitirumala"&&password=="sai999888"){
	    alert ("Login successfully..");
	    window.open("https://saitirumala.github.io/Search_cars/CarsHomepage.html");
	}else if(userName == '' && password== ''){
		alert ("please fill user name and password");
	}else {
		alert("error in login details..");
	}
}


function isPalindrome(value) {

	var newArray = value.split('').reverse();
	var reversedString = newArray.join('');
	
	if(value == reversedString) {
		return true;
	}else {
		return false;
	}
}



function addStrings(value1, value2){
	return value2+value1;
}

console.log(divideBy2(34));

function divideBy2(value){

	if(value%2===0){
		return true;
	}
	else{
		return false;
	}
}
