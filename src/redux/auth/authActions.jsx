import axios from "axios";
import axiosInterceptor from "../../services/axiosInterceptor";
import { message } from "antd";
import { store } from "../store";
export const registerUser = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    return await axios
      .post("/api/auth/signup", params)
      .then((response) => {
        console.log(response.data, params);
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        if (response.status == 201) {
          // dispatch({
          //   type: "SET_MESSAGE",
          //   message: "Verification sent  to email" ,
          // });
          message.success("User succesfully registered");

          return true;
        }
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        // dispatch({
        //   type: "SET_ERROR",
        //   error: e.response.data.message,
        // });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};
export const logoutUser = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    localStorage.clear();
    dispatch({ type: "LOGOUT_USER" });
    dispatch({
      type: "SET_LOADING",
      loading: false,
    });
  };
};
export const loginUser = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    return await axios
      .post("/v1/auth/login", params)
      .then((response) => {
        console.log(response.data, params);
        localStorage.setItem("userData", JSON.stringify(response.data));
        if (response.data?.tokens?.access?.token) {
          localStorage.setItem("token", response.data?.tokens?.access?.token);
        }
        dispatch({
          type: "SET_USER",
          user: response.data.user,
          token: response.data.tokens,
          isLoggedIn: true,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.success("User LoggedIn Succesfully");

        return true;
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};
export const updateUserInformation = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const id = params.id;
    delete params.id;
    console.log(params);

    return await axiosInterceptor
      .patch(`/v1/users/${id}`, params)
      .then((response) => {
        console.log(response);
        console.log(response.data, params, "Update User");
        dispatch({
          type: "UPDATE_USER",
          user: response.data,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.success("Update Sucessfull");

        return true;
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};

// for getting update user get
export const updateUser = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const id = params.id;
    delete params.id;
    console.log("Update User");
    return await axiosInterceptor
      .get(`/v1/users/${id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data, params);
        dispatch({
          type: "UPDATE_USER",
          user: response.data,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.success("User updated successfully");
        return true;
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};

export const getUser = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const id = params.id;
    delete params.id;
    console.log("Update User");
    return await axiosInterceptor
      .get(`/v1/users/${id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data, params);
        dispatch({
          type: "UPDATE_USER",
          user: response.data,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });

        return true;
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};

export const updateUserPassword = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const id = params.id;
    delete params.id;
    console.log(params);
    // const state = store.getState();

    // let config = {
    //   headers: {
    //     'Authorization': 'Bearer ' + state?.auth?.token?.access?.token
    //   }
    // }

    return await axiosInterceptor
      .patch(`/v1/users/${id}`, params)
      .then((response) => {
        console.log(response);
        console.log(response.data, params);
        dispatch({
          type: "UPDATE_USER",
          user: response.data,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.success("Password Update Successfull !");

        return true;
      })
      .catch((e) => {
        console.log(e.response.data.message, "error");
        // dispatch({
        //   type: "SET_ERROR",
        //   error: e.response.data.message,
        // });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        message.error(e.response.data.message);
        return false;
      });
  };
};
