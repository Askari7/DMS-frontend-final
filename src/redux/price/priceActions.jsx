import axios from "../../services/axiosInterceptor";
import { message } from "antd";
import { updateUser } from "../auth/authActions";

export const getPaidLink = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const userId = params.id
    delete params.id
    try {
      const response = await axios
      .post("/v1/stripe/create-checkout-session", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      if(response.status == 201 ){
        dispatch(updateUser({id: userId}))

        window.location.href = response?.data?.url
        return true;
      } else {
        message.error(response?.data?.message);
      }
      return false
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};

export const unsubscribeSubscription = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post("/v1/stripe/cancel-subscription", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      if(response.status == 204 ){
        message.success("Succesfully unsubscribed!")
        dispatch(updateUser({id: params.id}))
        return true;
      } else {
        message.error(response?.data?.message);
      }
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};
