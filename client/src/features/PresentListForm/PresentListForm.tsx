import ImageInput from '../../shared/ui/ImageInput/ImageInput';
import Input from '../../shared/ui/Input/Input';
import styles from './present-list-form.module.scss'

const PresentListForm = () => {
    return (
        <div className={styles['present-list-form']}>
            <Input placeholder='Название' />
            <ImageInput />
        </div>
    );
};

export default PresentListForm;