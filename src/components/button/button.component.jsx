import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpinner
} from './button.styles.jsx';

export const BUTTON_STYLES_TYPES = {
    'base': 'base',
    'google': 'google-sign-in',
    'inverted': 'inverted'
}

const getButton = (buttonStyle = BUTTON_STYLES_TYPES.base) => (
    {
        [BUTTON_STYLES_TYPES.base]: BaseButton,
        [BUTTON_STYLES_TYPES.google]: GoogleSignInButton,
        [BUTTON_STYLES_TYPES.inverted]: InvertedButton,
    }[buttonStyle]
)

const Button = ({ children, buttonStyle, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonStyle);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )
}

export default Button;
