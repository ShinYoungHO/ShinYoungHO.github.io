---
title : "this, class, instance"
excerpt : ""

categories:
  - Blog
tags:
  - [Blog, this, class, instance]
last_modified_at: 2021-02-26T08:06:00-05:00
---

## Execution Context

#### 실행 컨텍스트?


1.  실행 가능한 코드가 실행되기 위해 필요한 환경 
2. LIFO 구조로 콜스택과 비슷해 보이는데 알아보니 콜스택은 Execution Context를 저장하는 자료구조라고 합니다. 
3. 전역에서 함수를 선언하면 Global Execution context의 Variable Object(VO 변수 객체) 에 저장되고 엔진은 이를 참조합니다.


#### **실행 컨택스트 생성과정**

1. Create Phase 생성단계
2. Execution Phase 실행단계 



##### Create Phase

* global Object 생성
* this 객체 생성
* 변수, 함수를 위한 메모리를 준비
* 변수엔(var의 경우) undefined, 함수는 실제로 할당

##### Execution Phase

* argument 객체 생성
* this 객체 생성
* 변수, 함수를 위한 메모리를 준비
* 변수엔(var의 경우) undefined, 함수는 실제로 할당

[Create Phase & Execution Phase 둘다 비슷한데 왜 이렇게 나눠놨을까?](https://dailyworker.github.io/fundamental-JS-ES6/)
 - 제가 아직 많이 부족함을 느끼고 갑니다...


***

## this

#### 함수 호출 방식과 this

1. 함수 호출 : this는 전역객체
2. 메소드 호출 : this는 메소드를 소유한 객체
3. 생성자 함수 호출 : this는 생성된 인스턴스
4. apply/call/bind 호출 : 첫번째 인자가 this


```js
const foo = {
    foo : '아직 쉽습니다.',
    innerFoo(){
       console.log(this.foo);
    },
}

foo.innerFoo()//'아직 쉽습니다.' 
```

* 실행시 온점 왼쪽 (foo) 가 부모객체입니다.

```js
var foo = {
    foo : 'foo',
    innerFoo:()=>{
       console.log(this.foo);            
    },
}
foo.innerFoo()//{foo: "foo", innerFoo: ƒ}

```

* 화살표 함수이긴 하지만 var로 인해 window객체에 foo가 선언되어 this가 작동합니다.
* let으로 foo를 선언하면 undefined가 출력됩니다.

```js

module.exports.value = 1;
this.count = 12;
console.log(global.value);
console.log(this)
console.log(this === global)

/* undefined
{ value: 1, count: 12 }
false
 */

```
* 위와 비슷한 예로 module.export가 글로벌에 있을거라 생각했지만 CLI에서 출력해보니 글로벌에선 확인할 수 없었습니다.


```js
let foo = {
    foo : 'foo',
    innerFoo:()=>{
        const innerObj = {
            val : '작동 합니까?',
            deepFoo(){
                console.log(this.val);
            }
        }
        innerObj.deepFoo();
    },
}

foo.innerFoo()//'작동합니까?'

```

* 궁금했던 부분인데 foo.innerFoo()는 innerObj.deepFoo()를 실행하는 함수이며 결국 deepFoo()에서의 this는 innerObj가 됩니다.



```js
function innerFoo(){
    console.log(this.foo)
}


let foo = {
    foo : '밖에 있습니다.',
    innerFoo : innerFoo,
    toDeep : {
        foo : '안에 있습니다.',
        innerFoo :  innerFoo,
    },
}

foo.innerFoo()//'밖에 있습니다'
foo.toDeep.innerFoo()//'안에 있습니다'


```

* this는 위치보다는 실행 지점이 중요한 것 같습니다.



```js
var value = 1;

let obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();

```

* 메소드의 내부함수인 경우에 this는 전역객체에 바인딩된다고 합니다.[link](https://poiemaweb.com/js-this)
* 콜백함수의 경우에도 this는 전역객체에 바인딩됩니다.


***

## class, constructor, prototype


* class : 클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성 - 위키
* prototype : 모델의 청사진을 만들 때 쓰는 원형 객체(original form)
* constructor : 인스턴스가 초기화될 때 실행하는 생성자 함수


#### class

> [modern Javascript info](https://ko.javascript.info/class)<br>
>실무에선 사용자나 물건같이 동일한 종류의 객체를 여러 개 생성해야 하는 경우가 잦습니다. 이럴 때 'new' 연산자와 생성자 함수에서 배운 new function을 사용할 수 있습니다. 여기에 더하여 모던 자바스크립트에 도입된 클래스(class)라는 문법을 사용하면 객체 지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있습니다.


```js
class User {

  constructor(name,...args) {
    this.name = name;
    this.arr = args;
  }

  sayHi() {
    alert(this.name);
  }
  methode1()
  methode2()
  methode3()
//.....

}

let user = new User("John",1,2,3,4);
console.log(user) // User {name: "John", arr: Array(4)}


User.prototype.foo = function(){console.log('foo')}// prototype으로 추가할 수 있지만, 
user.foo() // 'foo'  

console.log(User)//User를 다시 찍어보면 메소드는 출력되지 않습니다.
//object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾기 때문이라고 합니다. [link](https://ko.javascript.info/prototype-inheritance)자세한 사항은 다음에..
/*class User {

  constructor(name,...args) {
    this.name = name;
    this.arr = args;
  }

  sayHi() {
    alert(this.name);
  }

}
*/

```
* constructor 가 객체를 새로 만들고 this.name = name을 수행하면 새로운 객체의 name 키에 전달인자로 받아온 name value를 할당합니다.
* 각 메소드들은 쉼표로 구분되지 않습니다.
* User는 함수이며, 형성된 user는 객체입니다.

