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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
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