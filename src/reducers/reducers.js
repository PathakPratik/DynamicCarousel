
export function loginReducer( state, action) {

    if (typeof state === 'undefined') {
        state = { username: "", password: "" }
    }

     switch (action.type) {
        case "SET_USERNAME":
          return { username: action.username, password: state.password };
        case "SET_PASSWORD":
          return { username: state.username, password: action.password };
        default:
          return state
     }
}

export function slidesReducer(state, action) {

    if (typeof state === 'undefined') {
        state = { userSelections: [],currentSelection: 0, initialLoad: true }
    }

    switch (action.type) {
        case "UPDATE_CURRENT_SELECTION":
          return { userSelections: state.userSelections, currentSelection: action.currentSelection, initialLoad: false };
        case "PUSH_TO_USER_SELECTIONS":
          return pushToUserSelections(state,action);
        case "SET_USER_SELECTIONS":
          return { userSelections: action.userSelections, currentSelection: state.currentSelection, initialLoad: false };
        default:
          return state
    }
}

function pushToUserSelections(state,action){

    let arr = state.userSelections;

    arr.push(state.currentSelection);

    return { userSelections: arr, currentSelection: state.currentSelection, initialLoad: false }
}

