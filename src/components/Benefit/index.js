import React from 'react';
import Benefit1 from './Benefit1';
import Benefit2 from './Benefit2';
import {Card} from 'antd';

import {Form, Row, Col, Input, Button, Icon, Select} from 'antd';
const {Option} = Select;

const styles = {
  layout: {
    label: {
      width: '35%',
      textAlign: 'end',
      margin: 5,
    },
    input: {
      width: '20%',
    },
    row: {
      display: 'flex',
      margin: 5,
    },
  },
};
class OverviewBenefit extends React.Component {
  state = {
    benefitType: '0',
    personalData: {
      name: 'นาย มากมี กล้าหาญ',
      position: 'Programmer',
      department: 'System & Infomation',
    },
  };
  onSelectChange = e => {
    console.log (e);
    this.setState ({
      benefitType: e,
    });
  };
  renderBebefitType = t => {
    console.log (t, '2', typeof t);
    switch (t) {
      case '0':
        return false;
        break;
      case '1':
        return (
          <Card
            style={{
              backgroundColor: 'snow',
              marginTop: 10,
            }}
          >
            <Benefit1 personalData={this.state.personalData} />
          </Card>
        );
        break;
      case '2':
        return (
          <Card
            style={{
              backgroundColor: 'snow',
              marginTop: 10,
            }}
          >
            <Benefit2 personalData={this.state.personalData} />
          </Card>
        );
        break;
    }
  };
  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card
          style={{width: '70%', padding: 20, backgroundColor: 'lemonchiffon'}}
        >
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>Name</label>
            <Input
              style={styles.layout.input}
              value={this.state.personalData.name}
              readOnly={true}
            />
            <label style={{margin: 5}}>Position</label>
            <Input
              style={styles.layout.input}
              value={this.state.personalData.position}
              readOnly={true}
            />
          </div>
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>Department</label>
            <Input
              style={styles.layout.input}
              value={this.state.personalData.department}
              readOnly={true}
            />
          </div>
          <div style={{display: 'flex'}}>
            <label style={styles.layout.label}>Benefit Type</label>
            <Select
              placeholder="Please select Benefit Type"
              onChange={this.onSelectChange}
              style={{width: 200, margin: 5}}
            >
              <Option value="0">Plaese Select</Option>
              <Option value="1">ค่ารักษาพยาบาล</Option>
              <Option value="2">ค่าเดินทาง</Option>
              <Option value="3">ค่าโทรศัพ</Option>
              <Option value="4">กองทุน</Option>
            </Select>
          </div>
          <hr />

          {this.renderBebefitType (this.state.benefitType)}
        </Card>
      </div>
    );
  }
}
export default OverviewBenefit;
