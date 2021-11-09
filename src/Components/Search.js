import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            userObject: {}
        }
    }

    showButton = () => {
        if (this.props.showForm === true) {
            return <div className="btn btn-outline-secondary mt-3" style={{ display: 'block' }} onClick={this.props.connection}>Close</div>
        }
        else { return <div className="btn btn-outline-info mt-2" style={{ display: 'block' }} onClick={this.props.connection}>Add</div> }
    }

    isChange = (event) => {
        this.setState({ temp: event.target.value })
        this.props.checkConnectionProps(this.state.temp)
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus === true) { return <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} changeEditUserStatus={() => this.props.changeEditUserStatus()} userEditObject={this.props.userEditObject} /> }
    }

    getUserEditInfo = (info) => {
        this.setState({ userObject: info });
        this.props.getUserEditInfoApp(info)
    }

    render() {
        return (
            <div className="col-12" >
                {this.isShowEditForm()}
                <div className="mb-2">
                    <div className="btn-group col-12">
                        <input type="text" className="form-control" placeholder="Type name..." onChange={(event) => this.isChange(event)} />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectionProps(this.state.temp)}> Search</div>
                    </div>
                    <div className="btn-group1 mt-4">
                        {this.showButton()}
                    </div>
                </div>
            </div >
        );
    }
}

export default Search;