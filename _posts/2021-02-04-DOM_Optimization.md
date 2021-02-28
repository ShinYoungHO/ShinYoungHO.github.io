---
title : "DOM 성능최적화 관련"
excerpt : ""

categories:
  - Blog
tags:
  - [Blog, DOM, optimization]
last_modified_at: 2021-02-27T08:06:00-05:00
---

성능 최적화
===
Keyword 
1. createDocumentFragment
2. reflow : calculate
3. repaint : display
4. HTML templating
5. templateTag
6. removeChild() 
7. $0.dataset.user


***
***
* 렌더링 과정에서 Javascript로 인한 기능이 보여지기 이전에 눈속임으로 뷰단을 이미지로 보여준다 ㄷㄷ
## HTML Templating

* HTML templating은 반복적인 HTML 태그 부분을 template로 만들어두고, 서버에서 온 데이터(주로 JSON)와 결합하여 화면에 추가하는 작업을 말한다.[Link](https://enai.tistory.com/8)

## TemplateTag.[Link](https://www.html5rocks.com/en/tutorials/webcomponents/template/)

* 탬플릿이 사용되기 전에 스크립트는 실행되지 않고, 이미지/오디오 재생 x
* queryselector 로 하위노드 접근 불가.
* 

## document.createDocumentFragment()


* 연산 수행시 복잡한 DOM tree 자료구조에 의해 성능하락 -> 객체 접근루트의 최소화 필요. // 최적화돼있긴 하지만 DOM크기가 커질 경우에 필요.
* 가상의 노드 객체로서, 메모리상에서만 존재
* 객체를 불러와서 임시의 공간에 담기 위한 용도. 불러온 객체는 공간에 담으면 지워진다고 한다.[Link](https://iamawebdeveloper.tistory.com/64)
* 자바스크립트로 document tag 조작시 연산 수행마다 찾아가는 과정을 거치지 않기 위해, 한번 불러와서 반복문으로 처리한 뒤 한번에 보내는 방식을 의미하는 듯 하다.
* 크롬 개발자 도구를 통해 랜더링 과정 확인(performance)
* 이를 통해 page reflow 방지가능. 
>>>>***


```js
var fragment = document.createDocumentFragment();
let fragment = new DocumentFragment();
```
## reflow

* flow 가 다시 반복된다.
* display 그리고 width, height, position 계산 관련.

#### [reflow 발생 요소](https://yoonjaepark.github.io/2018-12-25/repaint-reflow)

1. 노드의 추가 또는 제거
2. 요소의 위치 변경
3. 요소의 크기 변경 (margin, padding, border, width, height…)
4. 폰트 변경과(텍스트 내용) 이미지 크기 변경 (크기가 다른 이미지로 변경 시)
5. 페이지 초기 랜더링최초 Layout 과정
6. 윈도우 리사이징

####[reflow 방지 추가 guide line](https://developers.google.com/speed/docs/insights/browser-reflow?hl=ko)

1. 불필요한 DOM 심도를 줄입니다. DOM 트리의 수준 하나를 변경하면 트리의 모든 수준, 즉 위로는 루트, 아래로는 수정된 노드의 하위 요소에 이르기까지 모두 변경될 수 있습니다. 이에 따라 리플로우를 실행하는 데 더 많은 시간이 걸리게 됩니다.
2. CSS 규칙을 최소화하고 사용되지 않는 CSS 규칙을 삭제합니다.
3. 애니메이션과 같이 복잡한 렌더링 변경이 필요한 경우 흐름 밖에서 변경합니다. 변경할 때는 절대 위치나 고정 위치를 사용합니다.
4. 불필요하고 복잡한 CSS 선택기, 특히 하위 요소 선택기는 사용하지 않습니다. 이 경우 선택기를 일치시키기 위해 더 높은 CPU 처리량이 필요합니다.
***

## removeChild

* 메모리에 해당 노드는 그대로 존재, 부모 노드와의 부모-자식관계를 끊어 DOM 트리에서 해제한 후 최종적으로해당 노드의 참조를 반환. 변수에 저장하지 않으면 삭제된다.
* 



