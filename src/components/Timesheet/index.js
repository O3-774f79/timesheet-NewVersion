import React, {PureComponent} from 'react';
import List from './List';
import TableList from './TableList';
import {
  Modal,
  Button,
  Icon,
  Input,
  DatePicker,
  Select,
  Spin,
  Divider,
} from 'antd';
import {CurrentDate, FomatDate} from '../../Helper.js';

import axios from 'axios';
import {observer, inject} from 'mobx-react';
const axiosConfig = {withCredentials: true};
const Option = Select.Option;
const {TextArea} = Input;

@inject ('uiStore', 'timeSheet')
@observer
export default class idnex extends PureComponent {
  state = {
    term: {
      data1: '',
    },
    taskList: [],
    items: [],
    dataSet: {
      timeSheet: [],
    },
    dataSend: {
      isSubmit: false,
      dateTimeStamp: '',
      timeSheet: [],
    },
    inputActivity: [],
    valueActivity: {
      projectCode: '',
      typeCode: '',
      workingHours: 0,
      description: '',
    },
    inputProjectName: 'Please Select',
    inputProjectType: 'Please Select',
    inputWorkHours: 'Please Select',
    inputDescription: '',

    workHours: [],
    projectName: [],
    projectTypes: [],
    datePicker: '',
    datepickerDisplay: false,
    spinLoading: true,
    currentDate: '',
    loading: false,
    visible: false,
    display: 0,
  };
  async componentDidMount () {
    const date = new Date ().toJSON ().slice (0, 10);
    try {
      await this.props.timeSheet.TimesheetList (date);
      await console.log (`did moun`, this.props.timeSheet.loading);
      await console.log (`did moun`, this.props.timeSheet.timesheetList);
      // const resTimesheet = await axios.get (
      //   `/TimeSheet?date=` + date,
      //   axiosConfig
      // );
      await this.setState ({
        // dataSet: resTimesheet.data,
        spinLoading: false,
      });
    } catch (e) {
      console.log (e);
    }
  }
  async componentWillMount () {
    var data = await [];
    for (let i = 0; i <= 16; i++) {
      await data.push (i);
    }
    await this.setState ({
      currentDate: CurrentDate (),
      workHours: data,
    });
  }
  onChange = event => {
    this.setState ({
      term: {
        data1: event.target.value,
      },
    });
  };
  changeDisplay = p => {
    p === 1 ? this.setState ({display: 0}) : this.setState ({display: 1});
  };
  showModal = () => {
    this.setState ({visible: true});
  };
  handleCancel = () => {
    this.setState ({visible: false});
  };
  onSubmit = async event => {
    await event.preventDefault ();
    await this.state.items.push (this.state.term);
    await this.setState ({
      term: {
        data1: '',
      },
    });
    await alert (JSON.stringify (this.state.items));
  };
  onChangDatePicher = (date, dateString) => {
    this.setState ({datePicker: dateString});
  };
  DateFomat = d => {
    if (d === '') {
      return '';
    } else {
    }
    const {day, month, year} = FomatDate (d);
    return `Date :${day} ${month} ${year}`;
  };
  handleActivityAdd = async event => {
    await event.preventDefault ();
    await this.setState ({
      valueActivity: {
        projectCode: this.state.inputProjectName,
        typeCode: this.state.inputProjectType,
        workingHours: parseInt (this.state.inputWorkHours),
        description: this.state.inputDescription,
      },
    });
    await this.state.inputActivity.push (this.state.valueActivity);
    await this.setState ({
      valueActivity: {
        projectCode: '',
        typeCode: '',
        workHoursTotal: '',
        description: '',
      },
      inputProjectName: 'Please Select',
      inputProjectType: 'Please Select',
      inputWorkHours: 'Please Select',
      datepickerDisplay: true,
      inputDescription: '',
    });
    await console.log (this.state.inputActivity);
  };
  handleSubmit = async () => {
    try {
      await this.setState ({
        dataSend: {
          isSubmit: false,
          timeSheet: [
            {
              dateTimeStamp: this.state.datePicker,
              taskList: this.state.inputActivity,
            },
          ],
        },
      });
      await console.log (`sendPOST`, JSON.stringify (this.state.dataSend));
      const data = await axios.post (
        `/TimeSheet/Save`,
        this.state.dataSend,
        axiosConfig
      );
      console.log (data);
    } catch (e) {
      console.log ('err', e);
    }
  };
  onMonthPickerChange = (a, b) => {
    console.log ('month', b);
  };
  onDescriptionChange = event => {
    this.setState ({inputDescription: event.target.value});
  };
  onProjectChange = value => {
    this.setState ({inputProjectName: value});
    console.log (`selected ${value}`);
  };
  onWorkhoursChange = value => {
    this.setState ({inputWorkHours: value});
    console.log (`selected ${value}`);
  };
  onTypeChange = value => {
    this.setState ({inputProjectType: value});
    console.log (`selected ${value}`);
  };
  render () {
    const {visible, loading, currentDate, display} = this.state;
    return (
      <React.Fragment>
        <Spin spinning={this.state.spinLoading}>
          <div style={{backgroundColor: '#ECECEC'}}>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
            >
              <span>
                <Button style={{color: 'black'}} onClick={this.showModal}>
                  <Icon style={{fontSize: 15}} type="plus-circle" />
                  Add
                </Button>
              </span>
              <span style={{color: 'black', marginBottom: 8}}>
                <Button
                  style={{marginRight: 3}}
                  onClick={() => this.changeDisplay (1)}
                >
                  <Icon type="idcard" />Card
                </Button>
                <Button onClick={() => this.changeDisplay (0)}>
                  <Icon type="table" />Table
                </Button>
              </span>
            </div>
            <div
              style={{
                paddingLeft: '30px',
                paddingRight: '30px',
                paddingBottom: '30px',
              }}
            >
              {display === 0
                ? <List
                    items={this.state.items}
                    currentDate={currentDate}
                    data={this.state.dataSet}
                  />
                : <TableList
                    currentDate={currentDate}
                    dataSet={this.state.dataSet}
                  />}
            </div>
            <Modal
              visible={visible}
              title={
                'Add Activity ' + `${this.DateFomat (this.state.datePicker)}`
              }
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>,
              ]}
            >

