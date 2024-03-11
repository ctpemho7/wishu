import MaterialButton from '@mui/material-next/Button/Button'

interface ButtonProps {
    variant: 'text' | 'outlined' | 'filled' | 'filledTonal' | 'elevated'
}

const Button = ({ variant }: ButtonProps) => {
    return (
        <MaterialButton variant={variant} color='primary'> edede</MaterialButton>
    );
};

export default Button;