const express = require('express');
const router = express.Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]
  router.get('/',(req, res) => {
    res.render('places/index', {places})
  })
  
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  //Sending and Receiving Your Form Data
  router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

module.exports= router
  
  