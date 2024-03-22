import cipa from '/Users/kataev/Desktop/учеба/4 курс/wishu/client/src/shared/ui/GiftImage/cyplenok.jpg'
import styles from './gift-image.module.scss'

interface GiftImageProps {
    url: string
}

const GiftImage = ({ url }: GiftImageProps) => {
    return (
        <div className={styles['gift-image']}>
            <img src={url ? url : cipa} alt="Circle" />
        </div>
    );
};

export default GiftImage;