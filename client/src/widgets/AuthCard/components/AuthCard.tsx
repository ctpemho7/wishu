import { Card } from '@mui/material';
import { useState } from 'react';
import { LoginForm } from '../../../features/LoginForm';
import RegisterForm from '../../../features/RegisterForm/components/RegisterForm';
import Button from '../../../shared/ui/Button/Button';
import styles from './auth-card.module.scss'


const AuthCard = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    return (
        <Card variant='outlined' className={styles['auth-card']}>
            <Button variant='text' text='Вход' onClick={() => setIsLogin(true)} />
            <Button variant='text' text='Регистрация' onClick={() => setIsLogin(false)} />
            {isLogin ? <LoginForm /> : < RegisterForm />}
        </Card>
    );
};

export default AuthCard;