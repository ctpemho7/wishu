import MaterialButton from '@mui/material-next/Button/Button'

interface ButtonProps {
    text: string
    variant: 'text' | 'outlined' | 'filled' | 'filledTonal' | 'elevated'
    onClick?: () => void
}

const Button = ({ variant, text, onClick }: ButtonProps) => {
    return (
        <MaterialButton onClick={onClick} variant={variant} color='primary'>{text}</MaterialButton>
    );
};

export default Button;