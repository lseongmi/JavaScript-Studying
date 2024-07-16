var n1 = parseInt(prompt("비교할 첫 번쨰 숫자:"));
var n2 = parseInt(prompt("비교할 두 번쨰 숫자:"));

compareTwo(n1, n2);

function compareTwo(x,y) {
    if(x > y) return alert(x + "(이)가" + y + "보다 큽니다.");
    else return alert(y+ "이(가)" + x + "보다 큽니다");
}