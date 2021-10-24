import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { AppBar, Button, Divider, Grid, Toolbar } from '@mui/material';


import logo from '../image/homelogo.png'

const TopNav = () => {

    {/*
    return (
        <AppBar color="transparent" elevation="0" position="absolute" sx={{width: '100vw', height: '20vh'}}>
            <Toolbar>
                <img src={logo} style={{height: '14vh', paddingTop: '4vh', paddingLeft: '8vw'}} />
                <p style={{flexGrow: '1'}}></p>
                <Box style={{marginRight: '8vw'}}>
                <Link to="/" style={{textDecoration: "none", color: '#424242'}}>
                    <Tab value="resources" label="Home" sx={{fontSize: '1vw'}} />
                </Link>
                <Link to="/" style={{textDecoration: "none", color: '#424242'}}>
                    <Tab value="resources" label="Resources" sx={{fontSize: '1vw'}} />
                </Link>
                <Link to="/helpinghand" style={{textDecoration: "none", color: '#424242'}}>
                    <Tab value="helping hand" label="Donate" sx={{fontSize: '1vw'}} />
                </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
    */
    }

    return (
        <AppBar elevation={0} sx={{height: '6vh', position: 'static', backgroundColor: 'transparent'}}>
            <Grid container>
                <Grid item xl ={9.5}>
                </Grid>
                <Grid item xl ={2.5} sx={{display: 'flex', paddingTop: '1.5vh'}}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button sx={{color: '#696969', fontSize: '1.6vh'}}>Home</Button>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button sx={{color: '#696969', fontSize: '1.6vh'}}>Resources</Button>
                    </Link>
                    <Link to="/donate" style={{textDecoration: 'none'}}>
                        <Button sx={{color: '#696969', fontSize: '1.6vh'}}>Donation</Button>
                    </Link>
                </Grid>
            </Grid>
            
        </AppBar>
    )


    {
        /*
    return (
        <Box sx={{width: '100%', height: '6vh', backgroundColor: '#fffff0'}}>
            {//<img src={logo} style={{height: '8vh', display: 'inline'}} />}
            }
            <Tabs sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Box sx={{justifyContent: 'flex-end', right: '0'}}>
                    <p style={{flexGrow: '1'}}></p>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Tab value="resources" label="Resources" />
                    </Link>
                    <Link to="/helpinghand" style={{textDecoration: "none"}}>
                        <Tab value="helping hand" label="Helping Hand" />
                    </Link>
                </Box>
            </Tabs>
        </Box>
    );
    */
        }
}

export default TopNav;