import MaterialInput, { OutlinedInputProps } from '@mui/material-next/OutlinedInput'

const InputStyles = {
    margin: '0.2em'
}

export interface InputProps {
    placeholder?: string
}

const MaterialInputProps: OutlinedInputProps = {
    margin: 'dense',
    size: 'small',
    color: 'secondary'
}

const Input = ({ placeholder }: InputProps) => {
    return (
        <MaterialInput
            placeholder={placeholder}
            label={'dadsd'}
            {...MaterialInputProps}
            sx={InputStyles}
        />
    );
};

export default Input;