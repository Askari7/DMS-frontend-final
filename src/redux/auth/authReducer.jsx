const initialState = {
    user: {},
    token: {},
    loading: false, 
    error: "" ,
    message: "",
    isLoggedIn: false
  };

  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.user, token: action.token ,isLoggedIn: action.isLoggedIn };
      case "UPDATE_USER":
        localStorage.setItem("userData", JSON.stringify({ ...state, user: action.user }))
        return { ...state, user: action.user };
        
      case "SET_LOADING":
        return { ...state, loading: action.loading };
      
      case "SET_ERROR":
        return { ...state, error: action.error };
     
      case "SET_MESSAGE":
        return { ...state, message: action.message };
   
     case "LOGOUT_USER":
        return { ...state, user: {}, isLoggedIn: false, token: {} };
           
      default:
        return { ...state };
    }
  };
  
  export default authReducer;