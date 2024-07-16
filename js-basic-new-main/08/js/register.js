function newRegister() {
    //newP p로 노드 생성
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);
    
    var nameList = document.querySelector("#nameList");
    //appendChild()는 자식 요소 중 맨 끝에 추가하는 것이기 떄문에 최근 입력한 이름이 아래쪽에 표시
    nameList.appendChild(newP);

    //다음 이름을 입력할 수 있도록 텍스트 필드 비우기
    userName.value = "";
}