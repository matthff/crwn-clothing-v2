import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils.js'

import FormInput from "../form-input/form-input.component";
import 
    Button, 
    { BUTTON_STYLES_TYPES } 
from "../button/button.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

            
            resetFormFields();
            goToHomeHandler();
        } catch (error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('incorrect password for email');
                    break;
                case "auth/user-not-found":
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const goToHomeHandler = () => {
        navigate('/');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}/>
                <FormInput 
                    label="Password"
                    type="password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonStyle={BUTTON_STYLES_TYPES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
