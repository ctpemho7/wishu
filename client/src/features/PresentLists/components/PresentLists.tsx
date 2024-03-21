import { useMemo } from "react";
import PresentListItem from "../../../entites/PresentList/components/PresentListItem/PresentListItem";
import { PresentList } from "../../../entites/PresentList/model/presentList.model";

interface PresentListsProps {
    source: PresentList[]
    isMain?: boolean
    onPresentListItemClick: (id: number) => void
}

const PresentLists = ({ source, isMain = false, onPresentListItemClick }: PresentListsProps) => {

    const currentSource = useMemo(() => isMain ? source.slice(0, 3) : source, [source, isMain])

    return (
        <>
            {
                currentSource.map(item => <PresentListItem key={item.id} item={item} onClick={onPresentListItemClick} />)
            }
        </>
    );
};

export default PresentLists;