// Curry 함수
export const actionCreator = type => payload => ({
        type,
        payload,
    });

export function createStore(reducer) {
    let state;
    let handlers = [];
    
    // worker 에서 return을 하여 새로운 값으로 state를 받을 수 있음
    function dispath(action){
        state = reducer(state, action);
        handlers.forEach(handlers => handlers());
    }

    function subscribe(handlers) {
        handlers.push(handlers);
    }

    function getState() {
        return state;
    }
    return {
        dispath,
        getState,
        handlers,
    };
}


