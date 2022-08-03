const colors = ['red', 'yellow', 'black'];
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white',
}

colors[1]; // 이러한 문법은 불편하게 작용

//const yellow = colors[1]; 

//구조 분해 할당
const [red, yellow, black] = colors;
const {white, green} = Colors;

yellow;

//비교 연산자

let a = 10;
let b = '10';

// 동등 비교
if(a == b) {}

// 일치 비교
if(a === b) {}

//논리 연산자
if(a === true){}

//삼항 연산자
a = (a === b) ? 0 : 1;

// 함수를 기준으로 괄호() 하나로 값으로 변경 가능하다.
(function foo() {

})