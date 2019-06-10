import React from 'react';
import {Input} from 'antd';
const styles = {
  layout: {
    label: {
      width: '25%',
      textAlign: 'end',
      margin: 5,
    },
    input: {
      width: '30%',
    },
    row: {
      display: 'flex',
      margin: 20,
    },
  },
};
export default class ModalDisplay extends React.Component {
  render () {
    const renderContent = t => {
      switch (t) {
        case 'ค่ารักษาพยาบาล':
          return (
            <span>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>ประเภทการป่วย</label>
                <Input
                  style={styles.layout.input}
                  readOnly={true}
                  value={this.props.dataContent.description}
                />
                <label style={{width: 80, textAlign: 'end', margin: 5}}>
                  ประเภทผู้เบิก
                </label>
                <Input
                  style={styles.layout.input}
                  readOnly={true}
                  value={this.props.dataContent.valueBenefitType}
                />
              </div>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>วันที่</label>
                <Input
                  style={styles.layout.input}
                  readOnly={true}
                  value={this.props.dataContent.startDate}
                />
                <label style={{width: 80, textAlign: 'end', margin: 5}}>
                  ถึงวันที่
                </label>
                <Input
                  style={styles.layout.input}
                  value={this.props.dataContent.endDate}
                />
              </div>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>อาการ</label>
                <Input
                  style={styles.layout.input}
                  readOnly={true}
                  value={this.props.dataContent.symptom}
                />
                <label style={{width: 80, textAlign: 'end', margin: 5}}>
                  จำนวนเงิน
                </label>
                <Input
                  style={{width: 200}}
                  readOnly={true}
                  value={this.props.dataContent.value}
                />
                <label style={{margin: 5}}>บาท</label>
              </div>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>ชื่อสถานพยาบาล</label>
                <Input
                  style={styles.layout.input}
                  readOnly={true}
                  value={this.props.dataContent.hospitalname}
                />
              </div>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>เลขที่ใบเสร็จ</label>
                <Input
                  style={{width: 200}}
                  readOnly={true}
                  value={this.props.dataContent.billNumber}
                />
                <label style={{width: 100, textAlign: 'end', margin: 5}}>
                  วันที่ออกใบเสร็จ
                </label>
                <Input
                  style={{width: 200}}
                  readOnly={true}
                  value={this.props.dataContent.billDate}
                />
              </div>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>เอกสารแนบ</label>
                <label style={{margin: 5}}>ใบเสร็จ.jpg</label>
              </div>
            </span>
          );
          break;
        case 'ค่าเดินทาง':
          return (
            <span>
              <div style={styles.layout.row}>
                <label style={styles.layout.label}>จาก</label>
                <Input style={styles.layout.input} readOnly={true} />
                <label style={{margin: 5}}>ถึง</label>
                <Input style={styles.layout.input} readOnly={true} />

              </div>
            </span>
          );
          break;
      }
    };
    console.log ('props', this.props.dataContent);
    return (
      <React.Fragment>
        <div style={styles.layout.row}>
          <label style={styles.layout.label}>ประเภทการเบิก</label>
          <Input
            style={styles.layout.input}
            value={this.props.dataContent.benefitType}
            readOnly={true}
          />
        </div>
        {renderContent (this.props.dataContent.benefitType)}
      </React.Fragment>
    );
  }
}
