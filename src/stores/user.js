const USER_INFO = 'user/USER_INFO';
const ETH_INFO = 'user/ETH_INFO';

export const userInfo = (uid) => ({
  type: USER_INFO,
  uid
});

const initialState = {
  uid: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO: {
      return {
        ...state,
        uid: action.uid
      }
    }
    default: {
      return state;
    }
  }
}

export default user;
