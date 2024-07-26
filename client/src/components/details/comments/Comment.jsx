import { Box, Typography } from "@mui/material"

 

const Comment = ({ comment }) => {
    return(
        <Box>
            <Box>

            </Box>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box>
        </Box>
    )
}

export default Comment