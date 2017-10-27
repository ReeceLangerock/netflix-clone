export const individualResourceReducer = (
  state = {
    resourceData: {}
  },
  action
) => {
  switch (action.type) {
    case 'GET_INDIVIDUAL_RESOURCE':
      return { ...state, resourceData: action.data }
    default:
      return state
  }
}
