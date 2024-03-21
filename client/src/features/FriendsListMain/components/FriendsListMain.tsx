// import { Add } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FriendItem from "../../../entites/Friend/components/FriendItem/FriendItem";
import Button from "../../../shared/ui/Button/Button";

import { friedList } from "../model/friendsData";
import styles from './friends-list-main.module.scss'

const FriendsListMain = () => {

    const navigate = useNavigate()

    const handleMoreButtonClick = () => {
        navigate('/friendsList')
    }

    const handleFriendItemClick = useCallback((id: number) => {
        navigate(`/friendProfilePage/${id}`)
    }, [])

    return (
        <div className={styles['friends-list-main']}>
            <div className={styles['friends-list-main_title']}>
                <h3>Мои друзья</h3>
                {/* <IconButton>
                    <Add />
                </IconButton> */}
            </div>
            {
                friedList.slice(0, 3).map(item => <FriendItem key={item.id} item={item} onClick={handleFriendItemClick} />)
            }
            <Button variant='filledTonal' text="Больше" onClick={handleMoreButtonClick} />
        </div>
    );
};

export default FriendsListMain;