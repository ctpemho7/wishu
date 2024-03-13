import Button from "../../../shared/ui/Button/Button";
import Input from "../../../shared/ui/Input/Input";

import styles from './register-form.module.scss'

const RegisterForm = () => {
    return (
        <div className={styles['register-form']}>
            <Input placeholder="Имя" />
            <Input placeholder="Адрес электронной почты" />
            <Input placeholder="Пароль" />
            <Button variant='filled' text="Создать аккаунт" />
        </div>
    );
};

export default RegisterForm;