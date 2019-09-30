import React from 'react';
import style from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../utils/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

const NewPost = (props) => {

    let onSubmit = (formData) => {
        props.addPost(formData.newPost)
    };
    return (
            <div className={style.newPost}>
                <div className={style.avatar}>
                    <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
                </div>
                <NewPostReduxForm onSubmit={onSubmit}/>
            </div>

    );
};

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength10]} name={"newPost"} component={Textarea}/>
            <button
                className={style.button}
            >Post</button>
        </form>
    )
};
let NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

export default NewPost;
