import GiftInfo from "../../entites/Gift/components/GiftInfo/GiftInfo";
import GiftForm from "../../features/GiftForm/GiftForm";
import PresentListForm from "../../features/PresentListForm/PresentListForm";

export const TemplateSelector: { [key: string]: () => JSX.Element } = {
    'GiftInfo': GiftInfo,
    'PresentListForm': PresentListForm,
    'GiftForm': GiftForm,
}