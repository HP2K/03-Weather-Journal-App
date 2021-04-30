// Global Variables 
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// API key
let apiKey = '&units=metric&appid=5fc069c6cbb6add77842ae6227652287';
 
document.getElementById('generate').addEventListener('click', performAction)

//Function to get web api data
const getWeather = async (baseURL, zip, key) => {
    
    const response = await fetch (baseURL+zip+key)
    try{
       const data = await response.json();
       return data;
    }catch(error){
       console.log("error", error);
    }
  }


  // Post
 const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
    try {
    const newData = await response.json();
    return newData
    }catch(error) {
    console.log("error", error);
  }
}





// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

