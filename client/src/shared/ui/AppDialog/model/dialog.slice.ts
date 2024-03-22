import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DialogButtons {
    caption: string
    command: () => void
}

interface DialogState {
    title: string
    show: boolean
    buttons: DialogButtons[]
    component: string | null
}

const initialState: DialogState = {
    title: '',
    show: false,
    buttons: [
        {
            caption: 'Ok',
            command: () => null
        }
    ],
    component: null
}

interface ShowDialogProps {
    title: string
    buttons: DialogButtons[]
    component: string
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        showDialog: (state, { payload }: PayloadAction<ShowDialogProps>) => {
            const { title, buttons, component } = payload
            state.show = true
            state.title = title
            state.buttons = buttons
            state.component = component
        },
        closeDialog: (state) => {
            state.show = false
        }
    },
});

export const { showDialog, closeDialog } = dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;