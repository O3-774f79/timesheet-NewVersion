import React from 'react';
import {Input, Button, Icon, Select, Upload, message} from 'antd';
import {DatePicker} from 'antd';
import {inject, observer} from 'mobx-react';

const {Option} = Select;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange (info) {
    if (info.file.status !== 'uploading') {
      console.log (info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success (`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error (`${info.file.name} file upload failed.`);
    }
  },
};
const styles = {
  radioStyle: {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  },
  layout: {
    label: {
      width: '25%',
      textAlign: 'end',
      margin: 5,
    },
    input: {
      width: '50%',
    },
    row: {
      display: 'flex',
      margin: 20,
    },
  },
};
@inject ('inboxBenefitStore')
@observer
export default class Benefit3 extends React.Component {
  state = {
    benefittype: 'ค่าโทรศัพท์',
    Description: 'OPD',
    moneyTran: 'THB',
    valueBenefitType: 'ผู้ปฎิบัติงาน',
    benefitFor: 'คู่สมรส',
    wifeName: 'นาง ยอดรัก กล้าหาญ',
    childName: 'นาย สมชาย กล้าหาญ',
    moneyValue: 0,
    startDate: '',
    endDate: '',
    billNumber: 0,
    billDate: '',
    hospitalname: '',
    symptom: '',
    personalData: {},
  };
  onHospitalNameChange = e => {
    this.setState ({
      hospitalname: e.target.value,
    });
  };
  onSymptom = e => {
    this.setState ({
      symptom: e.target.value,
    });
  };
  onSelectDesChange = e => {
    this.setState ({Description: e.target.value});
  };
  onChangeStartDatepicker = (t, y) => {
    console.log (t, y);
    this.setState ({startDate: y});
  };
  onChangeEndDatepicker = (t, y) => {
    console.log (t, y);
    this.setState ({endDate: y});
  };
  onChangeBillDatepicker = (t, y) => {
    console.log (t, y);
    this.setState ({billDate: y});
  };
  onChangeBillNumber = e => {
    this.setState ({billNumber: e.target.value});
  };
  onSelectMoneyChange = e => {
    this.setState ({moneyTran: e});
  };
  onSelectbeneChildName = e => {
    this.setState ({childName: e});
  };
  onSelectbenefitForChange = e => {
    this.setState ({
      benefitFor: e,
    });
  };
  onRadioChange = e => {
    console.log ('radio checked', e.target.value);
    this.setState ({
      valueBenefitType: e.target.value,
    });
  };
  onMoneyChange = e => {
    this.setState ({
      moneyValue: e.target.value,
    });
  };
  onHandleClick = () => {
    this.props.inboxBenefitStore.pushDatalist (this.state);
    this.setState ({
      date: '',
      benefittype: 'ค่าโทรศัพท์',
      Description: 'OPD',
      moneyTran: 'THB',
      valueBenefitType: 'ผู้ปฎิบัติงาน',
      benefitFor: 'คู่สมรส',
      wifeName: 'นาง ยอดรัก กล้าหาญ',
      childName: 'นาย สมชาย กล้าหาญ',
      moneyValue: 0,
      startDate: '',
      endDate: '',
      billNumber: 0,
      billDate: '',
      hospitalname: '',
      symptom: '',
    });
    alert (JSON.stringify (this.state));
  };
  componentWillMount () {
    var curday = function (sp) {
      const today = new Date ();
      var dd = today.getDate ();
      var mm = today.getMonth () + 1; //As January is 0.
      var yyyy = today.getFullYear ();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      return dd + sp + mm + sp + yyyy;
    };
    this.setState ({personalData: this.props.personalData, date: curday ('/')});
  }
  render () {
    return (
      <React.Fragment>
        <div style={{marginTop: 20}}>
          <h2 style={{textAlign: 'center'}}>เบิกค่าโทรศัพท์</h2>
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>
              วันที่
            </label>
            <DatePicker onChange={this.onChangeStartDatepicker} />
            <label style={{margin: 5}}>ถึงวันที่</label>
            <DatePicker onChange={this.onChangeEndDatepicker} />
          </div>
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>รายละเอียดค่าใช้จ่าย</label>
            <Input
              style={styles.layout.input}
              value={this.state.symptom}
              onChange={this.onSymptom}
            />
          </div>
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>จำนวนเงิน</label>
            <Input
              style={{width: 100}}
              value={this.state.moneyValue}
              onChange={this.onMoneyChange}
            />
            <Select
              placeholder=""
              onChange={this.onSelectMoneyChange}
              style={{width: 70}}
              value={this.state.moneyTran}
            >
              <Option value="THB">THB</Option>
              <Option value="MMK">MMK</Option>
            </Select>
          </div>
          <div style={styles.layout.row}>
            <label style={styles.layout.label}>เอกสารแนบ</label>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          {this.props.manager
            ? false
            : <div
                style={{
                  display: ' block',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                <Button
                  style={{
                    backgroundColor: 'lawngreen',
                    color: 'black',
                    marginBottom: 5,
                  }}
                  onClick={this.onHandleClick}
                >
                  ส่งอนุมัติ
                </Button>
              </div>}
        </div>
      </React.Fragment>
    );
  }
}
