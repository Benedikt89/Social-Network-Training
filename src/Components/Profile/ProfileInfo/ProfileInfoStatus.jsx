import React, {useState, useEffect} from 'react';


const ProfileInfoStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [currentInput, setCurrentInput] = useState(props.status);

    useEffect( () => {
        setCurrentInput(props.status);
    }, [props.status]);

    let activateEditMode =() => {
        setEditMode(true);
    };
    let deactivateEditMode=() => {
        if (currentInput !== '') {
            setEditMode(false);
            props.updateUserStatus(currentInput);
        }else {
            setEditMode(true);
        }
    };
    let onInputChange = (e) => {
        setCurrentInput(e.currentTarget.value);
    };


    return (

        <div>
            {!editMode &&
            <div>
                        <span
                            onDoubleClick={activateEditMode}>
                            {!props.status ? 'noSTATUS' : props.status}
                            </span>
            </div>}
            {editMode &&
            <div>
                <input
                    onChange={onInputChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={currentInput}
                />
            </div>}
        </div>
    )
};

export default ProfileInfoStatus;