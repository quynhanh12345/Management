import React, { Component } from 'react';

class TableDataRows extends Component {
    roleShow = () => {
        if (this.props.role === 1) { return "Admin"; }
        else if (this.props.role === 2) { return "Moderator"; }
        else { return "Member"; }
    }

    editClick = () => { this.props.editFuncClick(); this.props.changeEditUserStatus() }

    deleteButtonClick = (idUser) => { this.props.deleteButtonClick(idUser) }

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phoneNumber}</td>
                <td>{this.roleShow()}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn-warning edit" onClick={() => this.editClick()}><i className="fas fa-edit" /></button>
                        <button className="btn-danger remove" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fas fa-trash-alt" /></button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRows;