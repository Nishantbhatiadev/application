import React, { useEffect, useState } from 'react'
import axios from "axios"

const Wheather = () => {

  const [data, setData]=useState([])
  const [cityName , setCityName]=useState("")

  function getWeatherapi(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f4d27cb4ab11b5a692418793974746f`;

    axios.get(apiurl).then((res)=>{
       // console.log(res.data)
        setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  
  
  }

  function handleSearch(){
      getWeatherapi(cityName) 
    // console.log(cityName)
   
  
  }
// console.log(data)
  useEffect(()=>{
      getWeatherapi("jaipur")
  },[])
console.log(data)
  return (
    <>

       <div class="Container">
        <div>
            <input type="text" placeholder="Search .." class="form-control mt-3"  id="aa" value={cityName} onChange={(e)=>{setCityName(e.target.value)}}/>

            <button type="submit" class="btn btn-primary mt-0" id="btn-1" onClick={handleSearch}>Search</button>

        
        </div>

        <div id="ipg">
           <img src="https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg" alt="test" />
        </div>

        <div>
            <h1 id="tt"> MY - Weather  </h1>

            <h3 id='dd'> MY - City : {data?.name} </h3>
            <h3 id="temp"> MY - Temp : {((data?.main?.temp)-273.15).toFixed(2)}</h3>
          
        </div>
        
       
    </div>
    </>
  )
}

export default Wheather
