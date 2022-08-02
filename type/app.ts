function addAgeTs(ages: number): number {
    return ages + 1;
}

//만약 문자열로 변경하게 되면 에러줄 표시가 될 것이다.
let ages: number = addAgeTs(30);

console.log(ages);