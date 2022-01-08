[사이트 보기(호스팅 일시중단됨)](http://ccarrot.kro.kr/)

# ccarrot_gallery
SpringBoot Gradle, React.js, MySQL 을 사용한 연습용 게시판입니다.

### 호스팅 서버
AWS EC2 Ubuntu

### 통신
백엔드 서버와 프론트 서버를 분리하여
페이지의 요청에 대한 것을 REST API 로 응답 진행

### CI/CD
BackEnd : Jankins <br>
FrontEnd : 수동 업로드

### api 호출
|entity|Method|call adress|parameter|desc|Available|
|------|------|-----------|---------|----|---------|
|members|post|v1/api/members||insert member|possibility|
|members|get|v1/api/members||see all member|possibility|
|members|get|v1/api/members/{id}||see one member|possibility|
|members|patch|v1/api/members/{id}||update one member||
|members|delete|v1/api/members/{id}||delete one member||
|gallery|post|v1/api/gallery||insert gallery|possibility|
|gallery|get|v1/api/gallery||see all gallery||
|gallery|get|v1/api/gallery/{id}||see one gallery||
|gallery|patch|v1/api/gallery/{id}||update one gallery||
|gallery|delete|v1/api/gallery/{id}||delete one gallery||
|file|get|v1/api/file/{file_name}||see one file(text or img)|possibility|

### 엔티티 구조도
![엔티티 구조도](https://github.com/JinGoon-Kim/ccarrot_gallery/blob/main/211208entityManagerFactory.png)
