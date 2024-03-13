import { extendTheme } from "@mui/material-next/styles";
import * as configTheme from './material-theme (fiol).json'


export const theme = extendTheme({
    ref: {
        palette: {
            primary: configTheme.palettes.primary,
            secondary: configTheme.palettes.secondary,
            tertiary: configTheme.palettes.tertiary,
        }
    },
    // colorSchemes: {
    //     light: {
    //         palette: {
    //             background: {
    //                 paper: configTheme.schemes.light.outline
    //             },
    //             primary: {
    //                 main: configTheme.schemes.light.primary
    //             }
    //         }
    //     }
    // },
    // components:{
    //     MuiInput:{
    //         styleOverrides:{

    //         }
    //     }
    // }
});