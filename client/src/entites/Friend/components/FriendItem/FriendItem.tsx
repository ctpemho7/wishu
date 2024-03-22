import { ArrowForwardIos } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import { CircleImage } from "../../../../shared/ui";
// eslint-disable-next-line import/no-internal-modules
import croll from '../../mocks/croll.jpeg'
import { Friend } from "../../model/friend.model";

import styles from './friend-item.module.scss'

interface FriendItemProps {
    item: Friend
    onClick?: (id: number) => void
}
const FriendItem = ({ item, onClick }: FriendItemProps) => {

    const { name, id } = item


    const handleClickButton = () => {
        onClick && onClick(id)
    }

    return (
        <Card className={styles['friend-item']}>
            <CircleImage url={croll} />
            <span>{name}</span>
            <IconButton className={styles['button']} onClick={handleClickButton}>
                <ArrowForwardIos />
            </IconButton>
        </Card>
    );
};

export default FriendItem;