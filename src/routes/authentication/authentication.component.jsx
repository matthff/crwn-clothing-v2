import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';

import {SignFormsContainer} from './authentication.styles.jsx';

const Authentication = () => {
    return (
        <div>
            <SignFormsContainer>
                <SignInForm />
                <SignUpForm />
            </SignFormsContainer>
        </div>
    );
}

export default Authentication;
