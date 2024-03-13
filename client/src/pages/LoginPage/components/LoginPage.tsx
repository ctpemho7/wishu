import Grid2 from "@mui/material/Unstable_Grid2";
import { LoginForm } from "../../../features/LoginForm";
import { AuthCard } from "../../../widgets/AuthCard";

import styles from './login-page.module.scss'

const LoginPage = () => {
    return (
        <Grid2 className={styles['login-page']} container alignItems="center" justifyContent="center">
            <Grid2>
                <AuthCard form={<LoginForm />} />
            </Grid2>
        </Grid2>
    );
};

export default LoginPage;