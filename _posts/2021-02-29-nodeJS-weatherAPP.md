---
title : "note_App"
excerpt : "node.js"

categories:
  - Blog
tags:
  - [Blog, toy project, node.js,  Asynchronous]
last_modified_at: 2021-02-29T08:06:00-05:00
---

#### Before starts 
[link](https://ljtaek2.tistory.com/142)

```js
console.log('starting')

setTimeout(()=>{
    console.log('after 2second')
},2000)

setTimeout(()=>{
    console.log('0 second timer')
},0)

console.log('Stopping')
/*starting
  Stopping
  0 second timer
  after 2second*/
```

* 위의 코드에서 setTimeout이 만약 동기적이라면 V8엔진의 단일스레드 및 LIFO 특성상 setTimeout 이 끝날때까지 2초를 기다려야 한다.
* 이를 예방하기 위해 시간이 걸리는 task를 비동기 방식으로 처리를 해서 프로그램이 돌아가는데 지장이 없도록 해줄 수 있다.
* 비동기방식은 콜스택에서 벗어나 다른 쓰레드로 옮겨지고 거기서 실행되므로 싱글스레드 방식인 Javascript에 영향을 최소화 할 수 있다.
* 다른 쓰레드로 들어간 비동기 함수가 끝나면 콜백큐에 쌓이고 콜스택이 모두 비워지면 이벤트 루프가 이를 감지?하고 FIFO방식으로 콜스택에 넣어준다.

---

참조 API : https://weatherstack.com/<br>

