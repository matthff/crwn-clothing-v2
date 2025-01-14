import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import FormInput from "../form-input/form-input.component";
import 
    Button, 
    { BUTTON_STYLES_TYPES } 
from "../button/button.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
            goToHomeHandler();
        } catch (error) {
            console.log('User Sign In failed', error)
        }
    }

    const goToHomeHandler = () => {
        navigate('/');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonStyle={BUTTON_STYLES_TYPES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;
