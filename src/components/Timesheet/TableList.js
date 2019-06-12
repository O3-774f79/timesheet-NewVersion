import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';
import {FomatDate, CurrentDate} from '../../Helper.js';
const gridStyle = {
  width: '25%',
  textAlign: 'Left',
};

export default class TableList extends PureComponent {
  state = {
    date: [],
    CurrentMonth: '',
  };
  componentWillMount () {
    this.setState ({CurrentMonth: CurrentDate ().substring (3)});
  }

  render () {
    const dateFomat = d => {
      const {day, month, year} = FomatDate (d);
      return `${day} ${month} ${year}`;
    };
    const {CurrentMonth} = this.state;
    const {dataSet} = this.props;
    return (
      <React.Fragment>
        <Card title={CurrentMonth} style={{alignContent: 'left'}}>
          {dataSet.timeSheet.map ((item, index) => (
            <Card.Grid style={gridStyle}>
              <p>
                <b>Date:</b> {dateFomat (item.dateTimeStamp)}
              </p>
              {item.taskList.map ((item, index) => (
                <div key={index}>
                  <p style={{textAlign: 'Left'}}>
                    <b>ProjectCode:</b> {item.projectCode}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>Type:</b> {item.typeCode}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>WorkingHours:</b> {item.workingHours}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>Description:</b> {item.description}
                  </p>
                  <hr />
                </div>
              ))}
            </Card.Grid>
          ))}

        </Card>,
      </React.Fragment>
    );
  }
}
