let form = document.getElementById('form')
function formSubmit(e) {
    locationInfo(document.getElementById('location').value)
    e.preventDefault();
}
form.addEventListener('submit', formSubmit)

async function locationInfo(location) {
    /*try {
        /*const response = await fetch(
            'api.openweathermap.org/data/2.5/weather?q=${location}&appid=8fe71ca68a3b6fe511ff25541f586e61',
            {
              mode: 'cors',
            }
          )
        reponse = {
            city: 'new york',
            weather: 30
        }  
        console.log(response.json())
        response_object = response.json()
        handleData(response_object)
    }
    catch (error) {
        console.log('oops')
    }*/
    let response = {
        location: {
            name: 'new york'
        },
        current: {
            temp_f: 40
        }
    }  
    console.log(response)
    response_object = response
    handleData(response_object)
}

function handleData(weatherInfo) {
    let city = document.getElementById('city')
    let temp = document.getElementById('temp')
    city.textContent = weatherInfo.location.name
    temp.textContent = weatherInfo.current.temp_f
}