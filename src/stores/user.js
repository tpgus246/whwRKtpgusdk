const USER_INFO = 'user/USER_INFO';

export const userInfo = ({
  uid,
  ca,
  email
}) => ({
  type: USER_INFO,
  uid,
  ca,
  email
});

const initialState = {
  uid: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO: {
      return {
        ...state,
        uid: action.uid,
        ca: action.ca,
        email: action.email
      }
    }
    default: {
      return state;
    }
  }
}

export default user;
