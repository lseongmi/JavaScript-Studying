//큰이미지 요소 가져오기
var bigPic = document.querySelector("#cup");
//작은 이미지 요소 가져오기
var smallPics = document.querySelectorAll(".small");

//노드 리스트의 각 요소에 접근
for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = showBig;
}

//클릭인벤트가 발생한 요소가 값을 가져와서 bigPic요소의 src 속성에 지정
function showBig() {
    var newPic = this.src; //클릭 이벤트가 발생한 대상의 src속성 값 가져옴
    bigPic.setAttribute("src", newPic); //new Pic값을 큰 이미지의 src속성에 할당
}