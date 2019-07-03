import React from 'react';
import 'antd/dist/antd.css';
import {Table, Divider, Tag, Modal, Button, Input, Icon} from 'antd';
import {inject, observer} from 'mobx-react';
import ModalDisplay from '../Benefit/ModalDisplay';
@inject ('inboxBenefitStore')
@observer
class Inbox extends React.Component {
  state = {
    visible: false,
    content: {},
  };
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Benefit Type',
      dataIndex: 'benefitType',
      key: 'benefitType',
      render: tags => {
        let color = 'geekblue';
        if (tags === 'ค่ารักษาพยาบาล') {
          color = 'green';
        } else if (tags === 'ค่าเดินทาง') {
          color = 'yellow';
        } else if (tags === 'ค่าโทรศัพท์') {
          color = 'aquamarine';
        }

        return (
          <Tag color={color} key={tags}>
            {tags}
          </Tag>
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button
            size="small"
            onClick={() => this.onhandleViewClick (record)}
            style={{backgroundColor: 'powderblue'}}
          >
            <Icon type="search" />
            แสดง
          </Button>
          <Divider type="vertical" />
          <Button
            size="small"
            onClick={() => this.onhandleApproveClick (record)}
            style={{backgroundColor: 'greenyellow'}}
          >
            <Icon type="check-circle" />
            อนุมัติ
          </Button>
          <Divider type="vertical" />
          <Button
            size="small"
            onClick={() => this.onhandleRejectClick (record.key)}
            style={{backgroundColor: 'red'}}
          >
            <Icon type="delete" />
            ไม่อนุมัติ
          </Button>
        </span>
      ),
    },
  ];
  handleOk = e => {
    console.log (e);
    this.setState ({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log (e);
    this.setState ({
      visible: false,
    });
  };
  onhandleViewClick = t => {
    this.setState ({
      visible: true,
      content: t,
    });
  };
  onhandleApproveClick = t => {};
  onhandleRejectClick = t => {};
  render () {
    const {inboxBenefitStore} = this.props;
    return (
      <div
        style={{
          paddingLeft: 70,
          paddingRight: 70,
          paddingTop: 30,
        }}
      >
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <label style={{margin: 5}}>ค้นหา</label>
          <Input style={{width: 200, margin: 5}} />
        </div>
        <Table
          columns={this.columns}
          dataSource={inboxBenefitStore.dataInTable}
          bordered
        />
        <Modal
          title={
            this.state.content.name +
              `, Position: ` +
              this.state.content.position +
              `, Department: ` +
              this.state.content.department
          }
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{paddingLeft: 100, paddingRight: 100}}
          width="550"
        >
          <ModalDisplay dataContent={this.state.content} />
        </Modal>
      </div>
    );
  }
}
export default Inbox;
