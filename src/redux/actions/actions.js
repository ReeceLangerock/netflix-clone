// import axios from 'axios'

// export const addResource = resource => async dispatch => {
//   try {
//     const res = await axios.post(`http://localhost:3001/api/add-resource`, {
//       resource
//     })
//     console.log(res)
//     //
//     dispatch({ type: '', data: res.data })
//   } catch (err) {
//     // throw error
//   }
// }

export const updateField = (field, input) => {
  return {
    type: 'UPDATE_FIELD',
    field,
    input
  }
}
