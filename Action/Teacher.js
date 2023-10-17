import axios from "axios";

//login teacher component
export const loginTeacher = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.post(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher/login",
      { email, password },
      config
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.teacher,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

//load user action
export const loadTeacher = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher",
      config
    );

    dispatch({
      type: "LoadSuccess",
      payload: data.teacher,
    });
  } catch (error) {
    dispatch({
      type: "LoadFailure",
      payload: error.response.data.message,
    });
  }
};

//logout teacher
export const logoutTeacher = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/logout",
      config
    );

    dispatch({
      type: "LogoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};
