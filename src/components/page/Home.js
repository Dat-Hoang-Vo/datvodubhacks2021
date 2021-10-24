import { Box } from "@mui/system";

import familyHome from "../image/homeFamily.png"
import donateHome from "../image/homeDonate.png"
import { Container, Grid, Typography } from "@mui/material";

import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';
import logo from '../image/homelogo.png'

import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import ChildCareIcon from '@mui/icons-material/ChildCare';

import PaymentIcon from '@mui/icons-material/Payment';
import ShareIcon from '@mui/icons-material/Share';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Home = () => {
    return(
        <Box sx={{width: '99.1vw'}} id="section1">

            <Box sx={{height: '100vh', backgroundColor: '#fffff0'}}>
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

                <Container>
                    <Grid container spacing={12} sx={{paddingTop: '10vh'}}>
                        <Grid item xl={7}>
                            <Typography variant="h3" sx={{paddingBottom: '4vh', fontWeight: '800'}}>Let's connect Seattle</Typography>
                            <Typography variant="body1" sx={{color: "#696969", fontSize: '1vw', paddingBottom: '4vh'}}>Hello! Welcome to Live4Less. Here, you can browse free/affordable resources in the Greater Seattle Area or you can help give to a family in need.</Typography>
                            <Typography variant="body1" sx={{color: "#696969", fontSize: '1vw'}}>How can I help?</Typography>
                            <ul style={{color: "#696969", fontSize: '.9vw'}}>
                                <li style={{paddingBottom: '.6vh'}}>Donate to a family's cause</li>
                                <li style={{paddingBottom: '.6vh'}}>Share this website</li>
                                <li style={{paddingBottom: '.6vh'}}>Recommend resources</li>
                            </ul>
                        </Grid>
                        <Grid item xl={3}>
                        <img src={familyHome} style={{display: 'inline'}} />
                        </Grid>
                    </Grid>
                </Container>
                <a href="#section2">
                <KeyboardArrowDownRoundedIcon href="#section2" sx={{textAlign: 'center', width: '100%', fontSize: '3vw', position: 'absolute', top: '92vh', color: '#696969'}} />
                </a>
            </Box>
            
            <Box sx={{height: '100vh', backgroundColor: '#2eaab3'}} id="section2">
                <a href="#section1">
                    <KeyboardArrowUpRoundedIcon href="#section2" sx={{textAlign: 'center', width: '100%', fontSize: '3vw', position: 'absolute', top: '102vh', color: '#696969'}} />
                </a>
                <Box sx={{paddingTop: '20vh', width: '80%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Typography variant="h2" sx={{fontWeight: '700', color: '#fffff0', textAlign: 'center', marginBottom: '14vh'}}>Services We've Gathered</Typography>

                    <Box sx={{display: 'flex', width: '100%'}}>

                        <Box sx={{width: '18vw', textAlign: 'center', paddingRight: '1vw'}}>
                            <DiningOutlinedIcon sx={{fontSize: '7vw', color: '#fffff0', paddingBottom: '4vh'}} />
                            <Typography variant="h4" sx={{paddingBottom: '1vh'}}>Food Services</Typography>
                            <Typography variant="body1">Free and affordable food options provided for our community</Typography>
                        </Box>

                        <Box sx={{width: '18vw', textAlign: 'center', paddingLeft: '1vw', paddingRight: '1vw'}}>
                            <HomeWorkRoundedIcon sx={{fontSize: '7vw', color: '#fffff0', paddingBottom: '4vh'}} />
                            <Typography variant="h4" sx={{paddingBottom: '1vh'}}>Housing Services</Typography>
                            <Typography variant="body1">Low Income housing options around the Seattle area</Typography>
                        </Box>

                        <Box sx={{width: '18vw', textAlign: 'center', paddingLeft: '1vw', paddingRight: '1vw'}}>
                            <MedicalServicesRoundedIcon sx={{fontSize: '7vw', color: '#fffff0', paddingBottom: '4vh'}} />
                            <Typography variant="h4" sx={{paddingBottom: '1vh'}}>Medical Services</Typography>
                            <Typography variant="body1">Low cost medical services for those in need</Typography>
                        </Box>

                        <Box sx={{width: '18vw', textAlign: 'center', paddingLeft: '1vw'}}>
                            <ChildCareIcon sx={{fontSize: '7vw', color: '#fffff0', paddingBottom: '4vh'}} />
                            <Typography variant="h4" sx={{paddingBottom: '1vh'}}>Childcare Services</Typography>
                            <Typography variant="body1">Affordable childcare options for working parent(s)</Typography>
                        </Box>
                    </Box>

                    <Box sx={{paddingTop: '10vh'}}>
                        <Link to="/resources" style={{textDecoration: 'none'}}>
                        <Button variant="contained" 
                        sx={{fontSize: '1.2vw', width: '16vw', backgroundColor: '#fffff0', color: '#2eaab3', ":hover": {backgroundColor: '#fffff0'}}}
                        >View Resources</Button>
                        </Link>
                    </Box>

                </Box>
                <a href="#section3">
                <KeyboardArrowDownRoundedIcon sx={{textAlign: 'center', width: '100%', fontSize: '3vw', position: 'absolute', top: '192vh', color: '#696969'}} />
                </a>
            </Box>

            <Box sx={{height: '85vh', backgroundColor: '#fff6ea'}} id="section3">
                <a href="#section2">
                    <KeyboardArrowUpRoundedIcon sx={{textAlign: 'center', width: '100%', fontSize: '3vw', position: 'absolute', top: '202vh', color: '#696969'}} />
                </a>
                <Container sx={{paddingTop: '12vh'}}>
                    <Grid container>
                        <Grid item xl={6}>
                            <Typography variant="h2" sx={{fontWeight: '700', paddingBottom: '10vh'}}>Meet our families</Typography>
                            <Typography variant="body1" sx={{marginBottom: '5vh'}}>We all like to be generous when we can, but sometimes it's hard to know where to send that generosity. At Live4Less, we've found
                            various families that are in need in the Seattle area who could use a small donation to help get by. Come visit our donations page to see which families are in need, and how you can help!
                            </Typography>
                            <Link to="/donate">
                                <Button variant="contained" sx={{backgroundColor: '#343a40', width: '10vw', ":hover": {backgroundColor: '#343a40'}, marginRight: '6vw'}}>{<PaymentIcon sx={{marginRight: '.7vw'}} />}Donate</Button>
                            </Link>
                            <Button variant="contained" sx={{backgroundColor: '#343a40', width: '10vw', ":hover": {backgroundColor: '#343a40'}}}>{<ShareIcon sx={{marginRight: '.7vw'}} />}Share</Button>
                        </Grid>
                        <Grid item xl={6}>
                            <img src={donateHome} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{height: '15vh', backgroundColor: '#2eaab3', textAlign: 'center'}}>
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

export default Home;