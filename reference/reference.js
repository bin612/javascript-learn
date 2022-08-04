/* 
    참조와 복사
    객체를 사용하게 되면 참조로 사용을 하게 됨
*/
// 복사
let a = 10;
let b = a;

b = 20;


// 같은 값을 가리키고 있다. 
// 참조 메카니즘 
let o = {
    isLoading: false, // 아래에서 true로 변경하면 이 객체도 변경된다.
};

let o2 = o;

//o2.isLoading = true;

function foo(o) {
    o.isLoading = true;
}

foo(o);

console.log(b);