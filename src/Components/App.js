import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './data.json';
import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }


  componentWillMount() {
    if (localStorage.getItem('userData') === null) { localStorage.setItem('userData', JSON.stringify(DataUser)) }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({ data: temp });
    }
  }


  changeState = () => {
    this.setState({ stateForm: !this.state.stateForm });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  getNewUserData = (name, phoneNumber, role) => {
    var item = {};
    item.id = uuidv4();;
    item.name = name;
    item.phoneNumber = phoneNumber;
    item.role = role;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(items));
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
    console.log(user)
  }

  changeEditUserStatus = () => {
    this.setState({ editUserStatus: !this.state.editUserStatus });
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, index) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phoneNumber = info.phoneNumber;
        value.role = info.role;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData,
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() {
    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item)
      }

    })
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row" >
              <Search getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} checkConnectionProps={(dl) => this.getTextSearch(dl)} connection={this.changeState} showForm={this.state.stateForm} editUserStatus={this.state.editUserStatus} changeEditUserStatus={() => this.changeEditUserStatus()} userEditObject={this.state.userEditObject} />
              <div className="col-12">
                <hr />
              </div>
              <TableData dataUserProps={result} showForm={this.state.stateForm} editFunc={(user) => this.editUser(user)} changeEditUserStatus={() => this.changeEditUserStatus()} deleteUser={(idUser) => this.deleteUser(idUser)} />
              <AddUser add={(name, phoneNumber, role) => { this.getNewUserData(name, phoneNumber, role) }} showForm={this.state.stateForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;