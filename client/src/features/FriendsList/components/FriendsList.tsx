import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FriendItemWithButton from '../../../entites/Friend/components/FriendItemWithButton/FriendItemWithButton';
import { friendsList } from '../models/friendsList.model';
import styles from './friends-list.module.scss'

interface FriendsListProps {
    searchText?: string
}

const FriendsList = ({ searchText }: FriendsListProps) => {

    const [data, setData] = useState(friendsList)

    const navigate = useNavigate()

    useEffect(() => {
        if (searchText?.length)
            setData(friendsList.filter(item => item.name.includes(searchText)))
        else {
            setData(friendsList)
        }
    }, [searchText])

    const handleItemClick = (id: number) => {
        navigate(`/friendProfilePage/${id}`)
    }

    return (
        <div className={styles['friends-list']}>
            {
                data.length
                    ? data.map(item => <FriendItemWithButton key={item.id} item={item} isFriend onItemClick={handleItemClick} />)
                    : <span>Упссс...Кажется такого друга нет...Нажмите <Search /> для поиска</span>
            }
        </div>
    );
};

export default FriendsList;