const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYm9ic2xlZCIsImEiOiJjbG1rYXN0amYwMHV1Mmp0YmhlOXh4d2JhIn0.0bb-6GECLjKjOxMSNLScng&limit=1'

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to location services', undefined)
        }else if (response.body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode

