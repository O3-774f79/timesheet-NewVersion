import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
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
        Home
      </div>
    );
  }
};
