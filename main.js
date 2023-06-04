




var city = document.getElementById("city");
    var temps = document.querySelector('.temps');
    var imgicon = document.getElementById("img");
    var desc = document.querySelector('.desc');
document.addEventListener("DOMContentLoaded", () => {

    const success = (position) => {
        console.log(position);
       const lat = position.coords.latitude;
       const long = position.coords.longitude;
       fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid=6ced3a8a034fba635d707d65dd05764a')
    
      .then(response => response.json())
      .then( data => {
          var namecity = data['name'];
          var tempValue = data['main']['temp'];
          var descValue = data['weather']['0']['description'];
          var imgValue = data['weather']['0']['icon'];

          city.innerHTML = namecity;
          temps.innerHTML = tempValue+" °C";
          desc.innerHTML = descValue;
         imgicon.setAttribute("src","http://openweathermap.org/img/w/"+imgValue+".png");
      });
     
    }
      
    
      
      const error = (error) => {
        console.log(error);
      }

      navigator.geolocation.getCurrentPosition(success, error);

      
      

});
    
   
    
