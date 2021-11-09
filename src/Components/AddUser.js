import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phoneNumber: '',
            role: '',
        }
    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    checkStatus = () => {
        if (this.props.showForm === true) {
            return (
                <div className="col-3">
                    <form>
                        <div className="card-border primary mb-3">
                            <div className="card-header text-center">Add member to system</div>
                            <div className="card-body text-primary">
                                <div className="mb-3">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="phoneNumber" className="form-control" aria-describedby="helpId" placeholder="Phone number" />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-sm" name="role" onChange={(event) => this.isChange(event)} aria-label=".form-select-sm example">
                                        <option value>Select role</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="reset" className="btn btn-block btn-primary" style={{ width: '100%' }} value="Add" onClick={(name, phoneNumber, role) => { this.props.add(this.state.name, this.state.phoneNumber, parseInt(this.state.role)) }} />
                                </div>
                            </div>
                        </div >
                    </form>
                </div>


            )
        }
    }


    render() {
        return (
            <React.Fragment>
                {this.checkStatus()}

            </React.Fragment>

        );
    }
}

export default AddUser;