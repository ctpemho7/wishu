import { useParams } from "react-router-dom";
import { GiftList } from "../../../features/GiftList";
import { useDialog } from "../../../shared/ui/AppDialog/model/useDialog";

import styles from './friend-gift-list.module.scss'

const FriendGiftList = () => {

    const { id } = useParams()

    const { show } = useDialog()

    const handleItemClick = () => {

        show({
            title: '',
            component: 'GiftInfo'
        })
    }

    return (
        <div className={styles['friend-gift-list']}>
            <h3>friendName{id}</h3>
            <h4>ListName{id}</h4>
            <GiftList source={[{ id: 1, name: '', isBook: true }]} onGiftItemClick={handleItemClick} />
        </div>
    );
};

export default FriendGiftList;