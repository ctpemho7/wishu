import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import GiftCard from '../../../entites/gift/components/GiftCard/GiftCard';
import { giftData } from '../model/gitftList.slice';
import styles from './gift-list.module.scss'



const GiftList = () => {
    return (
        <Grid2 container className={styles['gift-list']} spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                giftData.map((item, index) => (
                    <Grid2 xs={2} sm={4} md={4} key={index}>
                        <GiftCard key={item.name} item={item} />
                    </Grid2>
                ))
            }
        </Grid2>
    );
};

export default GiftList;