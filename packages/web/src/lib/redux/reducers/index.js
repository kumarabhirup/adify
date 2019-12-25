export default {
  example: (state = {}, data) => {
    switch (data.type) {
      case 'EXAMPLE_ACTION':
        return {
          ...state,
        }
      default:
        return state
    }
  },
}
