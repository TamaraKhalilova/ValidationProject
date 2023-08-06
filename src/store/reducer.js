const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FIRSTNAME':
        return { ...state, firstname: action.payload };
      case 'SET_LASTNAME':
        return { ...state, lastname: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_MESSAGE':
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  