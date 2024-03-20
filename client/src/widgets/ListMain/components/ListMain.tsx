import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { FriendsListMain } from '../../../features/FriendsListMain';
import GiftListsListMain from '../../../features/PresentsListsMain/components/PresentsListsMain';

const MainLists = () => {
    return (
        <Grid2 container spacing={3} columns={{ xs: 1, sm: 2, md: 2 }} justifyContent="center" alignItems="center">
            <Grid2>
                <FriendsListMain />
            </Grid2>
            <Grid2>
                <GiftListsListMain />
            </Grid2>
        </Grid2 >
    );
};

export default MainLists;