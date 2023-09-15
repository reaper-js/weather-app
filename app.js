const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const address = process.argv[2]


geocode(address, (error, data) => {
    
    if(!address){
        return console.log('Please provide the address')
    }
    if(error){
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      })

})



// forecast(75.7088, -44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })