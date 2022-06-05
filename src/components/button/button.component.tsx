import { FC, ButtonHTMLAttributes } from 'react';
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpinner
} from './button.styles';

type ButtonComponentProps = {
    buttonStyle?: BUTTON_STYLES_TYPES,
    isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum BUTTON_STYLES_TYPES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
}

const getButton = (buttonStyle = BUTTON_STYLES_TYPES.base): typeof BaseButton => (
    {
        [BUTTON_STYLES_TYPES.base]: BaseButton,
        [BUTTON_STYLES_TYPES.google]: GoogleSignInButton,
        [BUTTON_STYLES_TYPES.inverted]: InvertedButton,
    }[buttonStyle]
)

const Button: FC<ButtonComponentProps> = ({ children, buttonStyle, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonStyle);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )
}

export default Button;
