import axios from "../../services/axiosInterceptor";
import { message } from "antd";

export const getWorkpsace = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post("/v1/bot/generate-workspace", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};


export const getTranslation = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post("/v1/bot/get-translate-content", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};

export const getSummary = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post("/v1/bot/get-summarize-content", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};

export const markFav = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post("/v1/bot/save-as-favourite", params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
}

export const getHistory = (params) => {
  return async (dispatch) => {
    const { favourites, time, page } = params;
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      // .get(`/v1/bot/get-workspaces`)
      .get(`/v1/bot/get-workspaces?sortBy=createdAt:desc&isFavourite=${favourites}&filter=${time}&limit=5&page=${page}`)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};

export const deleteWorkspace = (params) => {
  return async (dispatch) => {
    const { id } = params;
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .delete(`/v1/bot/delete-workspace/${id}`)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};


export const removeFromFavourites = (params) => {
  return async (dispatch) => {
    const { id } = params;
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      const response = await axios
      .post(`/v1/bot/remove-from-favourite/${id}`, params)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      return response?.data
    } catch (e) {
      message.error(e?.response?.data?.message)
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }

  };
};


  


