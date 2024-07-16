//배열 만들기
var itemList = [];

//add인 요소를 가져와 addBtn으로 저장후 클릭했을 떄 add List 함수 실행
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

//추가 버튼을 눌렀을 떄 배열에 준비물을 추가하는 함수
function addList() {
    var item = document.querySelector("#item").value;
    if(item !== null) {
        itemList.push(item);
        //배열에 추가한 내용을 텍스트 필드에서 자동으로 지우고 다시 커서를 활성화 하는 기능 추가
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus(); 
    }
    showList();
}

//화면에 표시할 목로의 소스 저장
function showList() {
    var list = "<ul>";
    for (var i = 0 ; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "<spen class = 'close' id = "+ i + ">X</spen></li>";
    }
    list += "</ul>";

    //list 변숫값 표시
    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");

    for(var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    //지정한 속성의 값을 가져오는 함수   
    var id = this.getAttribute("id"); //this(누른 삭제 버튼)의 id값 가져와 id 변수에 저장
    itemList.splice(id, 1);
    showList();
}