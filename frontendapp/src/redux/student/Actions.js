import { GET_COURSE_ERROR, GET_COURSE_LOADING, GET_COURSE_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_STUDENT_SUCCESS, PROFILE_ERROR,
   PROFILE_LOADING, PROFILE_SUCCESS, QUESTIONS_ERROR, QUESTIONS_LOADING, QUESTIONS_SUCCESS, SCORE, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, STUDENT_LOGOUT, SUBSCRIPTIONS_ERROR, SUBSCRIPTIONS_LOADING, SUBSCRIPTIONS_SUCCESS, TESTS_ERROR, TESTS_LOADING, TESTS_SUCCESS } from "./ActionTypes";

//For Signup
export const signupLoading = () => {
    return {
      type: SIGNUP_LOADING,
    }
};

export const signupSuccess = (payload) =>{
    return {
       type: SIGNUP_SUCCESS,
       payload,
    }
};

export const signupError = () =>{
    return {
       type: SIGNUP_ERROR,
    }
};

//For login
export const loginLoading = () => {
    return {
      type: LOGIN_LOADING,
    };
  };

  export const loginstudentSuccess = (payload) => {
    return {
      type: LOGIN_STUDENT_SUCCESS,
      payload
    };
  };

  export const loginError = () =>{
    return {
      type: LOGIN_ERROR,
    }
  };

  //For profile fetch
  export const profileLoading = () =>{
    return {
       type: PROFILE_LOADING,
    }
  };

  export const profileSuccess = (payload) =>{
    return {
       type: PROFILE_SUCCESS,
       payload,
    }
  };

  export const profileError = () =>{
    return {
        type: PROFILE_ERROR,
    }
  };
  export const studentLogout =() =>{
    return {
        type: STUDENT_LOGOUT,
    }
  };

  export const getcourseLoading=()=>{
     return {
      type:GET_COURSE_LOADING,
     }
  };
  export const getcourseSuccess=(payload)=>{
    return {
     type:GET_COURSE_SUCCESS,
     payload,
    }
 };
export const getcourseError=()=>{
      return{
        type:GET_COURSE_ERROR,
      }
};

export const subscriptionLoading = () =>{
  return {
     type: SUBSCRIPTIONS_LOADING,
  }
};

export const subscriptionSuccess = (payload) =>{
  return {
     type: SUBSCRIPTIONS_SUCCESS,
     payload,
  }
};

export const subscriptionError = () =>{
  return {
      type: SUBSCRIPTIONS_ERROR,
  }
};

export const testLoading = () =>{
  return {
     type: TESTS_LOADING,
  }
};

export const testSuccess = (payload) =>{
  return {
     type: TESTS_SUCCESS,
     payload,
  }
};

export const testError = () =>{
  return {
      type: TESTS_ERROR,
  }
};

export const questionLoading = () =>{
  return {
     type: QUESTIONS_LOADING,
  }
};

export const questionSuccess = (payload) =>{
  return {
     type: QUESTIONS_SUCCESS,
     payload,
  }
};

export const questionError = () =>{
  return {
      type: QUESTIONS_ERROR,
  }
};
export const updateScore=(payload)=>{
  return {
    type: SCORE,
    payload
  }
}
