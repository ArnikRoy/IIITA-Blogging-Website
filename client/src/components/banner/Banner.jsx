import { Box, Typography, styled } from "@mui/material"

const Image = styled(Box)`
    background: url(/Banner1.jpg) center/55% repeat-x #000;
    width: 100%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`




const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    return(
        <Image>
            <Heading>IIITA-Blog</Heading>
            <SubHeading>Campus Highlights</SubHeading>
        </Image>
    )
}

export default Banner