import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post/Post';
import s from './MyPosts.module.css';

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={"textarea"} name={"newPostText"} placeholder={"enter post text"} />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostsForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map((post, index) => <Post key={`${index}${post.message}`} message={post.message} likesCount={post.likesCount} />);

    let addPost = (values) => {
        console.log(values)
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;