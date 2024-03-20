import { ArrowForwardIos } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/gifts')
    }

    return (
        <Card className={styles['present-list-item']}>
            <CircleImage url={''} />
            <span>{name}</span>
            <IconButton onClick={handleClick} className={styles['button']}>
                <ArrowForwardIos />
            </IconButton>
        </Card >
    );
};

export default PresentListItem;