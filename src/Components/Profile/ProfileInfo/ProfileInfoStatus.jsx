import React from 'react';

class ProfileInfoStatus extends React.Component {

    state = {
        editMode: false,
        currentValue: this.props.status,
    };

    activateEditMode() {
        this.setState({
            editMode: true,
            currentValue: this.props.status,
        })
    }
    deactivateEditMode() {
        if (this.state.currentValue !== '') {
            this.props.updateUserStatus(this.state.currentValue);
            this.setState({
                editMode: false,
            })
        }
    }
    onInputChange = (e) => {
        this.setState({currentValue: e.currentTarget.value})
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode.bind(this)}>
                            {!this.props.status ? 'noSTATUS' : this.props.status}
                            </span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onInputChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode.bind(this)}
                            value={this.state.currentValue}
                        />
                    </div>}
            </div>
        );
    }
}

export default ProfileInfoStatus;
