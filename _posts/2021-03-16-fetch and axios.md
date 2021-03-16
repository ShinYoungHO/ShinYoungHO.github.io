---
title : "비동기 프로그래밍2"
excerpt : "fetch, axios, eventLoop "

toc: true
toc_sticky: true

categories:
  - Blog
tags:
  - [Blog, async, promise, axios ]
last_modified_at: 2021-03-16T08:06:00-05:00
---

[관련 링크](https://velog.io/@zofqofhtltm8015/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%ED%95%B4%EB%B3%B4%EA%B8%B0)

### fetch

```js
// with fetch - then
function getNewsAndWeather() {
  return fetch(newsURL)
  .then(res=>{
    return res.json()
  })
  .then(newsJson=>{
    return fetch(weatherURL)
    .then(res=>{
      return res.json()
    })
    .then(weatherJson=>{
      return {
        news : newsJson.data,
        weather : weatherJson
      }
    })
    
  })
  .catch(err=>{
    console.log(err)
  })
}


//with async await
async function getNewsAndWeatherAsync() {
  const news = await fetch(newsURL).then(res=>res.json()).then(res=>res.data);
  const weather = await fetch(weatherURL).then(res=>res.json());

  console.log(news,weather)
  return {
    news,
    weather,
  }
}

```


### axios

```js
// with then
const axios = require('axios').default;
const getNewsAndWeather = (url1, url2) => {
  return axios.get(url1)
    .then(url1JSON=>{
      return axios.get(url2)
        .then((url2JSON)=>{
          return [url1JSON.data,url2JSON.data]
        })
    })
    .catch(e=>{
      console.error(e);
    })
}

// with promise All
const { default: axios } = require("axios");
const getNewsAndWeatherAll = (url1, url2) =>{
  function getData (url){
    return axios(url).then((res)=>res.data)
  }
  return Promise.all([getData(url1),getData(url2)])
    .then(([json1, json2])=>{
      return {
        news:json1.data,
        weather:json2
      }
    })
    .catch(e=>{
      console.error(e)
    })
}

// with async await
const axios = require('axios')
const getNewsAndWeatherAsync = async (url1, url2) => {
  try{
    const json1 = await axios(url1);
    const json2 = await axios(url2);
    // console.log(json1.data)
    return {
      news:json1.data.data,
      weather:json2.data
    }
  }catch(e){
    console.log(e)
    // do something
  }
}
```
