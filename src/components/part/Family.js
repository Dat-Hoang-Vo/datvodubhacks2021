import { Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useState } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: 300,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

const Family = (props) => {
    const [openPayment, setOpenPayment] = useState(false);

    const togglePayment = () => {
        
    }

    return (
        <Card sx={{ display: 'flex', width: '32vw'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia 
                component="img"
                sx={{ height: 210, width: 300, objectFit: 'cover' }}
                image={props.picture}
                />
            </Box>

            <Box>
                <CardContent>
                    <Typography variant="h4">{props.name}</Typography>
                    <Typography variant="h6">Needs: {props.need}</Typography>
                    <Typography style={{marginBottom: '2vh'}}>By: {props.deadline}</Typography>
                    <BorderLinearProgress variant="determinate" value={props.progress} />

                    <Box sx={{display: 'block'}}>
                        <Typography sx={{float: 'left' }}>Donated: ${props.currentFund}</Typography>
                        <Typography sx={{float: 'right'}}>Total Need: ${props.neededFund}</Typography>
                    </Box>

                    <Box>
                        <Button variant="text">Read More</Button>
                        <Button variant="contained" sx={{float: 'right'}}>Donate</Button>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}

export default Family;