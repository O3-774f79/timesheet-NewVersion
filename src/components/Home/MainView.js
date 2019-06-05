import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom'
import { parse as qsParse } from 'query-string';

@inject( 'commonStore', 'userStore')
@withRouter
@observer
export default class MainView extends React.Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentDidUpdate(previousProps) {
  }


  render() {
    return (
      <div className="col-md-9">
      </div>
    );
  }
};
