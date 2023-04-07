import React from 'react'
import { Typography, Stack, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor='#fff3f4'>
      <Stack gap={'40px'} alignItems={'center'} px={'40px'} pt={'25px'}>
        <Typography variant='h5' pb='40px' mt='20px' alignItems={'center'}>
          Made with 🧡 by Tushar
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
