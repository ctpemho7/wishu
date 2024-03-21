import { useState } from 'react';
import FriendsList from '../../../features/FriendsList/components/FriendsList';
import { SearchBar } from '../../../features/SearchBar';

import styles from './friends.module.scss'

const Friends = () => {

    const [searchText, setSearchText] = useState('')

    const handleClickSearchButton = (value: string) => {
        console.log(value)
    }

    const handleSearchInput = (value: string) => {
        setSearchText(value)
    }

    return (
        <div className={styles['friends']}>
            <h3>Мои друзья</h3>
            <SearchBar onClick={handleClickSearchButton} onChange={handleSearchInput} />
            <FriendsList searchText={searchText} />
        </div>
    );
};

export default Friends;