import React from 'react';
import style from './NewPost.module.css'


const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onKeyAdd = (e) => {
        if (e.key === 'Enter') {
            onAddPost();
        }
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.postChange(text);
    };

    let onAddPost = () => {
        props.addPost();
    };

    return (

            <div className={style.newPost}>

                <div className={style.avatar}>
                    <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
                </div>

                <textarea className={style.text}
                          ref={newPostElement}
                          onKeyPress={onKeyAdd}
                          onChange={onPostChange}
                          value={props.newPostText}/>


                <button
                    className={style.button}
                        onClick={ onAddPost }
                >Post</button>


            </div>

    );
};


export default NewPost;
