import ImageInput from "../../shared/ui/ImageInput/ImageInput";
import Input from "../../shared/ui/Input/Input";

import styles from './gift-form.module.scss'

const GiftForm = () => {
    return (
        <div className={styles['gift-form']}>
            <Input placeholder="Название" />
            <ImageInput />
            <Input placeholder="Где купить" />
            <Input placeholder="Подробнее" />
        </div>
    );
};

export default GiftForm;