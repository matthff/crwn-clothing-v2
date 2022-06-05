import { ChangeEvent, FormEvent, useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password.toLowerCase() !== confirmPassword.toLowerCase()){
            alert("Password not match");
            return;
        } 

        try {
            const userCredentials = await createAuthUserWithEmailAndPassword(email, password);
            
            if(userCredentials){
                await createUserDocumentFromAuth(userCredentials.user, { displayName });
            }
        
            resetFormFields();
        } catch (error) {
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Cannot create user, email alredy in use');
            }
            console.log('User creation encountered an error', error);
        }
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up using your e-mail and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name" 
                    type="text" 
                    required
                    name="displayName" 
                    onChange={handleChange} 
                    value= {displayName}
                />
                <FormInput 
                    label="Email" 
                    type="email" 
                    required
                    name="email" 
                    onChange={handleChange} 
                    value= {email}
                />
                <FormInput 
                    label="Password" 
                    type="password" 
                    required
                    name="password" 
                    onChange={handleChange} 
                    value= {password}
                />
                <FormInput 
                    label="Confirm Password" 
                    type="password" 
                    required
                    name="confirmPassword" 
                    onChange={handleChange} 
                    value= {confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;
