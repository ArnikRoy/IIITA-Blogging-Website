import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url("/contact.jpg");
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Lets get connected on
                    <Link href="https://www.linkedin.com/in/arnik-roy-040a1a234/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    <br/>
                    Reach out to me on
                    <Link href="https://www.instagram.com/glider_107/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    <br/>
                    or send me an Email 
                    <Link href="mailto:royarnik107@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;