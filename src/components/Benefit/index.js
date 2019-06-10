import React from 'react';
import Benefit1 from './Benefit1';
import Benefit2 from './Benefit2';
import Benefit3 from './Benefit3';
import Inbox from './inbox';
import {Card, Form, Row, Col, Input, Button, Icon, Select} from 'antd';
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
        return (
          <Card
            style={{
              backgroundColor: 'snow',
              marginTop: 10,
            }}
          >
            <Inbox />
          </Card>
        );
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
      case '3':
        return (
          <Card
            style={{
              backgroundColor: 'snow',
              marginTop: 10,
            }}
          >
            <Benefit3 personalData={this.state.personalData} />
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
          <div
            style={{display: 'flex', justifyContent: 'center', marginTop: 20}}
          >
            <Button
              style={{
                width: 120,
                height: 100,
                marginRight: 5,
                cursor: 'pointer',
              }}
              onClick={() => this.onSelectChange ('0')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon type="table" style={{fontSize: 50}} />
                <label>รายการ</label>
              </div>
            </Button>
            <Button
              style={{
                width: 120,
                height: 100,
                marginRight: 5,
                cursor: 'pointer',
              }}
              onClick={() => this.onSelectChange ('1')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon type="heart" style={{fontSize: 50}} />
                <label>ค่ารักษาพยาบาล</label>
              </div>
            </Button>
            <Button
              style={{
                width: 120,
                height: 100,
                marginRight: 5,
                cursor: 'pointer',
              }}
              onClick={() => this.onSelectChange ('2')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon type="car" style={{fontSize: 50}} />
                <label>ค่าเดินทาง</label>
              </div>
            </Button>
            <Button
              style={{
                width: 120,
                height: 100,
                marginRight: 5,
                cursor: 'pointer',
              }}
              onClick={() => this.onSelectChange ('3')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon type="phone" style={{fontSize: 50}} />
                <label>ค่าโทรศัพท์</label>
              </div>
            </Button>
            <Button
              style={{
                width: 120,
                height: 100,
                marginRight: 5,
                cursor: 'pointer',
              }}
              disabled={true}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon type="car" style={{fontSize: 50}} />
                <label>กองทุน</label>
              </div>
            </Button>
          </div>
          <hr />

          {this.renderBebefitType (this.state.benefitType)}
        </Card>
      </div>
    );
  }
}
export default OverviewBenefit;
