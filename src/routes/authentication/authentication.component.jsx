import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';

import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div>
            <div className='sign-forms-container'>
                <SignInForm />
                <SignUpForm />
            </div>
        </div>
    );
}

export default Authentication;