              {this.state.inputActivity.map ((item, index) => (
                <div key={index}>
                  <p>ProjectName:{item.projectCode}</p>
                  <p>ProjectType:{item.projectType}</p>
                  <p>WorkHours  :{item.workHoursTotal}</p>
                  <p>Description:{item.description}</p>
                  <Divider />
                </div>
              ))}
              <div>
                <div>
                  <DatePicker
                    style={{width: 200}}
                    onChange={this.onChangDatePicher}
                    disabled={this.state.datepickerDisplay}
                  />
                </div>
                <div>
                  <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Project Name"
                    onChange={this.onProjectChange}
                    value={this.state.inputProjectName}
                    onFocus={this.onProjectFocus}
                    onBlur={this.onProjectBlur}
                  >

                    {this.props.uiStore.projectName.map ((item, key) => (
                      <Option key={key} value={item.valueKey}>
                        {item.valueText}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    style={{width: 200}}
                    placeholder="Project Type"
                    onChange={this.onTypeChange}
                    value={this.state.inputProjectType}
                    onFocus={this.onTypeFocus}
                    onBlur={this.onTypeBlur}
                  >
                    {this.props.uiStore.projectName.map ((item, key) => (
                      <Option key={key} value={item.valueKey}>
                        {item.valueText}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    style={{width: 200}}
                    placeholder="Workhours"
                    onChange={this.onWorkhoursChange}
                    onFocus={this.onWorkhoursFocus}
                    onBlur={this.onWorkhoursBlur}
                    value={this.state.inputWorkHours}
                  >
                    {this.state.workHours.map ((item, key) => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <TextArea
                    rows={4}
                    onChange={this.onDescriptionChange}
                    value={this.state.inputDescription}
                  />
                </div>
              </div>
              <Button
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={this.handleActivityAdd}
              >
                <Icon
                  style={{fontSize: 20, color: 'black'}}
                  type="plus-circle"
                />
              </Button>
            </Modal>
          </div>
        </Spin>
      </React.Fragment>
    );
  }
}
