import { Card } from '@mui/material';
import { CircleImage } from '../../../../shared/ui';
import Button from '../../../../shared/ui/Button/Button';

import { Friend } from '../../model/friend.model';
import styles from './friend-item-with-button.module.scss'

interface FriendItemWithButtonProps {
    item: Friend
    isFriend: boolean
    onItemClick?: (id: number) => void
}

const FriendItemWithButton = ({ item, isFriend = true, onItemClick }: FriendItemWithButtonProps) => {

    const { name, id } = item

    const handleItemClick = () => {
        onItemClick && onItemClick(id)
    }

    return (
        <div onClick={handleItemClick}>
            <Card className={styles['friend-item-with-button']}>
                <CircleImage url={'croll'} />
                <span>{name}</span>
                {
                    !isFriend ? <Button text='Подписаться' variant='filledTonal' /> : null
                }

            </Card>
        </div>

    );
};

export default FriendItemWithButton;