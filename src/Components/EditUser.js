import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phoneNumber: this.props.userEditObject.phoneNumber,
            role: this.props.userEditObject.role,
        }
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    handleChangePhone = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }
    handleChangeRole = (event) => {
        this.setState({ role: event.target.value });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phoneNumber = this.state.phoneNumber;
        info.role = parseInt(this.state.role);
        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus()
        console.log(this.state.phoneNumber);
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <form method="post">
                            <div className="card-border text-white bg-secondary primary mb-3">
                                <div className="card-header text-center">Edit user in system</div>
                                <div className="card-body text-primary">
                                    <div className="mb-3">
                                        <input onChange={(event) => { this.handleChangeName(event) }} defaultValue={this.props.userEditObject.name} type="text" className="form-control" aria-describedby="helpId" placeholder="Username" />
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(event) => { this.handleChangePhone(event) }} defaultValue={this.props.userEditObject.phoneNumber} type="text" className="form-control" aria-describedby="helpId" placeholder="Phone number" />
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={(event) => { this.handleChangeRole(event) }} defaultValue={this.props.userEditObject.role} className="form-select form-select-sm" name="role" aria-label=".form-select-sm example">
                                            <option value>Select role</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input type="button" className="btn btn-block btn-danger" style={{ width: '100%' }} value="Save" onClick={() => this.saveButton()} />
                                    </div>
                                </div>
                            </div >
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;