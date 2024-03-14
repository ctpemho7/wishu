import MaterialInput, { OutlinedInputProps } from '@mui/material-next/OutlinedInput'

const InputStyles = {
    margin: '0.2em'
}

export interface InputProps {
    placeholder?: string
    onChange?: (value: string) => void
}

const MaterialInputProps: OutlinedInputProps = {
    margin: 'dense',
    size: 'small',
    color: 'secondary'
}

const Input = ({ placeholder, onChange }: InputProps) => {
    return (
        <MaterialInput
            placeholder={placeholder}
            label={'dadsd'}
            {...MaterialInputProps}
            sx={InputStyles}
            onChange={(event) => onChange && onChange(event.target.value)}
        />
    );
};

export default Input;