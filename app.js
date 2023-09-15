const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f94d5ce579ecfc906b47cf0b322158bc&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(data.current)
    console.log('it is currently ' + response.body.current.temperature + ' degrees out there. It feels like ' + response.body.current.feelslike + 'degrees out.')
})


const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYm9ic2xlZCIsImEiOiJjbG1rYXN0amYwMHV1Mmp0YmhlOXh4d2JhIn0.0bb-6GECLjKjOxMSNLScng&limit=1'

request({url: url1, json: true}, (error, response) => {
    //console.log(response.body)
    const coords = response.body.features.center
    console.log('Lat = ' + coords[0] + ' Long = ' + coords[1])
})