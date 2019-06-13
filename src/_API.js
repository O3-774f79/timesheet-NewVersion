import axios from 'axios';
const axiosConfig = {withCredentials: true};

export const Login = async (user, pass) => {
  try {
    const dataRes = await axios.post (
      `/Login`,
      {
        username: user,
        password: pass,
      },
      axiosConfig
    );
    return dataRes.data;
  } catch (e) {
    return false;
  }
};
const GetProjectName = async () => {
  try {
    const resProjectName = await axios.get (
      `/Project/GetListActive`,
      axiosConfig
    );
    return resProjectName.data;
  } catch (e) {
    return false;
  }
};
const GetProjectType = async () => {
  try {
    const resProjectType = await axios.get (
      `/ValueHelp/GetTypeProject`,
      axiosConfig
    );
    console.log (`in service`, resProjectType.data);
    return resProjectType.data;
  } catch (e) {
    return e;
  }
};
export default {Login, GetProjectName, GetProjectType};
