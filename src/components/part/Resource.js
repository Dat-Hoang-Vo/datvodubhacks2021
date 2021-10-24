import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Resource = () => {
    return (
        <Box sx={{width: '90%'}}>
            <Typography>ChildCare Aware</Typography>
            <Typography variant="caption">Visit Site</Typography>
            <Typography variant="caption" sx={{float: 'right'}}>Read More</Typography>
        </Box>
    )
}

export default Resource;