import { ArrowForwardIos } from "@mui/icons-material";
import { Card } from "@mui/material";
import { CircleImage } from "../../../../shared/ui";
import { PresentList } from "../../model/presentList.model";
import styles from './present-list-item.module.scss'

interface PresentListItemProps {
    item: PresentList
}

const PresentListItem = ({ item }: PresentListItemProps) => {

    const {
        name
    } = item

    return (
        <Card className={styles['present-list-item']}>
            <CircleImage url={''} />
            <span>{name}</span>
            <div className={styles['button']}>
                <ArrowForwardIos />
            </div>
        </Card>
    );
};

export default PresentListItem;