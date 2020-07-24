import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post/Post';
import styles from './MyPosts.module.css';

import { Textarea } from "../../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        name="newPostText"
                        component={Textarea}
                        placeholder={"Post message"}
                        validate={[required, maxLength10]}
                    />
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
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;