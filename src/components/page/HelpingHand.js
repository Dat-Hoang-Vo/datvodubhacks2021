import Family from "../part/Family";


import { Box } from "@mui/system";
import TopNav from "../part/TopNav";

import family1 from "../image/family1.jpg"
import family2 from "../image/family2.jpg"
import family3 from "../image/family3.jpg"
import family4 from "../image/family4.png"
import family5 from "../image/family5.jpg"
import { Container, Divider, Drawer, Grid, List, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

const HelpingHand = () => {
    return (
        <Box sx={{backgroundColor: "#fffff0", height: '100vh'}}>
            <TopNav />
            <Grid container spacing={45}>
                <Grid item xl={4} sx={{marginTop: '1VH'}}>
                <Drawer
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                    }
                  }}
                  variant="permanent"
                  anchor="left">
                    <List sx={{backgroundColor: '#fffff0', paddingLeft: '1vw', paddingRight: '1vw'}}>
                        <Stack spacing={3}>
                            <Family picture={family1} name={"Emiliano"} need={"ChildCare"} deadline={"October 29th, 2021"} currentFund={280} neededFund={580} progress={48} />
                            <Family picture={family2} name={"Gregories"} need={"Housing Assistance"} deadline={"December 13th, 2021"} currentFund={755} neededFund={1180} progress={64} />
                            <Family picture={family3} name={"Luu"} need={"Housing Assistance"} deadline={"February 21st, 2022"} currentFund={200} neededFund={990} progress={20} />
                            <Family picture={family4} name={"Singh"} need={"Food Assistance"} deadline={"October 27th, 2021"} currentFund={0} neededFund={200} progress={0} />
                            <Family picture={family5} name={"Johnsons"} need={"Medical Assistance"} deadline={"November 18th, 2021"} currentFund={220} neededFund={1800} progress={12} />
                        </Stack>
                    </List>
                </Drawer>
                </Grid>
                <Grid item xl={7.5} sx={{marginTop: '1vh'}}>
                    <Paper elevation={3} sx={{height: '90vh'}}>
                        <Typography variant="h3" align="center" sx={{paddingTop: '3vh'}}>Emiliano</Typography>
                        <img src={family1} style={{marginLeft: 'auto', display: 'block', marginRight: 'auto', height: '30%'}} />
                        <Box sx={{width: '70%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3vh'}}>
                        <Typography variant="body1">Hey guys! We are the Emiliano family. Recently my wife just started working so we need to put our kids into daycare. She won't get paid for another two weeks
                                                so we are hoping to get some help to pay for those two weeks of day care. I know we are asking for a lot but this help would be greatly appreciated!</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default HelpingHand;