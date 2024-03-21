
import { Home } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from '../../../features/ProfileMenu/components/ProfileMenu/ProfileMenu';
import styles from './top-menu.module.scss'

const TopMenu = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/main')
    }

    return (
        <div className={styles['top-menu']}>
            <IconButton onClick={handleClick}>
                <Home />
            </IconButton>
            <ProfileMenu />
        </div>
    );
};

export default TopMenu;