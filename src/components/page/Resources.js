import { Box, styled, width } from "@mui/system";
import TopNav from "../part/TopNav";

import { useTheme } from "@mui/material";

import familyHome from "../image/homeFamily.png"
import donateHome from "../image/homeDonate.png"
import { Container, Drawer, Grid, List, ListItemText, Stack, Typography } from "@mui/material";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { AppBar, Button, Divider, Toolbar } from '@mui/material';
import logo from '../image/homelogo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { useEffect } from "react";

import ListIcon from '@mui/icons-material/List';
import Resource from "../part/Resource";
import { useState } from "react";
import Map from "../part/Map";


const Resources = () => {

    return (
        <Box sx={{width: '100vw', height: '100vh', backgroundColor: '#fffff0'}}>
            <Box sx={{width: '100%', height: '10vh'}}>
                <AppBar color="transparent" elevation="0" position="static" sx={{width: '100%', height: '20vh'}}>
                        <Toolbar>
                            <Button sx={{color: '#696969'}}>
                                <ListIcon sx={{fontSize: '2vw'}}/>
                            </Button>

                            <p style={{flexGrow: '1'}}></p>
                            <Box style={{marginRight: '8vw'}}>
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
                <Box sx={{height: '80vh', width: '100vw'}}>
                    
                    <Box sx={{display: 'inline-block', width: "12%", position: 'static'}}>
                        <Drawer variant="permanent" anchor="left" elevation={0} sx={{
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            height: '65vh',
                            width: "12%",
                            top: '10vh'
                            }
                        }}>

                        <Typography variant="h6" align="center">Resources</Typography>
                        <Typography>Housing Services</Typography>
                        <Stack>
                            <Resource />
                        </Stack>

                        </Drawer>
                    </Box>
                    
                    <Box sx={{display: 'inline-block', width: "88%", height: '100%', backgroundColor: '#2eaab3'}}>
                            <Map />
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default Resources;