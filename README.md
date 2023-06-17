# 🖥️ 프로젝트 소개
React를 활용한 웹사이트 만들기(영화 커뮤니티)
<br>

## 🕰️ 개발 기간
* 23.02.01 - 23.02.14

## 🧑‍🤝‍🧑 맴버구성
 - 권세영: 메인페이지, 현재 상영작 페이지, 개봉 예정작 페이지, 상세 페이지, 메인페이지의 서브 게시판, 영화 리뷰페이지, 전체적인 css 수정
 - 김주원: 메인페이지, 공지사항 페이지, 자유게시판 페이지
 - 남민섭: 회원가입, 로그인, 로그아웃, 아이디 찾기, 비밀번호 찾기, 비밀번호 변경, 메인페이지, 장르별 영화 페이지, 영화등록 페이지, 검색 페이지, 로딩, 공지사항페이지(쓰기, 수정, 삭제, 페이징), 자유게시판 페이지(쓰기, 수정, 삭제, 페이징),영화 상세페이지(한줄평 수정, 삭제), 서버.웹 배포
 - 이창민: 메인페이지, 이달의 추천영화페이지, 전체적인 css 확인, DB관리

### ⚙️ 사용한 스킬
Html, Css, Sass, JavaScript, React, Redux, MySQL, GitHub, Git

#### 관리자
-Id: admin

-password: admin1234$!!

## 📌 주요 기능
#### 로그인 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C2(%EB%A1%9C%EA%B7%B8%EC%9D%B8)" >상세보기 - WIKI 이동</a>
- ID찾기, PW찾기
- 로그인 시 react-cookie에 setcookie함수 사용하여 쿠키(Cookie) 생성

#### 회원가입 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C1(%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85)" >상세보기 - WIKI 이동</a>
- ID 중복 체크
- NickName 중복 체크
- bcrypt 사용하여 비밀번호 암호화
- 정규표현식 사용하여 사용자가 알맞는 값을 입력하게 메세지 출력

#### 로그아웃
- 유지시간 60분 설정, 유지시간 지날 시 자동로그아웃
- 수동 로그아웃 가능 

#### 검색 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C3(%EC%98%81%ED%99%94%EB%A6%AC%EC%8A%A4%ED%8A%B8)#%EF%B8%8F-%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89">상세보기 - WIKI 이동</a>
- 찾고 싶은 영화나 장르 검색
- 로딩 spinner API 사용

#### 최신영화, 추천영화 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C3(%EC%98%81%ED%99%94%EB%A6%AC%EC%8A%A4%ED%8A%B8)#%EF%B8%8F-%EC%98%81%ED%99%94%EB%A6%AC%EC%8A%A4%ED%8A%B8" >상세보기 - WIKI 이동</a>
- 최신영화(현재 상영작, 개봉 예정작)
- 추천영화(이달의 추천영화, 장르별 추천 영화)
- 로딩 spinner API 사용

#### 영화 상세보기 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C3(%EC%98%81%ED%99%94%EB%A6%AC%EC%8A%A4%ED%8A%B8)#%EF%B8%8F-%EC%98%81%ED%99%94-%EC%83%81%EC%84%B8%EB%B3%B4%EA%B8%B0" >상세보기 - WIKI 이동</a>
- react-player API 사용(영화 예고편 재생) 
- 영화 기본 정보 및 줄거리
- 로그인 했을 시 영화 추천(좋아요)버튼 클릭 가능
- 로그인 했을 시 한줄평 쓰기, 수정, 삭제 가능
- 페이징 기능

#### 공지사항 페이지 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EA%B2%8C%EC%8B%9C%ED%8C%90)#%EF%B8%8F-%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD" >상세보기 - WIKI 이동</a>
- 관리자 id만 글 등록, 수정, 삭제 가능
- 관리자 id를 제외한 다른 사용자는 읽기만 가능
- 페이징 기능

#### 자유게시판 페이지 <a href="https://github.com/namminimi/movie-react/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EA%B2%8C%EC%8B%9C%ED%8C%90)#%EF%B8%8F-%EC%9E%90%EC%9C%A0%EA%B2%8C%EC%8B%9C%ED%8C%90" >상세보기 - WIKI 이동</a>
- 글 등록, 수정, 삭제 가능
- 페이징 기능

#### 메인페이지
- react-player API 사용(영화 예고편 재생)
- react-slick API 사용(영화 추천 슬라이드)
