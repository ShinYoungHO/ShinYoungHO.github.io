on => addeventlistener와 비슷.

라우팅 : url을 통해 분기점을 나누는 것을 라우팅이라 함. ex) upper(), lower() 
라우팅 기준 : 메소드, url 


on : 이벤트 리스너랑 비슷. 
데이터가 올때마다 얘를 실행해라 => 버퍼단위로 들어온다?
스트림 : 스트림이라는 개울가에? 버퍼가 조각조각 전달.
버퍼 : 데이터의 조각 : 16진수
버퍼=chunk
버퍼는 파일의 끝이라는 표식이 있다?

req가 끝났을 때 얘를 실행해라

```js
req.on('data', (chunk) => {
    body.push(chunk);//데이터 조각이 올때마다 body에 푸쉬
  });
  req.on('end',()=>{ // 다 도착하면
    body = Buffer.concat(body).toString();// 합쳐서 문자화
    
    if(url==='/') {
      console.log(getArr.push(body));
      console.log('a')
      const obj = {
        id:getArr.length-1
      }
      res.end(JSON.stringify(obj))
    } //
    
  })


```


크로스오리진

포트 번호가 다르다. 프로토콜 도메인 포트번호 하나라도 다르면 origin이 다르다.

프리플라이트 
투티어아키텍쳐에서 서버가 여러 클라이언트를 상대할 수 있는데, 내가 신뢰할 수 있는 origin에만 리소스를 허용하기 위해 서버상에서 정책을 마련할 수 있다. => CORS  서로 다른 오리진에 있는 클라이언트에 대해서 리소스를 허용할 것인지에 대한 정책.


GET, POSTsms Allow-Method 하지 않아도 된다?
Max-Age: 해당 초마다 보낼 수 있다.

// 근데 http 요청과 응답은 stateless 해야 하는거 아닌가요?? 이전 통신을 기억해도 되는건가유..? 
HTTP 요청 자체는 stateless. 
CORS는 fetch API에 속해있는 것.

