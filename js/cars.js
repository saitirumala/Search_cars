var carsData =[
{
      make:'volkswagen',
      model: 'polo',
      mileage : '18.78 kmpl',
      engine_Displ : '999 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '280-liters',
      power_Windows : 'Front',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'Rear',
      origin:'India',
      img_url:'images/volkswagen_polo.jpg'  
  },
  {
      make:'volkswagen',
      model: 'ameo',
      Mileage : '21.66 kmpl',
      Engine_Displ : '1498 cc',
      Transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '330-liters',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'Rear',
      origin:'India',
      img_url:'images/volkswagen_ameo.jpg'  
   
  },
  {
      make:'volkswagen',
      model: 'vento',
      mileage : '20.64 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '494-liters',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs: 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/volkswagen_vento.jpg'  
  },
  { make:'suzuki',
    model:'Baleno',
   	Mileage : '21.4 kmpl',
    engine_Displ : '1197 cc',
    transmission : 'Manual',
    fuel_Type : 'Petrol', 
    boot_Space : '339-litres',
    power_Windows : 'Front and Rear',
    airbags : 'Driver and Passenger',
    abs : 'Y',  
    central_Locking : 'Y',
    fog_Lamps :'Front',
	origin:'India',
	img_url:'images/suzuki_baleno.jpg'   
  },
  {
    make:'suzuki',
    model:'Brezza',
	mileage :'24.4 kmpl',
	engine_Displ : '1297 cc',
	fransmission : 'Manual',
	fuel_Type : 'diesel', 
	boot_Space : '328-litres',
	power_Windows : 'Front',
	airbags : 'Driver and Passenger',
	abs : 'Y',  
	central_Locking : 'Y',
	fog_Lamps :'N',
    origin:'India',
    img_url:'images/suzuki_brezza.jpg'  
  },
  {
      make:'suzuki',
      model: 'swift',
      mileage : '22 kmpl',
      engine_Displ : '1197 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : 'NA',
      power_Windows : 'N',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'N',
      fog_Lamps : 'N',  
      origin:'India',
      img_url:'images/suzuki_swift.jpg'  
  },
  {
      make:'ford',
      model: 'eco sport',
      mileage : '17 kmpl',
      engine_Displ : '1497 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '352-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : "Y",
      central_Locking : "Y",
      fog_Lamps : "N",
      origin:'India',
      img_url:'images/ford_ecosport.jpg'   
  },
  {
      make:'ford',
      model: 'figo',
      mileage : '25.83 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '257-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/ford_figo.jpg'
  },
  {
      make:'ford',
      model:'aspire',
      mileage : '25.83 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '359-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/ford_aspire.jpg'
  },
  {
      make:'honda',
      model: 'WRV',
      mileage : '17.5 kmpl',
      engine_Displ: '1199 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '363 Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'N',
      origin:'India',
      img_url:'images/honda_wrv.jpg'  
  },
  {
      make:'honda',
      model: 'city',
      mileage : '17.4 kmpl',
      engine_Displ : '1497 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '510-Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'front',
      origin:'India',
      img_url:'images/honda_city.jpg'  
  },
    {
      make:'honda',
      model: 'accord',
      mileage : '17.4 kmpl',
      engine_Displ : '1997 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '510-Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'N',
      origin:'India',
      img_url:'images/honda_accord.jpg'   
  },
      ];

    function  displayCars(data) {
      for(var i=0;i<data.length;i++){
    document.getElementById("DisplayCars").innerHTML+='<div style="width:350px;margin:30px 5px 10px 20px;float:left;height:690px;border:1px solid #9d0028;color:#850026">'+
        '<img style="height:200px; width:100%;alt:Developer;border:1px solid #9d0028;margin-bottom:20px; " src="'+data[i].img_url+'">' +
        '<h5 style="margin:15px 10px 15px 10px;">Make: '+data[i].make+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Model: '+data[i].model+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Mileage: '+data[i].mileage+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Engine Displ: '+data[i].engine_Displ+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Transmission: '+data[i].transmission+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Fuel Type: '+data[i].fuel_Type+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">boot Space: '+data[i].boot_Space+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Power Windows: '+data[i].power_Windows+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Airbags: '+data[i].airbags+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">ABS: '+data[i].abs+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Central Locking: '+data[i].central_Locking+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Fog Lamps: '+data[i].fog_Lamps+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Origin: '+data[i].origin+'</h5>'+
       
       	'</div>'
      }
}

displayCars(carsData);
  function searchCars(){
  	var input1= document.getElementById('textInput1').value;
  	var filteredCars=[];
  	for(var i=0; i<carsData.length; i++){
  		if(input1 == carsData[i].make || input1 == carsData[i].model){
  			filteredCars.push(carsData[i]);
  		}
	  }

	  document.getElementById('DisplayCars').innerHTML = '';
	  if(filteredCars.length == 0){
		  document.getElementById('DisplayCars').innerHTML = '<h1>No items to Display</h1>';
	  }else{
		  displayCars(filteredCars);
	  }
}

function submitData(){
  var newCarData = {};

  newCarData.make = document.getElementById('make').value || '';
  newCarData.model= document.getElementById('model').value || '';
  newCarData.mileage= document.getElementById('mileage').value || '';
  newCarData.engine_Displ= document.getElementById('EngineDispl').value || '';
  newCarData.transmission= document.getElementById('Transmission').value || '';
  newCarData.fuel_Type= document.getElementById('FuelType').value || '';
  newCarData.boot_Space= document.getElementById('BootSpace').value || '';
  newCarData.power_Windows= document.getElementById('PowerWindows').value || '';
  newCarData.airbags= document.getElementById('Airbags').value || '';
  newCarData.abs= document.getElementById('ABS').value || '';
  newCarData.central_Locking= document.getElementById('CentralLocking').value || '';
  newCarData.fog_Lamps= document.getElementById('FogLamps').value || '';
  newCarData.origin= document.getElementById('Origin').value || '';
  newCarData.img_url = 'images/carlogo1.png';

  if( newCarData.make != '' && 
      newCarData.model != '' && 
      newCarData.mileage != '' && 
      newCarData.engine_Displ !='' && 
      newCarData.transmission != '' && 
      newCarData.fuel_Type != '' && 
      newCarData.boot_Space != '' && 
      newCarData.Power_Windows != '' && 
      newCarData.airbags != '' && 
      newCarData.abs != '' && 
      newCarData.central_Locking != '' && 
      newCarData.fog_Lamps != '' && 
      newCarData.origin != '' 
    ){

      carsData.push(newCarData);
      displayCars(carsData);


      document.getElementById('make').value="";
      document.getElementById('model').value="";
      document.getElementById('mileage').value="";
      document.getElementById('EngineDispl').value="";
      document.getElementById('Transmission').value="";
      document.getElementById('FuelType').value="";
      document.getElementById('BootSpace').value="";
      document.getElementById('PowerWindows').value="";
      document.getElementById('Airbags').value="";
      document.getElementById('ABS').value="";
      document.getElementById('CentralLocking').value="";
      document.getElementById('FogLamps').value="";
      document.getElementById('Origin').value="";

      alert('new car data has been added successfully..!');
  }else{

    alert('Error: please enter valid data in all fields..');
  }
}
function insertData(){
  window.open("https://saitirumala.github.io/Search_cars/InsertingCars.html");
}
        
      