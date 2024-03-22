import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Gift } from '../..';
import GiftCard from '../../../../entites/Gift/components/GiftCard/GiftCard';
import styles from './gift-list.module.scss'

interface GiftListProps {
    source: Gift[]
    onGiftItemClick: (id: number) => void
}

const GiftList = ({ source, onGiftItemClick }: GiftListProps) => {

    const handleGiftItemClick = (id: number) => {
        onGiftItemClick && onGiftItemClick(id)
    }

    return (
        <div className={styles['gift-list']}>
            <Grid2 container className={styles['gift-list']} spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    source.map((item, index) => (
                        <Grid2 xs={2} sm={4} md={4} key={index}>
                            <GiftCard key={item.name} item={item} onClick={handleGiftItemClick} />
                        </Grid2>
                    ))
                }
            </Grid2>
        </div>

    );
};

export default GiftList;