---
title : "nodeJS-LocalServer"
excerpt : "node.js"

toc: true
toc_sticky: true

categories:
  - Blog
tags:
  - [Blog, node.js, toy project, partialHTML, localServer ]
last_modified_at: 2021-03-11T08:06:00-05:00
---

#### 사용 모듈

1. npm express : for server
2. npm handlebars => npm hbs : for partial HTML file

## LocalHost


nodemon src/app.js -e js,hbs

```js
//app.js
//localhost:3000


const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//path : 사용할 디렉토리 저장
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebar
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather',
        name : 'YH'
    })
})

//localhost:3000/help
app.get('/help',(req,res)=>{
    res.render('Help',{
        message:'This is Help page',
        content:'',
        title:"this is HELP PAGE",
        name:'YH'
    })
})

//localhost:3000/about
app.get('/about',(req,res)=>{
    res.render('About',{
        content : "this is about....",
        title:"ABOUT",
        name:"YH"

    })
})

//localhost:3000/weather
app.get('/weather',(req,res)=>{
    res.send(`today's weather is.... `)
})


//localhost:3000/help/'anything'
app.get('/help/*',(req,res)=>{
    res.render('Help',{
        title:'not variable path',
        name:'YH'
    })
})


//localhost:3000/'anything'
app.get('*',(req,res)=>{//"*" 매칭되지 않은 모든 것에 대해서
    res.render('404',{
        content:'404 NOT FOUND',
        title:'ERROR 404',
        name:'YH'
    })
})


app.listen(3000,()=>{
    console.log('Server in up on port 3000.')

})

```


## partial HTML

![img](/assets/images/localServer/partial.jpg) 

* 항상 사용되는 HTML header오 footer를 따로 저장해두고 불러와서 사용할 수 있다. header, footer 등.
* help page를 예시로 들면 

```js
//from app.js//

app.get('/help',(req,res)=>{
    res.render('Help',{
        content:'',
        title:"this is HELP PAGE",
        name:'YH'
    })
})
//따로 지정해둔 제목(title의 value)을 다음과 같이 헤더에 넘겨줄 수 있다.


//header.hbs

<header>
    <h1>{{title}}</h1>
    <div>
        <a href="/">Weather</a>
        <a href="/About">About</a>
        <a href="/Help">HELP</a>
    </div>
</header>

```

### output

![img](/assets/images/localServer/help.jpg) 
