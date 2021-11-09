import React, { Component } from 'react';
import TableDataRows from './TableDataRows';

class TableData extends Component {
    deleteButtonClick = (idUser) => { this.props.deleteUser(idUser) };
    mappingDataUser = () => this.props.dataUserProps.map((value, index) => (
        < TableDataRows userName={value.name} key={index} role={value.role} phoneNumber={value.phoneNumber} id={value.id} index={index} editFuncClick={(user) => this.props.editFunc(value)} changeEditUserStatus={() => this.props.changeEditUserStatus()} deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} />
    ))

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Full name</th>
                            <th>Phone number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>)
    }
}

export default TableData;