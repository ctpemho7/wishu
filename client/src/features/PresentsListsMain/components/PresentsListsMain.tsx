import PresentListItem from "../../../entites/PresentList/components/PresentListItem/PresentListItem";
import Button from "../../../shared/ui/Button/Button";
import { presentsListsData } from "../model/presentsListsData";

import styles from './presents-lists-main.module.scss'

const GiftListsListMain = () => {
    return (
        <div className={styles['presents-lists-main']}>
            <h3>Мои списки</h3>
            {
                presentsListsData.slice(0, 3).map(item => <PresentListItem key={item.id} item={item} />)
            }
            <Button variant='filledTonal' text="Больше" />
        </div>
    );
};

export default GiftListsListMain;