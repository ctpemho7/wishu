import FriendItem from "../../../entites/Friend/components/FriendItem/FriendItem";
import Button from "../../../shared/ui/Button/Button";

import { friedList } from "../model/friendsData";
import styles from './friends-list-main.module.scss'

const FriendsListMain = () => {
    return (
        <div className={styles['friends-list-main']}>
            <h3>Мои друзья</h3>
            {
                friedList.slice(0, 3).map(item => <FriendItem key={item.id} item={item} />)
            }
            <Button variant='filledTonal' text="Больше" />
        </div>
    );
};

export default FriendsListMain;