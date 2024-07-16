function newRegister() {
    //newP p로 노드 생성
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    //새 span요소 만들기
    var delBttn = document.createElement("span");
    //새 텍스트 노드 만들기
    var delText = document.createTextNode("X");
    //버튼에 class 속성 설정하기
    delBttn.setAttribute("class", "del");
    //텍스트 노드를 button 요소의 자식 요소로 추가하기
    delBttn.appendChild(delText);
    //del 버튼을 p요소의 자식 요소로 추가하기
    newP.appendChild(delBttn);
    
    var nameList = document.querySelector("#nameList");
    //p요소를 #nameList 맨 앞에 추가하기
    nameList.insertBefore(newP, nameList.childNodes[0]);

    //다음 이름을 입력할 수 있도록 텍스트 필드 비우기
    userName.value = "";

    var removeBttns = document.querySelectorAll(".del");

    //여러 노드를 저장해야 하므로 X버튼은 노드리스트 형태로 저장.
    for(var i = 0; i < removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function() { 
            if(this.parentNode.parentNode) {
                //부모노드의 부모노드를 찾아 현재 노드(this)의 부모노드(p) 삭제
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}