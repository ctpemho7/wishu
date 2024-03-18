import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../app/store"
import { DialogButtons, closeDialog, showDialog } from "./dialog.slice"

export const useDialog = () => {

    const dispatch = useDispatch<AppDispatch>()

    const show = (params: { component: string, title: string, buttons?: DialogButtons[] }) => {
        const { component, title, buttons } = params
        dispatch(showDialog({
            title: title,
            component,
            buttons: buttons ? buttons : [
                {
                    caption: 'Закрыть',
                    command: () => { dispatch(closeDialog()) }
                }
            ]
        }))
    }

    const close = () => {
        dispatch(closeDialog())
    }

    return {
        show,
        close
    }
}