import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assest/icons/right-arrow.png';
import LeftArrowIcon from '../assest/icons/left-arrow.png';

//Left arrow from Horizontal Scroll Menu
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//Right arrow from Horizontal Scroll Menu
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);
export default HorizontalScrollbar;