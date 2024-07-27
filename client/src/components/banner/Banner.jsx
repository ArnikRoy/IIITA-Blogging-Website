// import { Box, Typography, styled } from "@mui/material"

// const Image = styled(Box)`
//     background: url(/Banner1.jpg) center/55% repeat-x #000;
//     width: 100%;
//     height: 55vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `




// const Heading = styled(Typography)`
//     font-size: 70px;
//     color: #FFFFFF;
//     line-height: 1
// `;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

// const Banner = () => {
//     return(
//         <Image>
//             <Heading>IIITA-Blog</Heading>
//             <SubHeading>Campus Highlights</SubHeading>
//         </Image>
//     )
// }

// export default Banner





// import { Box, Typography, styled } from "@mui/material";
// import { useState, useEffect } from "react";

// // Array of images
// const images = [
//     "/Banner5.jpeg",
//   "/Banner1.jpg",
//   "/Banner2.jpg",
//   "/Banner3.jpg",
//   // Add more image paths here if you have more banners
// ];

// const Image = styled(Box)`
//   width: 100%;
//   height: 55vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: center/55% repeat-x #000;
// `;

// const Heading = styled(Typography)`
//   font-size: 70px;
//   color: #ffffff;
//   line-height: 1;
// `;

// const SubHeading = styled(Typography)`
//   font-size: 20px;
//   background: #ffffff;
// `;

// const Banner = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 5 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Image sx={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
//       <Heading>IIITA-Blog</Heading>
//       <SubHeading>Campus Highlights</SubHeading>
//     </Image>
//   );
// };

// export default Banner;





// import { Box, Typography, styled, IconButton } from "@mui/material";
// import { useState, useEffect } from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// // Array of images
// const images = [
//   "/Banner5.jpeg",
//   "/Banner1.jpg",
//   "/Banner2.jpg",
//   "/Banner3.jpg",
//   // Add more image paths here if you have more banners
// ];

// const Container = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 55vh;
//   overflow: hidden;
// `;

// const Image = styled(Box)`
//   flex: 0 0 80%;
//   background-size: cover;
//   background-position: center;
//   transition: transform 1s ease-in-out;
//   position: relative;
//    height: 55vh;
//    display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: center/55% repeat-x #000;
// `;

// const SideImage = styled(Box)`
//   flex: 0 0 10%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   filter: brightness(50%);
//   transition: transform 1s ease-in-out;
// `;

// const NavigationButton = styled(IconButton)`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #fff;
//   z-index: 2;
// `;

// const TextContainer = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;

// const Heading = styled(Typography)`
//   font-size: 70px;
//   color: #ffffff;
//   line-height: 1;
// `;

// const SubHeading = styled(Typography)`
//   font-size: 20px;
//   color: #ffffff;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 5px 10px;
//   border-radius: 5px;
// `;

// const Banner = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 4000); // Change image every 4 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Container>
//       <NavigationButton onClick={prevImage} sx={{ left: '10px' }}>
//         <ArrowBackIosIcon />
//       </NavigationButton>
//       <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex - 1 + images.length) % images.length]})` }} />
//       <Image sx={{ backgroundImage: `url(${images[currentImageIndex]})`, transform: `translateX(0)` }}>
//         <TextContainer>
//           <Heading>IIITA-Blog</Heading>
//           <SubHeading>Campus Highlights</SubHeading>
//         </TextContainer>
//       </Image>
//       <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})` }} />
//       <NavigationButton onClick={nextImage} sx={{ right: '10px' }}>
//         <ArrowForwardIosIcon />
//       </NavigationButton>
//     </Container>
//   );
// };

// export default Banner;



// import { Box, Typography, styled, IconButton } from "@mui/material";
// import { useState, useEffect } from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// // Array of images
// const images = [
//   "/Banner5.jpeg",
//   "/Banner1.jpg",
//   "/Banner2.jpg",
//   "/Banner3.jpg",
//   // Add more image paths here if you have more banners
// ];

// const Container = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   width: 90%;
//   height: 60vh;
//   overflow: hidden;
// `;

// const Image = styled(Box)`
//   flex: 0 0 70%; // Reduce the width of the main image
//   background-size: cover;
//   background-position: center;
//   transition: transform 1s ease-in-out;
//   position: relative;
//   height: 60vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: center/100% no-repeat #000; // Ensure no repeat of the main image
// `;

// const SideImage = styled(Box)`
//   flex: 0 0 15%; // Adjust the width of the side images
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   filter: brightness(50%);
//   transition: transform 1s ease-in-out;
// `;

// const NavigationButton = styled(IconButton)`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #fff;
//   z-index: 2;
// `;

// const TextContainer = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;

// const Heading = styled(Typography)`
//   font-size: 70px;
//   color: #ffffff;
//   line-height: 1;
// `;

// const SubHeading = styled(Typography)`
//   font-size: 20px;
//   color: #ffffff;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 5px 10px;
//   border-radius: 5px;
// `;

// const Banner = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 4000); // Change image every 4 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Container>
//       <NavigationButton onClick={prevImage} sx={{ left: '10px' }}>
//         <ArrowBackIosIcon />
//       </NavigationButton>
//       <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex - 1 + images.length) % images.length]})` }} />
//       <Image sx={{ backgroundImage: `url(${images[currentImageIndex]})`, transform: `translateX(0)` }}>
//         <TextContainer>
//           <Heading>IIITA-Blog</Heading>
//           <SubHeading>Campus Highlights</SubHeading>
//         </TextContainer>
//       </Image>
//       <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})` }} />
//       <NavigationButton onClick={nextImage} sx={{ right: '10px' }}>
//         <ArrowForwardIosIcon />
//       </NavigationButton>
//     </Container>
//   );
// };

// export default Banner;


import { Box, Typography, styled, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Array of images
const images = [
  "/Banner5.jpeg",
  "/Banner1.jpg",
  "/Banner2.jpg",
  "/Banner3.jpeg",
  // Add more image paths here if you have more banners
];

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90%;
  height: 60vh;
  margin: auto; // Center the container
  overflow: hidden;
  padding: 0 20px; // Add a little gap on both sides
`;

const Image = styled(Box)`
  flex: 0 0 70%; // Reduce the width of the main image
  background-size: cover;
  background-position: center;
  transition: transform 1s ease-in-out;
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: center/100% no-repeat #000; // Ensure no repeat of the main image
`;

const SideImage = styled(Box)`
  flex: 0 0 15%; // Adjust the width of the side images
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
  transition: transform 1s ease-in-out;
`;

const NavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
`;

const TextContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
`;

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <Container>
      <NavigationButton onClick={prevImage} sx={{ left: '10px' }}>
        <ArrowBackIosIcon />
      </NavigationButton>
      <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex - 1 + images.length) % images.length]})` }} />
      <Image sx={{ backgroundImage: `url(${images[currentImageIndex]})`, transform: `translateX(0)` }}>
        <TextContainer>
          <Heading>IIITA-Blog</Heading>
          <SubHeading>Campus Highlights</SubHeading>
        </TextContainer>
      </Image>
      <SideImage sx={{ backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})` }} />
      <NavigationButton onClick={nextImage} sx={{ right: '10px' }}>
        <ArrowForwardIosIcon />
      </NavigationButton>
    </Container>
  );
};

export default Banner;
