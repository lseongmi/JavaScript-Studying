//오늘날짜 Date 객체 만들기
var now = new Date();

//처음만난날 Date 객체 만들기
var firstDay = new Date("2024-04-30");

//오늘 날짜 밀리초로 바꾸기
var toNow = now.getTime();

//처음 만난날 밀리초로 바꾸기
var toFirst = firstDay.getTime();

//결괏값을 날짜 수로 바꾸기
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24)); // 1일 = 1000밀리초 * 60초 * 60분 *24시간

//화면에 표시
document.querySelector("#accent").innerText = passedDay + "일";


//겹치는 부분을 calcDate 함수를 만들어 처리
function calcDate(days) {
    //처음 만난 날에 days 더하기
    var future = toFirst + days*(1000*60*60*24);

    //future값을 이용해 date객체의 인스턴스를 만듦
    var someday = new Date(future);

    //날짜 정보에서 연도 월 일만 추출
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();

    //html 화면에 표시
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";   
}
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

