const initialState = {
    data:null,
    loading: false,
  };

  
const workspaceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, user: action.user, token: action.token ,isLoggedIn: action.isLoggedIn };
    
      case "SET_LOADING":
        return { ...state, loading: action.loading };
      
      case "SET_ERROR":
        return { ...state, error: action.error };
     
        case "SET_MESSAGE":
          return { ...state, message: action.message };
         
      default:
        return { ...state };
    }
  };
  
  export default workspaceReducer;