node.js modules의 사용[](https://slides.com/codestates/deck-33/)
    node.js의 내장 http 모듈을 사용할 수 있다. (mini node server)
    node.js의 내장 fs 모듈을 사용할 수 있다. (optional) (chatterbox server)
    http 모듈 사용시에 서버에 CORS 설정을 할 수 있다. (mini node server)
    CommonJS를 이용한 모듈 내보내기/불러오기를 할 수 있다. (chatterbox server)

nodejs는 자바스크립트를 기계어로 컴파일해주는 엔진으로 빌드돼있는 자바스크립트가 구동중인 환경 : native 머신이 알아들을 수 있는 코드로 (컴파일)바꿔주는 것이 nodejs다.
nodejs는 이벤트 기반 논블로킹 I/O모델(input을 주면 output를 반환하는 모델) : 유저의 클릭이나 네트워크에 리소스를 요청하는 이벤트가 논블로킹으로 이루어지는 IO모델

dev-dependency = > npm install something --save-dev
dependency : 프로덕션과관계있는 라이브러리 npm install something --save 해야함.


HTTP (공통) rfc2616 => 바이블.
    HTTP 요청/응답을 브라우저를 통해 확인할 수 있고, 해당 내용을 읽을 수 있다.
    HTTP 다양한 요청 방식과, 응답 코드에 대해 이해할 수 있다.
주소를 입력하면 DNS서버에 url의 ip를 물어보고, DNS 서버가 ip를 돌려줌. 
라우팅: 주소탐색규칙 에 따라 정적파일을 받아오거나 비즈니스로직을 실행할 수 있음.






라우팅과 API
    라우팅(조건에 따른 분기)을 이해하고, 이를 서버 코드에서 구현할 수 있다. (mini node server)
클라  이언트가 사용할 수 있도록, 서버 API 문서를 직접 작성할 수 있다. (chatterbox server)
Express 라이브러리 맛보기 (refactor express)
    express 라이브러리가 어떤 작업을 단순하게 만드는지 이해할 수 있다.
    미들웨어의 개념을 이해할 수 있다.

createServer
writeHead
end
listen
경로에 따른 분기가 메소드와 url로 분기, 
http transaction해부

-CORS 서버가 허용한 범위 내에서 CORS 가능



서버 개발과 디버깅 (chatterbox server)
    서버 개발을 돕는 다양한 툴들을 익힐 수 있다.
        nodemon의 사용
        inspect 옵션을 이용한 디버깅


