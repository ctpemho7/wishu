import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import FriendItemWithButton from '../../../entites/Friend/components/FriendItemWithButton/FriendItemWithButton';
import { friendsList } from '../models/friendsList.model';
import styles from './friends-list.module.scss'

interface FriendsListProps {
    searchText?: string
}

const FriendsList = ({ searchText }: FriendsListProps) => {

    const [data, setData] = useState(friendsList)

    useEffect(() => {
        if (searchText?.length)
            setData(friendsList.filter(item => item.name.includes(searchText)))
        else {
            setData(friendsList)
        }
    }, [searchText])

    return (
        <div className={styles['friends-list']}>
            {
                data.length
                    ? data.map(item => <FriendItemWithButton key={item.id} item={item} isFriend />)
                    : <span>Упссс...Кажется такого друга нет...Нажмите <Search /> для поиска</span>
            }
        </div>
    );
};

export default FriendsList;