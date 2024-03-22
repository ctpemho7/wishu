import { ArrowForwardIos } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import { CircleImage } from "../../../../shared/ui";
import { PresentList } from "../../model/presentList.model";
import styles from './present-list-item.module.scss'

interface PresentListItemProps {
    item: PresentList
    onClick: (id: number) => void
}

const PresentListItem = ({ item, onClick }: PresentListItemProps) => {

    const {
        name,
        id
    } = item

    return (
        <Card className={styles['present-list-item']}>
            <CircleImage url={''} />
            <span>{name}</span>
            <IconButton onClick={() => onClick(id)} className={styles['button']}>
                <ArrowForwardIos />
            </IconButton>
        </Card >
    );
};

export default PresentListItem;