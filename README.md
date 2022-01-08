[사이트 보기](http://ccarrot.kro.kr/)

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
|entity|Method|call adress|parameter|desc|
|------|------|-----------|---------|----|
|members|post|v1/api/members||insert member|
|members|get|v1/api/members||see all member|
|members|get|v1/api/members/{id}||see one member|
|members|patch|v1/api/members/{id}||update one member|
|members|delete|v1/api/members/{id}||delete one member|
|gallery|post|v1/api/gallery||insert gallery|
|gallery|get|v1/api/gallery||see all gallery|
|gallery|get|v1/api/gallery/{id}||see one gallery|
|gallery|patch|v1/api/gallery/{id}||update one gallery|
|gallery|delete|v1/api/gallery/{id}||delete one gallery|
|file|get|v1/api/file/{file_name}||see one file(text or img)|

#### 초기 기획
/ -> Home <br>
/join -> Join <br>
/login -> Login <br>
/search -> Search <br>
<br>
/api/members/:id -> See one member <br>
/api/members/logout -> Log Out <br>
/api/members/edit -> Edit My Profile <br>
/api/members/delete -> Delete My Profile <br>
<br>
/gallery/:id -> See gallery <br>
/gallery/:id/edit -> Edit artwork <br>
/gallery/:id/delete -> Delete artwork <br>
/gallery/upload -> Upload artwork <br>
/gallery/comments -> Comment on a artwork <br>
/gallery/comments/delete -> Delete A Comment of a artwork <br>

### 엔티티 구조도
![엔티티 구조도](https://github.com/JinGoon-Kim/ccarrot_gallery/blob/main/211208entityManagerFactory.png)
