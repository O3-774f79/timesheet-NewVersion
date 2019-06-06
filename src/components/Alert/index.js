import React from 'react';
import {Alert} from 'antd';
import 'antd/dist/antd.css';

const LoginAlert = props => (
  <Alert
    message={props.message}
    type="error"
    closeText="X"
    style={{marginBottom: 5}}
  />
);
export default LoginAlert;
