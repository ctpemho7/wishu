import Button from "../../../shared/ui/Button/Button";
import Input from "../../../shared/ui/Input/Input";
import styles from './login-form.module.scss'

const LoginForm = () => {
    return (
        <div className={styles['login-form']}>
            <Input placeholder="Адрес электронной почты" />
            <Input placeholder="Пароль" />
            <Button variant='filled' text="Войти" />
        </div>
    );
};

export default LoginForm;