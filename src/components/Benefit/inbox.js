import React from 'react';
import {Table, Tag} from 'antd';
import {inject, observer} from 'mobx-react';
const columns = [
  {
    title: 'ประเภท',
    dataIndex: 'benefitType',
    key: 'benefitType',
  },
  {
    title: 'วันที่ขอ',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'จำนวนเงิน',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color = 'geekblue';
      if (status === 'อนุมัติ') {
        color = 'green';
      } else if (status === 'รอการอนุมัติ') {
        color = 'yellow';

        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      }
    },
  },
];
@inject ('inboxBenefitStore')
@observer
class Inbox extends React.Component {
  render () {
    return (
      <Table
        dataSource={this.props.inboxBenefitStore.dataInTable}
        columns={columns}
      />
    );
  }
}
export default Inbox;
