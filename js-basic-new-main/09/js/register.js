//4~15자리인지 확인하려면 먼저 아이디 필드에 접근이 필요
var userId = document.querySelector("#user-id");

var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");
//아이디 필드에 입력을 마치고 필드를 빠져나올 떄 발생하는 이벤트
userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        //다시 입력할 수 있도록 userId 필드 선택
        userId.select();
    }
}

function checkPw() {
    if(pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if(pw1.value != pw2.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}

