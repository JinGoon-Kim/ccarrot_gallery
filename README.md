# ccarrot_gallery
SpringBoot Gradle, React.js, MySQL 을 사용한 연습용 게시판입니다.

### 통신
백엔드 서버와 프론트 서버를 분리하여
페이지의 요청에 대한 것을 REST API 로 응답 진행


### 폴더 구조도
/ -> Home <br>
/join -> Join <br>
/login -> Login <br>
/search -> Search <br>
<br>
/members/:id -> See user <br>
/members/logout -> Log Out <br>
/members/edit -> Edit My Profile <br>
/members/delete -> Delete My Profile <br>
<br>
/gallery/:id -> See gallery <br>
/gallery/:id/edit -> Edit artwork <br>
/gallery/:id/delete -> Delete artwork <br>
/gallery/upload -> Upload artwork <br>
/gallery/comments -> Comment on a artwork <br>
/gallery/comments/delete -> Delete A Comment of a artwork <br>

### 엔티티 구조도
![엔티티 구조도](https://github.com/JinGoon-Kim/ccarrot_gallery/blob/main/Entity_diagram_ver1.png)
