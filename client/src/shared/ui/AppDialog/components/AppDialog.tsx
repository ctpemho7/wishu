import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { TemplateSelector } from "../../../../app/lib/templateSelector";
import { useTypedSelector } from "../../../../app/store";
import Button from "../../Button/Button";

const AppDialog = () => {

    const { show, title, buttons, component } = useTypedSelector(state => state.dialog)

    return (
        <div>
            <Dialog open={show} >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {
                        React.createElement(component ? TemplateSelector[component] : 'div')
                    }
                </DialogContent>
                <DialogActions>
                    {
                        buttons.map((item, index) =>
                            <Button
                                text={item.caption}
                                key={index}
                                variant='filled'
                                onClick={item.command}
                            />
                        )
                    }

                </DialogActions>
            </Dialog >
        </div>
    );
};

export default AppDialog;