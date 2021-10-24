import { Box } from "@mui/system";

import { Stack, Typography } from "@mui/material";


import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../image/homelogo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import Family from "../part/Family";

import familyPic1 from "../image/family1.jpg"
import familyPic2 from "../image/family2.jpg"
import familyPic3 from "../image/family3.jpg"
import familyPic4 from "../image/family4.png"
import familyPic5 from "../image/family5.jpg"
import { useEffect } from "react";

const description1 = "Hello guys, my name is Rogers and I have two kids with my wife. She is about to start a job soon so we will need to leave our kids at a daycare center. My wife won't get her first paycheck for another two weeks, and I don't have enough saved to afford the daycare centers. We would be really grateful if you guys can help us make our first two weeks daycare payment.";
const description2 = "I've recently fallen behind on rent since my job has cut my hours due to Covid. I wanted to see if there are any community members out there who are fortunate enough to help out my family. I'm a single mother of two who are in primary school. Your contribution would help us make our rent payments and put food on the table.";
const description3 = "Hey guys I'm making this post on behalf of my father who has just been diagnosed with cancer. He doesn't have medical insurance so we will need to pay for the treatments out of pocket. he was the family's main source of income but now he can no longer work. Any help is greatly appreciated!";
const description4 = "With the covid-19 subsidies ending, me husband and I are now going back to work. We have two little kids which we will need to hire a nanny to watch over. We currently don't have a lot of money since we've mainly lived off of the subsidies. We are asking for help paying the first two weeks for the nanny so we can go to work and be more self sufficient.";
const description5 = "Hello everyone! We are the Johnsons and we live here in Seattle in our a cozy studio apartment with our son. We can mostly make ends meet but are falling a bit short for groceries. Is there anyone who can help us pay for our next grocery trip?";

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
                    <Typography variant="body1">This site was created with the intention of connecting families that are facing financial hardship to the resources that they need, which can include other people. 
                    We focus on local community members who have realistic goals that a few helpers can achieve. When you visit this page, you know that every donation will make a big difference. You will 
                    know that as an individual you can make a huge impact. And you can make meaningful connections to those you help.</Typography>
                </Box>
            </Box>

            <Box sx={{width: '100%', height: '100%', backgroundColor: '#2eaab3'}}>
                <Box sx={{width: '76vw', marginLeft: 'auto', marginRight: 'auto', paddingTop: '14vh'}}>
                    <Typography variant="h2" sx={{fontWeight: '600', marginBottom: '4vh', color: '#f0f0f0'}}>Families</Typography>
                    <Stack spacing={8}>
                        <Family picture={familyPic1} name={"Hernandez"} aid={"Childcare"} deadline={"November 13th, 2021"} raised={270} total={1000} progress={27} description={description1} />
                        <Family picture={familyPic2} name={"Gregories"} aid={"Housing"} deadline={"December 1st, 2021"} raised={750} total={1555} progress={48} description={description2} />
                        <Family picture={familyPic3} name={"Akuna"} aid={"Medical"} deadline={"January 19th, 2022"} raised={450} total={1800} progress={25} description={description3} />
                        <Family picture={familyPic4} name={"Varadkar"} aid={"Childcare"} deadline={"October 28th, 2021"} raised={350} total={430} progress={81} description={description4} />
                        <Family picture={familyPic5} name={"Johnsons"} aid={"Food"} deadline={"November 1st, 2021"} raised={0} total={200} progress={0} description={description5} />
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