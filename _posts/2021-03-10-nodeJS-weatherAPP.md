---
title : "nodeJS-weatherAPP"
excerpt : "node.js"

toc: true
toc_sticky: true

categories:
  - Blog
tags:
  - [Blog, node.js, callbackChaining, API, toy project, Asynchronous ]
last_modified_at: 2021-03-10T08:06:00-05:00
---

```js

///app.js
const request = require('request');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
// const yargs = require('yargs')
const address = process.argv[2];
if(!address){
    console.log('need type location')
}
else{
    geocode(address,(error, {latitude,longitude,placename}={})=>{
        if(error) return console.log('Error:'+error);
    
        forecast(latitude, longitude, (error, {temperature,feelsLike}) => {
            if(error) return console.log('Error:', error)
            
            console.log(placename)
            console.log(`temperature: ${temperature}, feelsLike: ${feelsLike}`);
    
        })
    })
}


///forecast.js
const request = require('request');


const forecast = (latitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=${}&query=${latitude},${longitude}`;
    request({url, json:true},(error,{body})=>{
        if(error){
            callback('unable to connect weather services',undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            callback(undefined,{
                'temperature' : body.current.temperature,
                'feelsLike' : body.current.feelslike,
            })
        }
    })
}

module.exports = forecast

///geocode.js
const request = require('request');

const geocode = (address,callback) =>{
    const token = `y`
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`
    request({url:url, json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to location servicies',undefined);
        }
        else if(body.message){
            callback(body.message,undefined)
        }else{
            callback(undefined,{
                'latitude': body.features[0].center[1],
                'longitude': body.features[0].center[0],
                'placename': body.features[0].place_name
            })
        }
    })
}
module.exports = geocode


```