

// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
//
//
// import './App.css'
// import AppBar from '../shared/ui-kit/AppBar.tsx'
// import {Button, Container, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup,} from "@mui/material";
// import {AccountCircle} from "@mui/icons-material";
//
// import {type SyntheticEvent, useState,} from "react";
//
//
//
// function App() {
// const [userName, setUserName] = useState('');
// const [password, setPassword] = useState('');
// const [isLoading, setLoading] = useState(false);
// const [loginFormName, setloginFormName] = useState('login');
//
// const handleUserNameChange = (e: SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//     setUserName(e.currentTarget.value);
// }
//
// const handlePasswordChange = (e: SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//     setPassword(e.currentTarget.value);
// }
//
// const handleLogin = () =>{
//     console.log(userName, password);
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false);
//     }, 1000);
// }
//
//     const handleChange = (
//         _event: React.MouseEvent<HTMLElement>,
//         newAlignment: string,
//     ) => {
//         setloginFormName(newAlignment);
//     };
//
//   return (
//     <>
//       <AppBar />
//
//       <div style={{marginTop: '100px' }}/>
//         <Container maxWidth={"sm"}>
//             <ToggleButtonGroup
//
//                 size={'small'}
//                 color="primary"
//                 value={loginFormName}
//                 exclusive
//                 onChange={handleChange}
//                 aria-label="Platform"
//                 fullWidth
//                 sx = {{marginBottom: '2'}}
//             >
//                 <ToggleButton value="login">Login</ToggleButton>
//                 <ToggleButton value="register">Register</ToggleButton>
//             </ToggleButtonGroup>
//             { loginFormName === 'login'
//                 ? <Stack spacing={2}>
//           <TextField
//               disabled={isLoading}
//               value={userName}
//               onChange={handleUserNameChange}
//               size={'small'}
//               label="email"
//               variant="filled"
//               slotProps={{
//               input: {
//                   startAdornment: (
//                       <InputAdornment position="start">
//                           <AccountCircle />
//                       </InputAdornment>
//                   ),
//               },
//           }}/>
//           <TextField
//               disabled={isLoading}
//               value={password}
//               onChange={handlePasswordChange}
//               size={'small'}
//               label="password"
//               type={'password'}
//               variant="filled"
//               slotProps={{
//               input: {
//                   startAdornment: (
//                       <InputAdornment position="start">
//                           <AccountCircle />
//                       </InputAdornment>
//                   ),
//               },
//           }}/>
//           <Button
//               loadingPosition={'start'}
//               loading={isLoading}
//               onClick={handleLogin}
//               variant={'contained'}
//           >
//               {isLoading ? 'loading...' : 'Login'}
//           </Button>
//           </Stack>
//                 : <Stack spacing={2}>
//                 <TextField
//                     disabled={isLoading}
//                     value={userName}
//                     onChange={handleUserNameChange}
//                     size={'small'}
//                     label="email"
//                     variant="filled"
//                     slotProps={{
//                         input: {
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <AccountCircle />
//                                 </InputAdornment>
//                             ),
//                         },
//                     }}/>
//                 <TextField
//                     disabled={isLoading}
//                     value={password}
//                     onChange={handlePasswordChange}
//                     size={'small'}
//                     label="password"
//                     type={'password'}
//                     variant="filled"
//                     slotProps={{
//                         input: {
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <AccountCircle />
//                                 </InputAdornment>
//                             ),
//                         },
//                     }}/>
//                 <Button
//                     loadingPosition={'start'}
//                     loading={isLoading}
//                     onClick={handleLogin}
//                     variant={'contained'}
//                 >
//                     {isLoading ? 'loading...' : 'Register'}
//                 </Button>
//             </Stack>}
//
//       </Container>
//     </>
//   )
// }
//
// export default App



import React, { useState } from 'react';
import { Container, Stack, TextField, ToggleButtonGroup, ToggleButton, Button, Typography, Paper } from '@mui/material';
import AppBar from '../shared/ui-kit/AppBar.tsx';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const App = () => {
    const [loginFormName, setLoginFormName] = useState<'login' | 'register'>('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLoginFormChange = (_: React.MouseEvent<HTMLElement>, newForm: 'login' | 'register') => {
        if (newForm) setLoginFormName(newForm);
    };

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log({ username, password, form: loginFormName });
        }, 2000);
    };
    return (
        <div>
            <AppBar />
            <Container maxWidth="sm" sx={{ paddingTop: '80px' }}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Stack spacing={2}>
                        <Typography variant="h5" gutterBottom>
                            {loginFormName === 'login' ? 'Вход' : 'Регистрация'}
                        </Typography>
                        <ToggleButtonGroup
                            value={loginFormName}
                            exclusive
                            onChange={handleLoginFormChange}
                            disabled={isLoading}
                            fullWidth
                            size="small"
                        >
                            <ToggleButton value="login">Вход</ToggleButton>
                            <ToggleButton value="register">Регистрация</ToggleButton>
                        </ToggleButtonGroup>
                        <TextField
                            label="Email"
                            type="email"
                            value={username}
                            onChange={handleUsernameChange}
                            disabled={isLoading}
                            slotProps={{ input: { startAdornment: <AccountCircle /> } }}
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={isLoading}
                            slotProps={{ input: { startAdornment: <LockIcon /> } }}
                            variant="outlined"
                            size="small"
                        />
                        <Button
                            onClick={handleSubmit}
                            loading={isLoading}
                            variant="contained"
                            fullWidth
                        >
                            {loginFormName === 'login' ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
};

export default App;