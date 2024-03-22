import cipa from './cyplenok.jpg'
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