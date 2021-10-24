import { Box} from "@mui/system";

import { Drawer, Stack, Typography } from "@mui/material";

import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import Map from "../part/Map";

import RoomRoundedIcon from '@mui/icons-material/RoomRounded';


const Resources = () => {

    return (
        <Box sx={{width: '100vw', height: '100vh', backgroundColor: '#fffff0'}}>
            <Box sx={{width: '100%', height: '10vh'}}>
                <AppBar color="transparent" elevation="0" position="static" sx={{width: '100%', height: '20vh'}}>
                        <Toolbar>
                            <Stack direction="row" spacing={6} sx={{paddingLeft: '.5vw', paddingTop: '2vh'}}>
                                <Typography> <RoomRoundedIcon sx={{color: "#5a33e6"}} /> Housing Services</Typography>
                                <Typography> <RoomRoundedIcon sx={{color: "#c81919"}} /> Healthcare Services</Typography>
                                <Typography> <RoomRoundedIcon sx={{color: "#e4d425"}} /> Child Care Services</Typography>
                                <Typography> <RoomRoundedIcon sx={{color: "#16a222"}} /> Food Resources</Typography>
                                <Typography> <RoomRoundedIcon sx={{color: "#7a4906"}} /> Clothing Resources</Typography> 
                            </Stack>
                            <p style={{flexGrow: '1'}}></p>
                            <Box style={{marginRight: '8vw', paddingTop: '2.5vh'}}>
                                <Link to="/" style={{textDecoration: "none", color: '#696969'}}>
                                    <Tab value="resources" label="Home" sx={{fontSize: '1vw', textTransform: 'none'}} />
                                </Link>
                                <Link to="/resources" style={{textDecoration: "none", color: '#696969'}}>
                                    <Tab value="resources" label="Resources" sx={{fontSize: '1vw', textTransform: 'none'}} />
                                </Link>
                                <Link to="/donate" style={{textDecoration: "none", color: '#696969'}}>
                                    <Tab value="helping hand" label="Donate" sx={{fontSize: '1vw', textTransform: 'none'}} />
                                </Link>
                            </Box>
                        </Toolbar>
                    </AppBar>
            </Box>
            <Box>
                <Box sx={{height: '90vh', width: '100vw'}}>
                
                    
                    <Box sx={{display: 'inline-block', width: "100%", height: '100%', backgroundColor: '#2eaab3'}}>
                            <Map />
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default Resources;