import { MenuItem } from '@mui/material-next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../app/store';
import { logout } from '../../../LoginForm/model/auth.slice';

interface ProfileMenuItemsListProps {
    handleClose: () => void
}

const ProfileMenuItemsList = ({ handleClose }: ProfileMenuItemsListProps) => {

    const dispatch = useDispatch<AppDispatch>()

    const handleLogOut = () => {
        handleClose()
        dispatch(logout())
    }

    return (
        <>
            <MenuItem onClick={handleClose}>
                {/* <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon> */}
                Хочу подарить
            </MenuItem>
            <MenuItem onClick={handleClose}>
                {/* <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon> */}
                Настройки
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
                {/* <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon> */}
                Выйти
            </MenuItem>
        </>
    );
};

export default ProfileMenuItemsList;