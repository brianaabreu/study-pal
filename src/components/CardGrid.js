import React from 'react';
import Header from './header';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import "../App.scss"

import Card from './card';

const CardGrid = ({setCurrentId}) => {
  const cards = useSelector((state) => state.cards);
  
  function gridDisplay() {
    if (cards.length === 0) {
      return (
        <CircularProgress />
        
      )
    } else {
      return(
        <Grid style={{ display:'flex', justifyContent:'center', margin: '20px'}} container alignItems="stretch" spacing={3}>
            {cards[0].map((card) => (
              <Grid key={card._id} item sm={4}>
                <Card classname="grid" card={card} setCurrentId={setCurrentId} />
              </Grid>
          ))}
          </Grid>
      )
    }
  }
  
    return (
      <div classname="cardGrid">
          {gridDisplay()}
      </div>
    )
}

export default CardGrid;
