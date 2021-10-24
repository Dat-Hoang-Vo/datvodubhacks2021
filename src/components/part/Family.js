import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: '100%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#2eaab3' : '#2eaab3',
    },
  }));

const Family2 = (props) => {
    return(
        <Box sx={{height: '50vh', backgroundColor: '#fffff0', display: 'flex'}}>
            <Box sx={{height: '100%', width: '50%'}}>
                <Box sx={{paddingLeft: '1vw', paddingTop: '2vh'}}>
                    <Typography variant="h6" sx={{fontWeight: '600', marginBottom: '3vh'}}>{props.name}</Typography>
                    <Box sx={{marginBottom: '4vh'}}>
                        <Typography variant="body1">Requesting: {props.aid} Assistance</Typography>
                        <Typography variant="body1">By: {props.deadline}</Typography>
                    </Box>

                    <Box sx={{marginBottom: '2vh', width: '95%', height: '12vh'}}>
                        <Typography variant="body1">{props.description}</Typography>
                    </Box>

                    <Box sx={{width: '95%'}}>
                        <Typography variant="body1" sx={{float: 'left'}}>Raised ${props.raised}</Typography>
                        <Typography variant="body1" sx={{float: 'right', paddingBottom: '1vh'}}>Goal of ${props.total}</Typography>
                        <BorderLinearProgress variant="determinate" value={props.progress} />
                    </Box>

                    <Box sx={{paddingTop: '5vh', width: '95%'}}>
                        <Button variant="contained" sx={{width: '45%', height: '5vh', fontSize: '1vw', textTransform: 'none', backgroundColor: '#2eaab3', float: 'left', ":hover": {backgroundColor: '#fffff0', color: '#2eaab3'}}}>Donate</Button>
                        <Button variant="contained" sx={{width: '45%', height: '5vh', fontSize: '1vw', textTransform: 'none', backgroundColor: '#2eaab3', float: 'right', ":hover": {backgroundColor: '#fffff0', color: '#2eaab3'}}}>Read More</Button>
                    </Box>
                </Box>
                
            </Box>
            

            <Box sx={{height: '100%', width: '50%'}}>
                <img src={props.picture} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </Box>
            
        </Box>
    )
}

export default Family2;