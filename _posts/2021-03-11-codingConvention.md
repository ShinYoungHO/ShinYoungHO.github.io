---
title : "코딩컨벤션"
excerpt : "naver, Airbnb... 주기적으로 추가 예정"

toc: true
toc_sticky: true

categories:
  - Blog
tags:
  - [Blog, 코딩패턴 ]
last_modified_at: 2021-03-11T08:06:00-05:00
---

## eslint-config-naver

### 몰랐던 코딩 패턴 정리

1. computed property names : 객체의 모든 속성을 한 곳에서 정의

```js
function getKey(k) {
    return `a key named ${k}`;
}
// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
// not
const obj = {
  id: 5
}
obj[getKey('enabled')]= true;

```

2. 단축구문 : 속성의 단축구문은 객체 선언의 시작 부분에 모으자

```js

let Nick = 100
let Json = 90

const obj = {
    Nick,
    Json,
    Luke:85,
}

```

3. 따옴표 속성 : 유효하지 않은 식별자에만 따옴표 속성을 사용. 구문 하이라이팅이 잘 되고, 많은 자바스크립트 엔진이 더 쉽게 최적화 

```js
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};

```

4. 얕은 복사 - 전개연산자

```js

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

```

5. 배열에 직접 값을 할당하지 말고 Array.push

6. 배열이 여러줄에 걸쳐있다면 배열의 시작과 끝은 개행

7. 따옴표는 쌍따옴표 사용, 이스케이프한 경우는 예외로 홑따옴표를 사용가능//??

8. 문자열이 100자가 넘으면 + 연산자로 나눠준다.

9. 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 template strings를 이용 // `${}`

10. 즉시 실행함수는 함수를 괄호로 감싼다. 

```js
( function(){console.log('a')} )() // good
( function(){console.log('a')}() ) // not

```

11. 






***

6. 전개연산자 & Array.from  => Airbnb

|전개연산자|Array.from|
|---|---|
|배열복사|array-like 객체 변환|
|순회 가능한 객체|매핑(중간배열 생성방지)|

* 비구조화 할당

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}


```

* 여러값을 사용할 경우 객체로 비구조화

```js

// bad
function processInput(input) {
  // 
  return [left, right, top, bottom];
}

const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // 
  return { left, right, top, bottom };
}

// 필요한 데이터만 선택 가능
const { left, top } = processInput(input);


```



