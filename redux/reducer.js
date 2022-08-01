import * as ActionType from './action-type.js';

const InitializeState = { count : 0};
export function reducer(state = InitializeState , action) {
    //do something

    switch(action.type) {
        case ActionType.INCREASE:
            return  {...state, count: state.count + 1};
        case ActionType.DECREASE:
            return  {...state, count: state.count - 1};
        case ActionType.RESET:
            // 미들웨어 사용전 이 코드는 실행되지 않는다.
            fetch('/reset')
            .then(response => response.json())
            .then(result =>{
                if(result) {
                    return  {...state, count: 0};
                }
            })
            
        default:
            return {...state};
    }
}