import { Box, Button, Link, Popover, Typography } from "@mui/material";

import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import { useState } from "react";
import { useEffect } from "react";


const MapPin = (props) => {
    const [color, setColor] = useState("#000000")

    useEffect(() => {
        let resource = props.resource_type;
        if (resource === "Housing") {setColor("#5a33e6"); }
        else if (resource === "Child Care") {setColor("#e4d425");}
        else if (resource === "Health" || resource === "Testing") {setColor("#c81919");}
        else if (resource === "Clothing") {setColor("#7a4906");}
        else if (resource === "Food") {setColor("#16a222");}
        else {setColor("#ffffff")}
    }, [])

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopup = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box>

            <Button disableRipple sx={{":hover": {backgroundColor: 'transparent'}}}  onClick={handlePopup}>
                <RoomRoundedIcon sx={{color: {color}, fontSize: '1.5vw'}} />
            </Button>

            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            >
                <Typography>{props.company_name}</Typography>
                <Typography>{props.resource_type}</Typography>
                <Typography>{props.company_phone}</Typography>
                <Typography>{props.address}</Typography>
                <Link href={props.link}>
                    <Button sx={{float: 'left'}}>Visit</Button>
                </Link>
                <Button sx={{float: 'right'}}>Donate</Button>
            </Popover>

        </Box>
    )
}

export default MapPin;