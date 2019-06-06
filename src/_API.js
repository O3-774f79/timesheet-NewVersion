import axios from 'axios';
import Auth from './stores/authStore';
const axiosConfig = {withCredentials: true};

const Login = async (user, pass) => {
  try {
    const dataRes = await axios.post (
      `/Login`,
      {
        username: user,
        password: pass,
      },
      axiosConfig
    );
    return dataRes.data
  } catch (e) {
    return e
  }
};

export default {Login};
