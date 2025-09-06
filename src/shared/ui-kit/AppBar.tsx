// import {
//   AppBar,
//   Box,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Avatar,
//   Stack,
//   Tooltip,
//   RadioGroup,
//   Radio,
//   FormControl,
//   FormControlLabel,
//   useColorScheme,
// } from '@mui/material'
// import {Menu, Nightlight, WbSunny} from '@mui/icons-material'
//
//
//
//
//
// const ButtonAppBar = () => {
//
//   const {mode,setMode} = useColorScheme();
//   if (!mode){
//       return null
//   }
//
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}>
//             <Menu/>
//           </IconButton>
//           <Stack direction={'row'} spacing={2} style={{ flexGrow: 1 }}>
//             <Typography variant="h6" component="div">
//               Todos
//             </Typography>
//             <Typography variant="h6" component="div">
//               About
//             </Typography>
//           </Stack>
//           <Stack direction={'row'} spacing={2}>
//             <FormControl>
//               <RadioGroup
//                   aria-labelledby={'demo-theme-toggle'}
//                   name={'theme-toggle'}
//                   row
//                   value={mode}
//                   onChange={(event)=>setMode(event.target.value as 'dark' | 'light')}>
//                 <FormControlLabel control={<Radio/>} value={'light'} label={<WbSunny sx={{display : 'block'}}/>}/>
//                 <FormControlLabel control={<Radio />} value={'dark'} label={<Nightlight sx={{display : 'block'}}/>}/>
//
//               </RadioGroup>
//
//             </FormControl>
//           </Stack>
//             <div >
//
//             </div>
//           <Button color="inherit">Login</Button>
//           <Tooltip title={'User'}>
//             <Avatar src={''} />
//           </Tooltip>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   )
// }
//
// export default ButtonAppBar



import { AppBar as MuiAppBar, Toolbar, Typography, Button, Avatar, Tooltip } from '@mui/material';
import {Stack, FormControl, FormControlLabel, RadioGroup, Radio, useColorScheme} from "@mui/material";
import {WbSunny, Nightlight} from "@mui/icons-material";

const AppBar = () => {
  const {mode,setMode} = useColorScheme();
    if (!mode){
      return null
  }

  return (
      <MuiAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">To Do's</Button>
              <Button color="inherit">About</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <FormControl>
                <RadioGroup
                    aria-labelledby={'demo-theme-toggle'}
                    name={'theme-toggle'}
                    row
                    value={mode}
                    onChange={(event)=>setMode(event.target.value as 'dark' | 'light')}>
                  <FormControlLabel control={<Radio/>} value={'light'} label={<WbSunny sx={{display : 'block'}}/>}/>
                  <FormControlLabel control={<Radio />} value={'dark'} label={<Nightlight sx={{display : 'block'}}/>}/>

                </RadioGroup>

              </FormControl>
            </Stack>
            <Tooltip title="Пользователь">
              <Avatar />
            </Tooltip>
          </div>
        </Toolbar>
      </MuiAppBar>
  );
};

export default AppBar;