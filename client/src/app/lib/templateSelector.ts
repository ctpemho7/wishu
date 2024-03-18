import GiftInfo from "../../entites/gift/components/GiftInfo/GiftInfo";

export const TemplateSelector: { [key: string]: () => JSX.Element } = {
    'GiftInfo': GiftInfo,
}