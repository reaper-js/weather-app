const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')



geocode('Alwar', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})



forecast(27.564631,76.613185, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })