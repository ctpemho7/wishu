import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PresentLists from '../../../features/PresentLists/components/PresentLists';

import { useDialog } from '../../../shared/ui/AppDialog/model/useDialog';
import styles from './present-lists-total.module.scss'

const PresentListsTotal = () => {

    const { show, close } = useDialog()

    const navigate = useNavigate()

    const handleAddButtonClick = () => {
        show({
            component: 'PresentListForm',
            title: '',
            buttons: [
                {
                    caption: 'Сохранить',
                    command: () => null
                },
                {
                    caption: 'Отмена',
                    command: close
                }
            ]
        })
    }

    const handleListItemClick = (id: number) => {
        navigate(`/myGifts/${id}`)
    }

    return (
        <div className={styles['present-lists-total']}>
            <div className={styles['present-lists-total_title']}>
                <h3>Мои списки</h3>
                <IconButton onClick={handleAddButtonClick}>
                    <Add />
                </IconButton>
            </div>

            <PresentLists source={[{ id: 1, name: 'dsds' }]} onPresentListItemClick={handleListItemClick} />
        </div>
    );
};

export default PresentListsTotal;