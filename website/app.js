// Global Variables 
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// API key
let apiKey = '&units=metric&appid=5fc069c6cbb6add77842ae6227652287';
 
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener on generate button
document.getElementById('generate').addEventListener('click', performAction);

// Function to get web api data
async function performAction(e){  
  let zip = document.getElementById('zip').value;
    const data = await getWeather(baseURL,zip, apiKey)
    console.log(data);
    // add data + update UI
    await  postData('/addWeather', {date:data.date, temp:data.temp, content:data.content} );
    updateUI();
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

// Update UI
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;

  }catch(error){
    console.log("error", error);
  }
}
