import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Textarea } from "../../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder='Enter your message'
                    name="newMessageBody"
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
