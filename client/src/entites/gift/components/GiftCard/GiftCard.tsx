import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Card } from '@mui/material';
import image from '../../mocks/cyplenok.jpg'
import { Gift } from '../../model/gift.model';
import styles from './gift-card.module.scss'


interface GiftCardProps {
    item: Gift
    onClick?: (id: number) => void
}

const GiftCard = ({ item, onClick }: GiftCardProps) => {

    const { name, isBook, id } = item

    const handleClick = () => {
        onClick && onClick(id)
    }

    return (
        <div onClick={handleClick}>
            <Card variant='outlined' className={styles['gift-card']}>

                <div className={styles['responsive-image-container']}>
                    <img src={image} alt="Your Image" className={styles['responsive-image']} />
                    {isBook ? <CheckBox /> : <CheckBoxOutlineBlank />}
                </div>

                <span>{name}</span>

            </Card>
        </div>
    );
};

export default GiftCard;