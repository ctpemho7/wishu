import GiftImage from '../../../../shared/ui/GiftImage/GiftImage';
import styles from './gift-info.module.scss'

const GiftInfo = () => {
    return (
        <div className={styles['gift-info']}>
            <h4>Название</h4>
            <GiftImage url='' />
            <span>Гду купить</span>
            <span>Подробнее</span>
        </div>
    );
};

export default GiftInfo;