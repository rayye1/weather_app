let form = document.getElementById('form')
function formSubmit(e) {
    locationInfo(document.getElementById('location').value)
    e.preventDefault();
}
form.addEventListener('submit', formSubmit)

async function locationInfo(location) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8fe71ca68a3b6fe511ff25541f586e61`,
             {
               mode: 'cors',
              }
             )
        if (response.status == 400) {
            console.log('oops')
            return
        }
         let response_object = await response.json()
         console.log(response_object)
         handleData(response_object)
    }   
    catch (error) {
        console.log('oops')
    }
    
    
}

function handleData(weatherInfo) {
    let city = document.getElementById('city')
    let temp = document.getElementById('temp')
    city.textContent = weatherInfo.name
    temp.textContent = `${((weatherInfo.main.temp - 273.15) * 9/5 + 32).toFixed(2)} Farenheit`
}