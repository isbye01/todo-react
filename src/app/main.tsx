// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import CssBaseline from '@mui/material/CssBaseline'
// import {ThemeProvider, createTheme} from "@mui/material";
//
//
//
// const theme = createTheme({
//     colorSchemes:{
//         dark:true,
//     }
// })
//
// createRoot(document.getElementById('root')!).render(
//     <>
//
//         <ThemeProvider theme={theme}>
//             <CssBaseline/>
//             <App/>
//         </ThemeProvider>
//     </>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    colorSchemes:{
        dark:true,
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.Fragment>
);
