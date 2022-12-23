import { GET_COURSE_ERROR, GET_COURSE_LOADING, GET_COURSE_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_STUDENT_SUCCESS, PROFILE_ERROR, PROFILE_LOADING,
   PROFILE_SUCCESS, QUESTIONS_ERROR, QUESTIONS_LOADING, QUESTIONS_SUCCESS, SCORE, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, STUDENT_LOGOUT, SUBSCRIPTIONS_ERROR, SUBSCRIPTIONS_LOADING, SUBSCRIPTIONS_SUCCESS, TESTS_ERROR, TESTS_LOADING, TESTS_SUCCESS } from "./ActionTypes";

const initialState = {
    login: {
      loading: false,
      error: false,
      student_token: null,
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
    cources:{
      lodaing:false,
      error:false,
      datacourse:null,
    },
    subscriptions:{
      loading:false,
      error:false,
      subs:[]
    },
    tests:{
      loading:false,
      error:false,
      testlist:null
    },
    questions:{
      loading:false,
      error:false,
      qlist:null
    },
    scores:{
      score:0
    }
  };

export const reducer = (state = initialState, action) => {
switch (action.type) {
    case SCORE:
      return{
        ...state,
        scores:{
          ...state.scores,
          score:action.payload
        }
      };
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

    //Staff Login
    case LOGIN_LOADING:
        return {
          ...state,
          login: {
            ...state.login,
            loading: true,
          },
    };

    case LOGIN_STUDENT_SUCCESS:
        return {
          ...state,
          login: {
            ...state.login,
            loading: false,
            error: false,
            student_token: action.payload,
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
    case GET_COURSE_LOADING:
      return{
          ...state,
          cources: { 
           ...state.cources,
           loading:true,
           error:false,
          },
  };
  case GET_COURSE_SUCCESS:
    return{
        ...state,
        cources: { 
         ...state.cources,
         loading:false,
         error:false,
         datacourse:action.payload,
        },
};
case GET_COURSE_ERROR:
  return{
      ...state,
      cources: { 
       ...state.cources,
       loading:false,
       error:true,
      },
};
case SUBSCRIPTIONS_LOADING:
  return{
      ...state,
      subscriptions: { 
       ...state.subscriptions,
       loading:true,
       error:false,
      },
};
case SUBSCRIPTIONS_SUCCESS:
return{
    ...state,
    subscriptions: { 
     ...state.subscriptions,
     loading:false,
     error:false,
     subs:action.payload
    },
};
case SUBSCRIPTIONS_ERROR:
return{
  ...state,
  subscriptions: { 
   ...state.subscriptions,
   loading:false,
   error:true,
  },
};

case TESTS_LOADING:
  return{
      ...state,
      tests: { 
       ...state.tests,
       loading:true,
       error:false,
      },
};

case TESTS_SUCCESS:
  return{
      ...state,
      tests: { 
       ...state.tests,
       loading:false,
       error:false,
       testlist:action.payload
      },
};
case TESTS_ERROR:
  return{
      ...state,
      tests: { 
       ...state.tests,
       loading:false,
       error:true,
      },
};

case QUESTIONS_LOADING:
  return{
      ...state,
      questions: { 
       ...state.questions,
       loading:true,
       error:false,
      },
};
case QUESTIONS_SUCCESS:
  return{
      ...state,
      questions: { 
       ...state.questions,
       loading:false,
       error:false,
       qlist:action.payload
      },
};
case QUESTIONS_ERROR:
  return{
      ...state,
      questions: { 
       ...state.questions,
       loading:false,
       error:true,
      },
};
    case STUDENT_LOGOUT:
      return{
        ...state,
        login: {
          ...state.login,
          student_token:null,
        },
      };
      
    default:
        return { ...state };
    }
};