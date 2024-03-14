import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import Button from "../../../shared/ui/Button/Button";
import Input from "../../../shared/ui/Input/Input";
import { login } from "../model/auth.slice";
import styles from './login-form.module.scss'

const LoginForm = () => {

    const dispatch = useDispatch<AppDispatch>()

    const [email, setEmail] = useState<string>('')

    const handleInputChange = (value: string) => {
        setEmail(value)
    }

    const handleButtonClick = () => {
        dispatch(login(email))
    }
    return (
        <div className={styles['login-form']}>
            <Input
                placeholder="Адрес электронной почты"
                onChange={handleInputChange}
            />
            <Input placeholder="Пароль" />
            <Button
                variant='filled'
                text="Войти"
                onClick={handleButtonClick}
            />
        </div>
    );
};

export default LoginForm;