import './button.styles.scss';

const BUTTON_STYLES_TYPES = {
    'google': 'google-sign-in',
    'inverted': 'inverted'
}

const Button = ({ children, buttonStyle, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_STYLES_TYPES[buttonStyle]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
