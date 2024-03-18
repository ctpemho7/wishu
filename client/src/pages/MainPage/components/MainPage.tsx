import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GiftList } from "../../../widgets/GiftList";

const MainPage = () => {
    return (
        <Grid2>
            <Grid2>
                <GiftList />
            </Grid2>
            <Grid2 />
        </Grid2>
    );
};

export default MainPage;