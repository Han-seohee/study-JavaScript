# 이론 - 자바스크립트 문서 객체 모델(DOM)

## <b>1. 자바스크립트 DOM과 jQuery와의 관계</b>

<br/>

### jQuery
* 자바스크립트로 만들어진 라이브러리
* 자바스크립트의 DOM(Document Object Model)작업을 좀 더 쉽게 할 수 있는 기능

1. <b>자바스크립트 core문법</b><br/>
기본 문법과 구조 / 데이터 타입 / 조건문 / 반복문 / 함수 / 클래스

<br/>

2. <b>자바스크립트 core라이브러리</b><br/>
자바스크립트에서 기본으로 제공하는 타이머 함수 / 문자열 / 날짜 및 시간 / 수학 / 배열 / 기타 전역함수

<br/>

3. <b>자바스크립트 DOM(Document Object Model)</b><br/>
노드 / 스타일 / 속성 / 이벤트 / 위치 및 크기

<br/>

4. <b>자바스크립트 BOM(Browser Object Model)</b><br/>
브라우저와 관련된 Window / Navigator / Location / History / Document / Screen객체

<br/>

```html
<body>
    <ul id="menu">
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
    </ul>
</body>
```

```js
var menu = document.getElementById("menu");
var liList = menu.getElementsByTagName("li");
for(var i=0; i<liList.length; i++){
    var li = liList[i];
    li.style.color = "f00";
}
```

👇🏻

```js
//jQuery
$("#menu li").css("color", "#f00");

```

<br/> 

--- 

<br/>

## <b>2. DOM의 이해와 기능</b>

<br/>

### DOM
* 웹 화면에 보이는 요소를 조작하기 위한 기능으로 가득 찬 라이브러리 덩어리들을 의미한다.
* html의 tag들이 웹 페이지를 구성하는 DOM객체로 생성이 되어 트리 구조를 가지며 웹 페이지를 구성한다.
* DOM은 정의부분(명세서)와 구현 부분으로 나누어진다. 정의 부분인 명세서에는 웹페이지(또는 XML)문서를 조작할때 지켜야 할 규칙이 명시되어 있는 문서일 뿐 실제로 동작하는 구현 소스코드는 전혀 존재하지 않는다.

<br/>

* 웹페이지에서의 이미지 슬라이더 기능
* 아코디언 메뉴
* 서버에서 데이터를 받아 화면에 출력
* 웹페이지의 글자 색과 크기 변경, 말풍선 등

<br/>

### IDL
* IDL(Interface Definition Language)은 DOM의 정의 부분을 만들 때 사용하는 인터페이스 정의 전용 언어
* IDL도 자바스크립트 프로그래밍처럼 언어 중 하나이며 고유의 문법이 존재한다.

<br/>

## <b>3. DOM과 HTML페이지의 관계</b>

<br/>

### 1. DOM과 HTML페이지의 관계
* 해당 브라우저는 웹페이지 코드를 읽어들인다.
* 이어서 파싱(parsing)단계를 거쳐 웹페이지 내용을 해석하는데, 이 때 우리가 작성한 마크업 태그와 1:1 매칭이 되는 DOM클래스의 객체를 생성한다. 이 객체는 저마다 고유의 기능을 하게된다.
* 마지막으로 웹 브라우저는 생성한 DOM객체를 가지고 웹 페이지 화면을 만들게된다.

<br/>

### 2. DOM과 node의 관계
* 노드는 HTML웹페이지 구성 요소의 가장 작은 단위이다.
* HTML페이지의 <body>, <div>, <p>태그 뿐 아니라 텍스트 및 주석까지 모두 노드라 부른다.