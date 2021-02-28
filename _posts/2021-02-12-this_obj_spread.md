---
title : "this, spread syntax"
excerpt : ""

categories:
  - Blog
tags:
  - [Blog, this, spreadSyntax]
last_modified_at: 2021-02-27T08:06:00-05:00
---



this, var-let, 객체와 주소 및 복사, 객체와 this, Spread Syntax 
===
##### [얕은복사-깊은복사1](https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a)//[얕은복사-깊은복사2](https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript)

***
This
===



***
```js
var apple = '독이 든 사과';//////////////////var
var home = {
  apple: '맛있는 사과',
  eatApple: eatAppleFn
}

function eatAppleFn() {	
  console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
}

// (1) 객체 method 호출
home.eatApple(); // 백설공주가 맛있는 사과를 먹습니다.
// (2) 함수 직접 호출
eatAppleFn(); // 백설공주가 독이 든 사과를 먹습니다.

///log.(1) 백설공주가 맛있는 사과를 먹습니다.
///log.(2) 백설공주가 독이 든 사과를 먹습니다.
```
***
```js
let apple = '독이 든 사과';/////////////////////var -> let
var home = {
  apple: '맛있는 사과',
  eatApple: eatAppleFn
}

function eatAppleFn() {	
  console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
}

// (1) 객체 method 호출
home.eatApple(); // 백설공주가 맛있는 사과를 먹습니다.
// (2) 함수 직접 호출
eatAppleFn(); // 백설공주가 독이 든 사과를 먹습니다.

///log.(1) 백설공주가 맛있는 사과를 먹습니다.
///log.(2) 백설공주가 undefined를 먹습니다.
```
***
* 함수 직접호출의 경우 this는 윈도우를 가리킵니다. var로 변수를 선언해주면 window객체에 apple:'독이 든 사과' 가 할당되며 현재 객체의 key"apple"에 저장되어 있는 '독이 든 사과' 를 불러오게 됩니다.
* 하지만 let으로 변수를 선언해주면 window객체에 key"apple"이 할당되지 않고, this로 불러오게 되면 undefined를 가져오게 됩니다.
* 



***
>>***
>>>>***

