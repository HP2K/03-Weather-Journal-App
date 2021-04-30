// Global Variables 
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// API key
let apiKey = '&units=metric&appid=5fc069c6cbb6add77842ae6227652287';
 
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event Listener on generate button
document.getElementById('generate').addEventListener('click', performAction);


//Function to get web api data
function performAction(e){  
  let zip = document.getElementById('zip').value;
    getWeather(baseURL,zip, apiKey)
  }
const getWeather = async (baseURL, zip, apiKey) => {
    
    const response = await fetch (baseURL+zip+apiKey)
    try{
       const data = await response.json();
       return data;
    }catch(error){
       console.log("error", error);
    }
  }

  // Post data
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