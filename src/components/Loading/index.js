import React from 'react';
import {Spin} from 'antd';

const LoadingSpin = props => {
  return (
    <Spin tip="Loading..." size={props.size} spinning={props.spinning}>
      {props.children}
    </Spin>
  );
};
export default LoadingSpin;
