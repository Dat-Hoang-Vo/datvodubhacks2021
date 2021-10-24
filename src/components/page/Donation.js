import { Box } from "@mui/system";
import TopNav from "../part/TopNav";

import familyHome from "../image/homeFamily.png"
import donateHome from "../image/homeDonate.png"
import { Container, Grid, List, ListItemText, Stack, Typography } from "@mui/material";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { AppBar, Button, Divider, Toolbar } from '@mui/material';
import logo from '../image/homelogo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import Family2 from "../part/Family2";

import familyPic1 from "../image/family1.jpg"
import familyPic2 from "../image/family2.jpg"
import familyPic3 from "../image/family3.jpg"
import familyPic4 from "../image/family4.png"
import familyPic5 from "../image/family5.jpg"
import { useEffect } from "react";

const Donation = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'});
    }, [])

    return (
        <Box sx={{width: '100vw'}}>
            <Box sx={{height: '60vh', backgroundColor: '#fffff0'}} id="section1">
                <AppBar color="transparent" elevation="0" position="static" sx={{width: '100%', height: '20vh'}}>
                    <Toolbar>
                        <img src={logo} style={{height: '14vh', paddingTop: '4vh', paddingLeft: '8vw'}} />
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

                <Box sx={{width: '80vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh'}}>
                    <Typography variant="h2" sx={{fontWeight: '600', marginBottom: '4vh'}}>Purpose</Typography>
                    <Typography variant="body1">Esse deserunt enim sit cupidatat nostrud. Esse deserunt enim sit cupidatat nostrud. Esse deserunt enim sit cupidatat nostrud. Esse deserunt enim sit cupidatat nostrud. Esse deserunt enim sit cupidatat nostrud. Esse deserunt enim sit cupidatat nostrud.</Typography>
                </Box>
            </Box>

            <Box sx={{width: '100%', height: '100%', backgroundColor: '#2eaab3'}}>
                <Box sx={{width: '76vw', marginLeft: 'auto', marginRight: 'auto', paddingTop: '14vh'}}>
                    <Typography variant="h2" sx={{fontWeight: '600', marginBottom: '4vh', color: '#f0f0f0'}}>Families</Typography>
                    <Stack spacing={8}>
                        <Family2 picture={familyPic1} name={"Hernandez"} aid={"Childcare"} deadline={"November 13th, 2021"} raised={270} total={1000} progress={27} />
                        <Family2 picture={familyPic2} name={"Gregories"} aid={"Housing"} deadline={"December 1st, 2021"} raised={750} total={1555} progress={48} />
                        <Family2 picture={familyPic3} name={"Akuna"} aid={"Medical"} deadline={"January 19th, 2022"} raised={450} total={1800} progress={25} />
                        <Family2 picture={familyPic4} name={"Varadkar"} aid={"Childcare"} deadline={"October 28th, 2021"} raised={350} total={430} progress={81} />
                        <Family2 picture={familyPic5} name={"Johnsons"} aid={"Food"} deadline={"November 1st, 2021"} raised={0} total={200} progress={0} />
                    </Stack>
                </Box>
            </Box>

            <Box sx={{height: '14vh', backgroundColor: '#2eaab3', textAlign: 'center'}}>
                <Box sx={{paddingTop: '4vh'}}>
                    <FacebookIcon sx={{color: "#f0f0f0", fontSize: '2.4vw', marginRight: '2vw'}} />
                    <TwitterIcon sx={{color: "#f0f0f0", fontSize: '2.4vw', marginRight: '2vw'}}  />
                    <InstagramIcon sx={{color: "#f0f0f0", fontSize: '2.4vw', marginRight: '2vw'}}  />
                    <EmailRoundedIcon sx={{color: "#f0f0f0", fontSize: '2.4vw', marginRight: '2vw'}}  />
                </Box>
            </Box>
        </Box>
    )
}

export default Donation;