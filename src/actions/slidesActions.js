const UPDATE_CURRENT_SELECTION = "UPDATE_CURRENT_SELECTION";
const PUSH_TO_USER_SELECTIONS = "PUSH_TO_USER_SELECTIONS";
const SET_USER_SELECTIONS = "SET_USER_SELECTIONS";

export function updateCurrentSelection(currentSelection) {
  return {
    type: UPDATE_CURRENT_SELECTION,
    currentSelection
  }
}

export function pushToUserSelections(currentSelection) {
  return {
    type: PUSH_TO_USER_SELECTIONS,
    currentSelection
  }
}

export function setUserSelections(userSelections) {
  return {
    type: SET_USER_SELECTIONS,
    userSelections: userSelections.split(",")
  }
}