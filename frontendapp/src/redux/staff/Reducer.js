// import { act } from "react-dom/test-utils";
import { ADD_COURSE_ERROR, ADD_COURSE_LOADING, ADD_COURSE_SUCCESS, ADD_TEST_ERROR, ADD_TEST_LOADING, ADD_TEST_SUCCESS, GET_COURSE_ERROR, GET_COURSE_LOADING, GET_COURSE_SUCCESS, GET_TEST_ERROR, GET_TEST_LOADING, GET_TEST_SUCCESS, LIST_ERROR, LIST_LOADING, LIST_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS,
   SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, STAFF_LOGOUT } from "./ActionTypes";

const initialState = {
    login: {
      loading: false,
      error: false,
      staff_token: null,
    },
    signup: {
      loading: false,
      error: false,
    },
    profile: {
      loading: false,
      error: false,
      data: [],
    },
    list:{
      loading:false,
      error:false,
      data:[],
    },
    addcourse:{
      loading:false,
      error:false,
    },
    getcourse:{
      loading:false,
      error:false,
      courses:[]
    },
    addtest:{
      loading:false,
      error:false
    },
    gettest:{
      loading:false,
      error:false,
      tests:null
    }
  };

export const reducer = (state = initialState, action) => {
switch (action.type) {
//Staff Signup
    case SIGNUP_LOADING:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: true,
          },
    };
    case SIGNUP_SUCCESS:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: false,
            error: false,
        },
    };
    case SIGNUP_ERROR:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: false,
            error: true,
          },
    };
    //addtest
   case ADD_COURSE_LOADING:
      return {
        ...state,
        addcourse: {
          ...state.addcourse,
          loading: true,
        },
  };
  case ADD_COURSE_SUCCESS:
      return {
        ...state,
        addcourse: {
          ...state.addcourse,
          loading: false,
          error: false,
      },
  };
  case ADD_COURSE_ERROR:
      return {
        ...state,
        addcourse: {
          ...state.addcourse,
          loading: false,
          error: true,
        },
  };

    //Staff Login
    case LOGIN_LOADING:
        return {
          ...state,
          login: {
            ...state.login,
            loading: true,
          },
    };

    case LOGIN_SUCCESS:
        return {
          ...state,
          login: {
            ...state.login,
            loading: false,
            error: false,
            staff_token: action.payload,
          },
    };

    case LOGIN_ERROR:
    return{
        ...state,
        login: { 
         ...state.login,
         loading:false,
         error:true,
        },
    };   
    
    //Profile Loading
    case PROFILE_LOADING:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: true,
          },
    };

    case PROFILE_SUCCESS:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: false,
            error: false,
            data: action.payload.data,
          },
    };

    case PROFILE_ERROR:
        return{
            ...state,
            profile: { 
             ...state.profile,
             loading:false,
             error:true,
            },
    }; 
//Student List

  case LIST_LOADING:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
  };

  case LIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: false,
          data: action.payload,
        },
  };

  case LIST_ERROR:
      return{
          ...state,
          list: { 
           ...state.list,
           loading:false,
           error:true,
          },
  }; 
  case GET_COURSE_LOADING:
    return{
      ...state,
      getcourse:{
        ...state.getcourse,
        loading:true,
        error:false,
      }
    };
  
  case GET_COURSE_SUCCESS:
     return{
      ...state,
      getcourse:{
        ...state.getcourse,
        loading:false,
        error:false,
        courses:action.payload
      }
     };
     case GET_COURSE_ERROR:
      return{
        ...state,
        getcourse:{
          ...state.getcourse,
          loading:false,
          error:true,
        }
      };
  case STAFF_LOGOUT:
     return{
      ...state,
      login:{
        ...state.login,
        staff_token:null,
      }
     };

     case ADD_TEST_LOADING:
      return{
        ...state,
        addtest:{
          ...state.addtest,
          loading:true,
          error:false,
        }
      };
    
    case ADD_TEST_SUCCESS:
       return{
        ...state,
        addtest:{
          ...state.addtest,
          loading:false,
          error:false,
        }
       };
       case ADD_TEST_ERROR:
        return{
          ...state,
          addtest:{
            ...state.addtest,
            loading:false,
            error:true,
          }
        };
        case GET_TEST_LOADING:
          return{
            ...state,
            gettest:{
              ...state.gettest,
              loading:true,
              error:false,
            }
          };
        
        case GET_TEST_SUCCESS:
           return{
            ...state,
            gettest:{
              ...state.gettest,
              loading:false,
              error:false,
              tests:action.payload
            }
           };
           case GET_TEST_ERROR:
            return{
              ...state,
              gettest:{
                ...state.gettest,
                loading:false,
                error:true,
              }
            };
    default:
        return { ...state };
    }
};