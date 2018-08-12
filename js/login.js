
function logIn(){
	
	var userName = document.getElementById('userName').value;
	var password = document.getElementById('password').value;

    if(userName=="saitirumala"&&password=="sai999888"){
	    alert ("Login successfully..");
	 location.replace("https://saitirumala.github.io/Search_cars/CarsHomepage.html");
	}else if(userName == '' && password== ''){
		alert ("please fill user name and password");
	}else {
		alert("error in login details..");
	}
}
