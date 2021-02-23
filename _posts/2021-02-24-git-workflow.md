---
title : "git 과 친해져 보자"
excerpt : "git 에 대하여"

categories:
  - Blog
tags:
  - [Blog, git]
last_modified_at: 2021-02-24T08:06:00-05:00
---
## git?

*  컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템
* 장점 : 오프라인작업 용이. 속도가 빠르고 서버의 역할을 줄일 수 있다. 가지치기(branch)가 비교적 가볍다.병합(merge)에서 문제가 적고 스테이징 지원.


## git keyword  
[현업자 깃블로그](https://parksb.github.io/article/28.html)  /  [브랜칭 배우기](https://learngitbranching.js.org/?locale=ko) / [델타](https://junwoo45.github.io/2019-09-03-git%EC%9D%B4%EC%A0%80%EC%9E%A5%ED%95%98%EB%8A%94%EB%B0%A9%EC%8B%9D/)

1. remote repository : 원격에 호스팅된 저장소. 
2. local repository : 로컬 환경의 저장소. 
3. working directory : 파일이 있는 디렉토리
4. staging : 변경 사항을 등록
5. Index : 등록된 변경사항이 모여있는 곳
6. commit : 로컬 저장소에 변경사항을 커밋. (프로젝트의 스냅샷 or 변경내역)
7. HEAD : 현재 작업중인 커밋 정도.
8. push : remote repo에 변경(수정)사항 갱신
9. pull : remote repo의 수정사항 갱신 // rebase방식으로 pull을 수행하도록 하는 명령어 존재
10. fetch : 로컬에서 리모트의 내용 업데이트
11. branch : 하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역.

* 깃의 브랜치는 특정 커밋에 대한 참조(reference)에 지나지 않기 떄문에 매우 가볍고 메모리나 디스크공간에 부담이 되지 않는다고 합니다.


## git work flow

#### upstream 에서 가져온다고 하면

0. fork 해왔다고 가정하고 시작.
1. upstream의 development branch에서 pull로 로컬을 최신화하고
2. 새로운 newBranch를 만들어 코드를 작성한 뒤
3. 내 레포지토리에 newBranch로 푸쉬 한뒤 pull request를 날린다.

#### 기본 git flow

##### branches : master <- (hotfix) <- release <- develop <- feature (안정성 순)  <br>[출처](https://medium.com/daangn/deploy-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95-545f278ca878)
* master: Stable 한 코드의 Archive이며 master 브랜치로 배포하면 언제든지 stable 한 상태의 코드가 배포됨.
* develop: Deploy-ready 상태의 코드가 있는 브랜치로 release 브랜치와 새로운 feature 브랜치 생성의 base가 되는 브랜치임. 테스트가 완료되고 언제든 배포해도 된다는 의미
* feature: 작업 브랜치로 develop 브랜치를 기준으로 생성함.
* release: 배포용 브랜치. develop 브랜치를 기준으로 생성하며 배포 & 모니터링이 끝난 이후에 develop 브랜치와 master 브랜치로 merge함.
* hotfix: 빠르게 수정하기 위한 브랜치. master 브랜치를 기준으로 생성해서 고쳐야 할 기능만 고쳐서 배포한 후, develop 브랜치와 master브랜치로 merge 

#### [당근마켓 git branch전략 deploy](https://medium.com/daangn/deploy-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95-545f278ca878)

#### [우아한형제들 git branch](https://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)



***

## git 오류 

* conflict : pull로 받아온 코드를 수정과정할 때 다른 사람이 master에 변경사항을 커밋한 상태로  master와 merge 한다면 나의 변경이력은 변경사항이 적용되기 전의 상태를 기반으로 하는 것이 아니기 때문에 충돌이 발생. 
 >각 커밋은 저장소의 이전 버전과 다음 버전의 변경내역을 저장하기 때문에 생기는 오류인 듯 함. 부분의 커밋이 그 커밋 위의 부모 커밋을 가리킨다는데 각 커밋은 어떤 커밋을 기반으로 변경되느냐를 저장한다고 하면 이해가 좀 된다. 

<br>

* resolve current index first : 현재 로컬에서의 변경사항이 리모트에 반영이 안된 상태로 브랜치를 바꿨더니 오류가 발생. push 해준 후 체크 아웃해주니 해결
* git add . 명령을 수행할 때 아직상위 폴더에 깃이 생성된 상태로 add를 진행하면 오류가 났던 경험이 있다. 

***

## 추가

1. 레포지토리 하위폴더를 분이해서 새로운 레포지토리로 만들 수 있다고 한다[link](https://sustainable-dev.tistory.com/119)