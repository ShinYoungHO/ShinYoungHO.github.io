NoSQL Document Database : MongoDB 

자주 쓰이는 경우 
1. 데이터의 구조가 거의 또는 전혀 없는 대용량의 데이터를 저장하는 경우
2. 클라우드 컴퓨팅 및 저장공간을 최대한 활용하는 경우
3. 빠르게 서비스를 구축하고 데이터 구조를 자주 업데이트 하는 경우

레플리카세트 : 동일한 데이터를 저장하는 소수의 연결된 머신들은 머신 중 하나에 문제가 발생하더라도 데이터가 그대로 유지되도록 합니다.

인스턴스 : 로컬 또는 클라우드에서 특정 소프트웨어를 실행하는 단일 머신, MongoDB에서는 데이터베이스입니다.

클러스터 : 데이터를 저장하는 서버 그룹





도큐먼트(Document)
필드 - 값 쌍으로 저장된 데이터

필드(Field)
데이터포인트를 위한 고유한 식별자

값(Value)
주어진 식별자와 관계된 데이터

컬렉션(Collection)
MongoDB의 도큐먼트로 구성된 저장소로 일반적으로 도큐먼트 간의 공통 필드가 있습니다. 데이터베이스 당 많은 컬렉션이 있고 컬렉션 당 많은 도큐먼트가 있을 수 있습니다.


데이터를 가져오거나(import), 내보내는(export) 경우에 따라 효율적인 데이터 형식이 존재합니다. 

MongoDB의 데이터는 BSON의 형태로 저장이 되고, 보통 읽기 쉬운 JSON의 형태로 출력됩니다. 

=> 가져오거나 내보낼 때 사용 가능한 명령어가 각각 존재합니다. 

|command|JSON|BSON|
|--|--|--|
|fromDB|mongoimport|mongorestore|
|toDB|mongoexport|mongodump|


DB를 왜쓰냐? 
여러명이 같이쓰는 경우 백업이 가능하지만 어떤게 원본인지 관리하기 힘들고 데이터에 접근할 때 한쪽에서만 열수밖에 없고, 여러군데에서 열더라고 데이터의 커럽션이 일어난다.
또한 접근 권한을 통해 ....
데이터를 관리하는데 특화된 database management sofrware/system : DBMS


검색에 최적화된 엘라스틱서치?

data 리던던씨??? => 백업 
몽고디비 : SQL은 1970년도에 출시 당시 전세계가 연결되지 않았음. => 한 컴퓨터에서만 잘 작동하도록 최적화되어있다?SQL은 분산시스템에 대해서 따른 툴?솔루션?을 도입해서 쓴다.

그러나 시간이 지나면서 분산형(세계곳곳에서 글로벌하게 하나의 서비스 사용)~replication, sharding 을 native하게 support한다.

~레플리케이션.
DB도 컴푸터상에서 프로그램이 돌아가고있는 경우이기 때문에 failure가 일어날 수 있다. 기술적으로든 환경적으로든.
이러한 failure를 방지하기 위해 데이터베이스를 여러개를 둔다. => 레플리카 


nosql : 관계형 데이터베이스가 아니다. 라는 정도의 뜻?

sql vs nosql : 작은 어플리케이션이면 뭐든 괜찮다? 
몽고디비를 써야하는 경우 : 정확성 결제 등. => SQL 쓰는게 좋다?
을 쓰고 그런게 아닌 경우에만  ex) 추천 


scalable : 사용자가 늘어나도 버틸 수 있다? 


확장 : 수용량 가용량 증가. 
수직확장 vertical scalibility: increse size, add power => 컴터를 더 좋은걸 쓴다? cpu도 늘리는데는 한계가 있다.

수평확장 horizantal scalability: add number like 분점 => 돈이 덜든다.




샤딩 : 1~10만 => 1번 샤드, 10만~20만 => 2번샤드 ... 와 같이 데이터를 나누는 경우
클러스터 컴푸터가 모여있는 경우 ... failure, replica, 
