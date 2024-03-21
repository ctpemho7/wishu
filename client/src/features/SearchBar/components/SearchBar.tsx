import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';

import styles from './search-bar.module.scss'

interface SearchBarProps {
    onClick?: (value: string) => void
    onChange?: (value: string) => void
}

const SearchBar = ({ onClick, onChange }: SearchBarProps) => {

    const [inputText, setInputText] = useState<string>('')

    const handleInput = (value: string) => {
        setInputText(value)
        onChange && onChange(value)
    }

    const handleClick = () => {
        onClick && onClick(inputText)
    }

    return (
        <div className={styles['search-bar']}>
            <Input onChange={handleInput} />
            <IconButton onClick={handleClick}>
                <Search />
            </IconButton>
        </div>
    );
};

export default SearchBar;