import React from 'react';
import {Card, Icon} from 'antd';
import {FomatDate} from '../../Helper.js'
const DateFomat = d => {
  const {day,month,year} = FomatDate(d)
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <p style={{fontSize: 50, height: 10}}>{day}</p>
      </div>
      <div>
        {' '}     <p style={{alignItems: 'flex-end', fontSize: 16}}>{month}</p>
        {' '}     <p style={{alignItems: 'flex-end', fontSize: 16}}>{year}</p>

      </div>
    </div>
  );
};
const List = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      // background: '#ECECEC',
    }}
  >
    {props.data.timeSheet.map ((item, index) => (
      <div key={index}>
        <Card
          key={index}
          bordered={true}
          style={{width: 300, margin: 8}}
          actions={[
            <Icon type="edit" onClick={() => alert (props.currentDate)} />,
          ]}
        >
          <p>{DateFomat (item.dateTimeStamp)}</p>
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
        </Card>
      </div>
    ))}
    {props.items.map ((item, index) => <p>{item.data1}</p>)}
  </div>
);

export default List;
