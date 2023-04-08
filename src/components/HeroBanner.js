import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import heroBannerImg from "../assest/images/Banner.svg"
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#408E91" fontWeight="600" fontSize="24px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" fontFamily={'Poppins'}>
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Quicksand" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#408E91', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#408E91" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={heroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
