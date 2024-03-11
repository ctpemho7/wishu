import { extendTheme } from "@mui/material-next/styles";
import * as configTheme from './material-theme.json'


export const theme = extendTheme({
    ref: {
        palette: {
            primary: configTheme.palettes.primary,
            secondary: configTheme.palettes.secondary,
            tertiary: configTheme.palettes.tertiary,
        }
    },
});