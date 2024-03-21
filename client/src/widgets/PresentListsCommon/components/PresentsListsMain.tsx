// import { Add } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PresentLists from "../../../features/PresentLists/components/PresentLists";
import Button from "../../../shared/ui/Button/Button";
import { presentsListsData } from "../model/presentsListsData";

import styles from './presents-lists-main.module.scss'

const PresentListsCommon = () => {

    const navigate = useNavigate()

    const handleMoreButtonClick = () => {
        navigate('/myPresentLists')
    }

    const handleListItemClick = (id: number) => {
        navigate(`/myGifts/${id}`)
    }
    return (
        <div className={styles['presents-lists-main']}>
            <div className={styles['presents-lists-main_title']}>
                <h3>Мои списки</h3>
                {/* <IconButton>
                    <Add />
                </IconButton> */}
            </div>
            <PresentLists source={presentsListsData} isMain={true} onPresentListItemClick={handleListItemClick} />
            <Button variant='filledTonal' text="Больше" onClick={handleMoreButtonClick} />
        </div>
    );
};

export default PresentListsCommon;