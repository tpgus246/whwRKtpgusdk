const GET_CONDUCTS = 'conduct/GET_CONDUCTS';

export const getConducts = (item) => ({
  type: GET_CONDUCTS,
  item
});

const initialState = [];

const conduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONDUCTS: {
      console.log(action.item);
      return [
        ...action.item
      ]
    }
    default: {
      return state;
    }
  }
}

export default conduct;