var-let
===
```js
let w1_l = 'let1';
var w1_v = 'var1';    ////////////////이 변수만 윈도우 객체에 할당된다.

function declar(){  /////////////////이 선언된 함수만 윈도우 객체에 할당된다.
var w2_v = 'var2_de';
let w2_l = "let2_de";
}

let experss = function(){////////////표현식 함수는 윈도우 객체에서 확인하지 못했다. 
var w2_v = 'var2_ex';
let w2_l = "let2_ex";
}

```
* 호이스팅이라는게 윈도우 객체에 할당된다는 것을 의미하나?
* [여기](https://sharryhong.github.io/2016/12/25/javascript-es6/)에 의하면 let은 전역변수가 아니며 var로 선언할 경우에 전역변수가 된다고한다.
* 또한 var로 선언하면 window객체의 프로퍼티가 되어 delete window.w1_v로 지울 수 없게된다. 하지만 let의 경우 전역변수가 아니므로 window.w1_l = 'let1'로 직접 window객체의 프로퍼티로 할당할 수 있지만 이때는 delete window.w1_l 로 지울 수 있게 된다.
```js
//window.w1_l = 'let1'; //"let1"
///delete window.w1_l ; //true
```



***
>>***
>>>>***

객체와 주소
===

```js
let obj1 = {a:1,b:2.c:3}
let obj2 = obj1

```
* obj1을 obj2에 할당하면 obj1의 주소가 obj2에 할당된다.
* 여기서 obj2를 수정하고 obj1을 불러오게 되면 다음과 같다.

```js
obj2.d=4;
console.log(obj1);
console.log(obj2);
//obj1 = {a: 1, b: 2, c: 3, d: 4}
//obj2 = {a: 1, b: 2, c: 3, d: 4}

```
객체 내에 객체가 존재하는 경우는 어떨까?

```js
let obj1 = {a:1,
            b:2,
            c:3,
            d:{
              l:1,
              m:2,
            }}
let obj2 = obj1
obj2.d.l=100;
console.log(obj1);
console.log(obj2);
//{a: 1, b: 2, c: 3, d: {…}}
// a: 1
// b: 2
// c: 3
// d: {l: 100, m: 2}
// __proto__: Object
// VM301:11 
// {a: 1, b: 2, c: 3, d: {…}}
// a: 1
// b: 2
// c: 3
// d: {l: 100, m: 2}
// __proto__: Object
```
* 객체내의 객체의 주소를 참조해서 값을 변경하므로 같은 주소를 가지는 obj1과 obj2는 동시에 변경되는 것으로 볼 수 있다.

### 객체 복사 
* 위와 같이 변수에 할당하지 않고 다음과 같은 방법을 사용한다.
* 중첩 구조의 복사는 JSON.stringify...등 여러방법들은 위의 링크를..

```js
let obj1 = {a:1,
  b:2,
  c:3,
  d:{
    l:1,
    m:2,
  }}
let obj2 =  Object.assign({},obj1)
obj2.d=100;
console.log(obj1);
console.log(obj2);
//obj1 = {a: 1, b: 2, c: 3, d: {…}}
//obj2 = {a: 1, b: 2, c: 3, d: 100}
```
* 아까와는 달리 d의 차이가 발생한다.
* 하지만, 아래의 경우를 보자. 

```js
let obj1 = {a:1,
  b:2,
  c:3,
  d:{
    l:1,
    m:2,
  }}
let obj2 =  Object.assign({},obj1)
obj2.d.l=100;
console.log(obj1);
console.log(obj2);
//obj1 = {a: 1, b: 2, c: 3, d: {…}}
//obj2 = {a: 1, b: 2, c: 3, d: {…}}
//console.log(obj1===obj2);     //false;
//console.log(obj1.d===obj2.d); //true

```
* 복사된 객체obj2 내의 객체를 수정했더니 obj1까지 변하는 것을 볼 수 있는데, d의 속성인 객체의 주소를 공유하는 것으로 생각된다. obj1과 obj2의 주소는 다를것으로 여겨져서 비교 연산자를 통해 확인해 봤더니 예상과 적중했다.


***
>>***
>>>>***

객체와 this
===
```js
let e = 4;
  let obj3 = {a:1,
    b:2,
    c:3,
    d:{
      l:function(){
        return 'l is l'+' but a is '+` ${this.a}`;
        },
      m(){
        return 'm is not l but e is '+` ${this.e}`;
        },
      }
    };

console.log(obj3.d.l());
console.log(obj3.d.m());
l is l but a is  undefined
m is not l but e is  undefined

```
* this.a에서 a는 l함수가 속한 객체의 상위객체에 존재한다. e도 마찬가지로 더 상위레벨에 있으며, 접근할 수 없기에 undefined를 리턴한다. d키에 속한 value를 obj3에 할당하면 어떨까? 결과는 다음과 같다.
```js
let e = 4;
  let obj3 = {a:1,
    b:2,
    c:3,
    l:function(){
        return 'l is l'+' but a is '+` ${this.a}`;
        },
    m(){
        return 'm is not l but e is '+` ${this.e}`;
        },    
    };
console.log(obj3.l());
console.log(obj3.m());
//l is l but a is  1
//m is not l but e is  undefined //역시 전역엔 도달하지 못한다.
///////////////////////////////////////////////////
var e = 4;
  let obj3 = {a:1,
    b:2,
    c:3,
    l:function(){
        return 'l is l'+' but a is '+` ${this.a}`;
        },
    m(){
        return 'm is not l but e is '+` ${this.e}`;
        },    
    }
console.log(obj3.l());
console.log(obj3.m());
//l is l but a is  1             // 해당 객체엔 this가 제역할을 하지만, 전역엔 도달하지 못한다.
//m is not l but e is  undefined // var를 이용해 윈도우 객체에 할당해도 마찬가지이다.

```

* 당연한 것이 'this'는 method를 호출되는 시점에 method를 호출한 객체를 가르키므로 해당 객체를 벗어나면 값이 없는것이나 마찬가지 이니깐 말이다.


***
>>***
>>>>***

Spread Syntax 업뎃예정 
===
```js
let arr1 = [1,2,3,4]

function notobj(...arg){
return arg;
}

function spread(){
return arguments;
}

const nobj = notobj(arr1);
const obj = spread(arr1);

console.log(nobj);///[Array(4)]
console.log(obj);//Arguments [Array(4), callee: ƒ, Symbol(Symbol.iterator): ƒ]


```
* arguments 를 통해 객체를 뽑아낼 수 있음.


```js
obj1 = {a:1,b:2,c:3};
let obj2 = {...obj1};
console.log(obj1===obj2);//false
```



































