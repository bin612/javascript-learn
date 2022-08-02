
function addAge(age) {
    // 방어 코드 작성 필수
    if(typeof age === 'number') {
        return age + 1;
    } else {
        throw 'ERROR';
    }
}

/* 
   타입 스크립트와 달리 문자열로 작성하게 되면 위와 같이 
   방어 코드를 작성해서 타입을 유지 시켜줘야 함
*/
let age = addAge(30);

console.log(age);


age = 10;
age = false;
age = {};