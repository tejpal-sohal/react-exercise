
import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from './updateSelectedLessons.action'

// add code to make reducer work in this file. 
const initState = {
  allLessons: []
};
// const selectedLessons = (state = initState, action) => {
//   console.log(action)
//     if (action.type ===  'UPDATE_SELECTED_LESSONS_REQUEST') {
//         let newLessons = state.allLessons.filter(lesson => {
//           return action.status !== lesson.status
//         })
//         return {
//           ...state,
//           allLessons: newLessons
//         }
//     } else if (action.type ===  'UPDATE_SELECTED_LESSONS_REQUEST') {

//     }

//     return state
// }
const selectedLessons = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSONS_REQUEST:
      return Object.assign({}, state, {
        allLessons: action.status

      });
    case UPDATE_SELECTED_LESSONS_SUCCESS:
      return Object.assign({}, state, {
        allLessons: action.status
      });
    default:
      return state
  }
}

export default selectedLessons