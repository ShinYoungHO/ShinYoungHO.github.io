OAuth
깃헙, 구글과 같은 보안된 자신들의 리소스에 대해서 다른 웹사이트나 애플리케션에 접근권한을 부여할 수 있는 개방형 표준 프로토콜중의 한 종류

## 유저가 소셜로그인을 시도하는 경우

1) 유저가 앱에 로그인 요청을 보낸다
2) 앱은 소셜에 유저 데이터에 대한 접근 권한을 요청한다.
3) 소셜은 유저에게 앱에 접근권한을 줘도 되는지 확인요청을 보내고 확인을 누르게되면 앱에 액세스 토큰을 부여해준다.
4) 액세스토큰을 가지고 유저데이터를 요청한다.
5) 소셜은 액세스토큰을 확인하고 앱에 데이터를 전달해준다.




Resource Owner : 액세스 중인 리소스의 유저입니다. 김코딩의 구글 계정을 이용하여 App에 로그인을 할 경우, 이 때 Resource owner은 김코딩이 됩니다.

Client : Resource owner를 대신하여 보호된 리소스에 액세스하는 응용프로그램입니다. 클라이언트는 서버, 데스크탑, 모바일 또는 기타 장치에서 호스팅할 수 있습니다.

Resource server : client의 요청을 수락하고 응답할 수 있는 서버입니다.

Authorization server : Resource server가 액세스 토큰을 발급받는 서버입니다. 즉 클라이언트 및 리소스 소유자를 성공적으로 인증한 후 액세스 토큰을 발급하는 서버를 말합니다.

Authorization grant : 클라이언트가 액세스 토큰을 얻을 때 사용하는 자격 증명의 유형입니다.

Authorization code : access token을 발급받기 전에 필요한 code 입니다. client ID로 이 code를 받아온 후, client secret과 code를 이용해 Access token 을 받아옵니다.

Access token : 보호된 리소스에 액세스하는 데 사용되는 credentials입니다. Authorization code와 client secret을 이용해 받아온 이 Access token으로 이제 resource server에 접근을 할 수 있습니다.

Scope : scope는 토큰의 권한을 정의합니다. 주어진 액세스 토큰을 사용하여 액세스할 수 있는 리소스의 범위입니다.


Resource server : 클라이언트의 요청을 수락하고 응답할 수 있는 서버
Authorization server : 리소스서버가 액세스토큰을 발급할때 인증권한을 주는 서버
scope : 범위제한 ex)image



## grant type : 클라이언트가 액세스토큰을 얻는 방법.

* Authorization Code Grant type
* Refresh Token Grant Type
* Implicit Grant Type
* Client Credentials Grant Type
* Resource Owner Credentials Grant Type


1. Authorization Code Grant type
액세스 토큰을 받아오기 위해서 먼저 Authorization code를 받아 액세스 토큰과 교환하는 방법  
=> 보안성 강화 : Client에서는 시크릿키를 공유하지 않고 클라이언트 아이디만 이용해서 받아올 수 있는 authorization code만 받아오고 Server에서 Access Token 요청.

order
1) 유저가 앱클라이언트에 앱 서버의 내용을 열람하도록 요청 : resource owner가 client로 접근
2) 클라이언트는 올바른 유저인지 확인을 위해 구글에 사용자 정보요청을 보냄 : Client가 Resource Owner를 Authorization Server로 리다이렉트
3) 구글은 클라이언트가 요청했던 정보에 대해서 유저에게 액세스 권한 부여를 요청 및 유저는 이를 확인 및 응답: resource owner의 액세스 권한 부여 요청
4) 수락이 되면 클라리언트에 authorization code를 부여해줌 : Authorization code제공
5) 데이터가 필요할 때 authorization code를 들고 구글에 요청 : 
6) 올바른 authorization code일 경우 구글은 액세스 토큰을 전달해줌 : Authoirzation code를 Access Token으로 교환
7) 클라이언트는 받아온 액세스 토큰을 가지고 앱 서버에 필요 데이터 요청 : Client는 Access Token을 통해 resource에 액세스
8) 서버는 액세스토큰을 확인하고 데이터를 보내줌



2. Refresh Token Grant Type
액세스 토큰의 유효기한이 1일이다. 어떻게 유지해야될까

1) 유저가 클라이언트에 데이터 요청
2) 액세스 토큰이 만료된 경우 리프레시 토큰으로 소셜에 새로운 액세스토큰 요청
3) 소셜은 새로운 액세스 토큰을 응답해주고
4) 이를 통해 리다이렉트 없이? 바로 데이터에 액세스


