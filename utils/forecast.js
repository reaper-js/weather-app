const request = require('request')

const forecast = (lati, longi, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f94d5ce579ecfc906b47cf0b322158bc&query='+ lati+','+ longi +'&units=m'
    
    request({url: url, json: true}, (error, response)=> {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(response.body.error){
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined,'It is '+ response.body.current.weather_descriptions[0] + '. The temperature is '+ response.body.current.temperature + ' degrees. And it feels like ' + response.body.current.feelslike + ' out there.')
        }
    })

}

module.exports = forecast