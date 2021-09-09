import React from 'react';
import Header from './header';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Card from './card';

const View = ({setCurrentId}) => {
    const cards = useSelector((state) => state.cards);
  
    return (
        !cards.length ? <CircularProgress /> : (
      <Grid  container  spacing={3}>
        {cards[0].map((card) => (
            <Grid key={card._id} item xs={8} sm={6} md={6}>
            <Card card={card} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
        )
    )
}

export default View;