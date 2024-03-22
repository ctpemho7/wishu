import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { GiftList } from "../../../features/GiftList";
import { useDialog } from "../../../shared/ui/AppDialog/model/useDialog";

import styles from './my-gift-list.module.scss'

const MyGiftList = () => {

    const { id } = useParams()

    const { show, close } = useDialog()

    const handleGiftItemClick = () => {
        show({
            title: '',
            component: 'GiftForm',
            buttons: [
                {
                    caption: 'Сохранить',
                    command: () => null
                },
                {
                    caption: 'Отменить',
                    command: close
                }
            ]
        })
    }

    const handleAddGiftButton = () => {
        show({
            title: '',
            component: 'GiftForm',
            buttons: [
                {
                    caption: 'Сохранить',
                    command: () => null
                },
                {
                    caption: 'Отменить',
                    command: close
                }
            ]
        })
    }

    return (
        <div className={styles['my-gift-list']}>
            <h3>Мои списки</h3>
            <div className={styles['my-gift-list_title']}>
                <h3>listName{id}</h3>
                <IconButton onClick={handleAddGiftButton}>
                    <Add />
                </IconButton>
            </div>
            <GiftList source={[{ id: 1, name: '', isBook: true }]} onGiftItemClick={handleGiftItemClick} />
        </div>
    );
};

export default MyGiftList;