import {observable, action} from 'mobx';

class InboxBenefitStore {
  @observable dataInTable = [
    {
      name: 'นาย มั่นคง มุ่งมั่น',
      position: 'programmer',
      department: 'System & Infomation',
      benefitType: 'ค่ารักษาพยาบาล',
      value: 1000,
      description: 'OPD',
      moneyTran: 'บาท',
      valueBenefitType: 'ผู้ปฎิบัติงาน',
      benefitFor: 't.benefitFor',
      wifeName: 't.wifeName',
      childName: 't.childName',
      date: '2019-6-10',
      startDate: '2019-6-10',
      endDate: '2019-6-10',
      billNumber: '111111',
      billDate: '2019-6-10',
      hospitalname: 'โรงบาลไร่ขิง',
      symptom: 'ปวดท้อง',
      transitType: 'รถส่วนตัว',
      lenge: 300,
      status: 'รอการอนุมัติ',
    },
    {
      name: 'นาย มั่นคง มุ่งมั่น',
      position: 'programmer',
      department: 'System & Infomation',
      benefitType: 'ค่าเดินทาง',
      value: 500,
      description: 'OPD',
      moneyTran: 'บาท',
      valueBenefitType: 'ผู้ปฎิบัติงาน',
      benefitFor: 't.benefitFor',
      wifeName: 't.wifeName',
      childName: 't.childName',
      date: '2019-6-10',
      startDate: '2019-6-10',
      endDate: '2019-6-10',
      billNumber: '111111',
      billDate: '2019-6-10',
      hospitalname: 'นครปฐม',
      symptom: 'กรุงเทพ',
      transitType: 'รถส่วนตัว',
      lenge: 70,
      status: 'รอการอนุมัติ',
    },
    {
      name: 'นาย มั่นคง มุ่งมั่น',
      position: 'programmer',
      department: 'System & Infomation',
      benefitType: 'ค่ารักษาพยาบาล',
      value: 1000,
      description: 'OPD',
      moneyTran: 'บาท',
      valueBenefitType: 'ผู้ปฎิบัติงาน',
      benefitFor: 't.benefitFor',
      wifeName: 't.wifeName',
      childName: 't.childName',
      date: '2019-6-10',
      startDate: '2019-6-10',
      endDate: '2019-6-10',
      billNumber: '111111',
      billDate: '2019-6-10',
      hospitalname: 'โรงบาลไร่ขิง',
      symptom: 'ปวดท้อง',
      transitType: 'รถส่วนตัว',
      lenge: 300,
      status: 'รอการอนุมัติ',
    },
    {
      name: 'นาย มั่นคง มุ่งมั่น',
      position: 'programmer',
      department: 'System & Infomation',
      benefitType: 'ค่าโทรศัพท์',
      value: 1000,
      description: 'OPD',
      moneyTran: 'บาท',
      valueBenefitType: 'ผู้ปฎิบัติงาน',
      benefitFor: 't.benefitFor',
      wifeName: 't.wifeName',
      childName: 't.childName',
      date: '2019-6-10',
      startDate: '2019-6-10',
      endDate: '2019-6-10',
      billNumber: '111111',
      billDate: '2019-6-10',
      hospitalname: 'โรงบาลไร่ขิง',
      symptom: 'ปวดท้อง',
      transitType: 'รถส่วนตัว',
      lenge: 300,
      status: 'รอการอนุมัติ',
    },
  ];
  @action pushDatalist (t) {
    console.log (t.benefittype);
    this.dataInTable.push ({
      name: t.personalData.name,
      position: t.personalData.position,
      department: t.personalData.department,
      benefitType: t.benefittype,
      value: t.moneyValue,
      description: t.Description,
      moneyTran: t.moneyTran,
      valueBenefitType: t.valueBenefitType,
      benefitFor: t.benefitFor,
      wifeName: t.wifeName,
      childName: t.childName,
      date: t.date,
      startDate: t.startDate,
      endDate: t.endDate,
      billNumber: t.billNumber,
      billDate: t.billDate,
      hospitalname: t.hospitalname,
      symptom: t.symptom,
      transitType: t.transitType,
      lenge: t.lenge,
    });
  }
}

export default new InboxBenefitStore ();
