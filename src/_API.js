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
export const Register = async (
  mail,
  pass,
  conpass,
  fname,
  lname,
  Sworkdaytext,
  Sworkday,
  phone,
  rID,
) => {
  try {
    const dataRes = await axios.post (
      `/Register`,
      {
        email: mail,
        password: pass,
        confirmPassword: conpass,
        firstName: fname,
        lastName : lname,
        startWorkingDayText: Sworkdaytext,
        startWorkingDay : Sworkday,
        telNo : phone,
        roleId : rID,


      
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
    return resProjectType.data;
  } catch (e) {
    return e;
  }
};
const GetTimeSheet = async (date) => {
  try {
    const resTimesheet = await axios.get (
      `/TimeSheet?date=` + date,
      axiosConfig
    );
    return resTimesheet.data;
  } catch (e) {
    return e;
  }


};



export default {Login,Register, GetProjectName, GetProjectType, GetTimeSheet};
