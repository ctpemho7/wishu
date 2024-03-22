import { useNavigate } from "react-router-dom";
import PresentLists from "../../../features/PresentLists/components/PresentLists";
import styles from './friend-present-lists.module.scss'

const FriendPresentLists = () => {

    const navigate = useNavigate()

    const handleListItemClick = (id: number) => {
        navigate(`/friendGifts/${id}`)
    }

    return (
        <div className={styles['friend-present-lists']}>
            <h3>Имя друга</h3>
            <PresentLists source={[{ id: 1, name: 'dsds' }]} onPresentListItemClick={handleListItemClick} />
        </div>
    );
};

export default FriendPresentLists;