import { ADD_COURSE_ERROR, ADD_COURSE_LOADING, ADD_COURSE_SUCCESS, ADD_TEST_ERROR, ADD_TEST_LOADING,
  ADD_TEST_SUCCESS, 
  GET_COURSE_ERROR, 
  GET_COURSE_LOADING, 
  GET_COURSE_SUCCESS, 
  GET_TEST_ERROR, 
  GET_TEST_LOADING, 
  GET_TEST_SUCCESS, 
  LIST_ERROR, LIST_LOADING, 
  LIST_SUCCESS, LOGIN_ERROR,
  LOGIN_LOADING, LOGIN_SUCCESS, 
  PROFILE_ERROR, PROFILE_LOADING,
  PROFILE_SUCCESS, SIGNUP_ERROR,
  SIGNUP_LOADING, SIGNUP_SUCCESS,
  STAFF_LOGOUT } from "./ActionTypes";

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

  export const loginSuccess = (payload) => {
    return {
      type: LOGIN_SUCCESS,
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

  //To add course
  export const addcourseLoading = () =>{
    return {
       type: ADD_COURSE_LOADING,
    }
  };

  export const addcourseSuccess = () =>{
    return {
       type: ADD_COURSE_SUCCESS,
    }
  };

  export const addcourseError = () =>{
    return {
        type: ADD_COURSE_ERROR,
    }
  };
  //To get course
  export const getcourseLoading = () =>{
    return {
       type: GET_COURSE_LOADING,
    }
  };
  export const getcourseSuccess = (payload) =>{
    return {
       type: GET_COURSE_SUCCESS,
       payload,
    }
  };

  export const getcourseError = () =>{
    return {
        type: GET_COURSE_ERROR   
      }
  };
  //To fetch list of all students
  export const listLoading = () =>{
    return {
       type: LIST_LOADING,
    }
  };

  export const listSuccess = (payload) =>{
    return {
       type: LIST_SUCCESS,
       payload,
    }
  };

  export const listError = () =>{
    return {
        type: LIST_ERROR,
    }
  };
//to add tests
export const addtestLoading = () =>{
  return {
     type: ADD_TEST_LOADING,
  }
};

export const addtestSuccess = () =>{
  return {
     type: ADD_TEST_SUCCESS,
  }
};

export const addtestError = () =>{
  return {
      type: ADD_TEST_ERROR,
  }
};

export const gettestLoading = () =>{
  return {
     type: GET_TEST_LOADING,
  }
};

export const gettestSuccess = (payload) =>{
  return {
     type: GET_TEST_SUCCESS,
     payload
  }
};

export const gettestError = () =>{
  return {
      type: GET_TEST_ERROR,
  }
};
  export const staffLogout = () =>{
    return {
        type: STAFF_LOGOUT,
    }
  };