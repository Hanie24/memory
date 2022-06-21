import React from 'react';
import cover from '../../assets/img/cards/cover.png'
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
//import { createTheme } from '@mui/material/styles';

const Card = styled('img')({
    width: 120,
    display: 'block',
    margin: 'auto'
});

function GameRound({randomCards, handleClick}){
    return (
        <Container maxWidth="md">
            <Grid container spacing={{xs: 1, sm: 2}} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                { randomCards && randomCards.map((card, index) => {
                    return (
                        <Grid item xs={2} key={card.id}>
                            <Card src={card.flipped ? card.pic : cover} alt={card.name} data-name={card.name} id={card.id} onClick={!card.flipped ? () => handleClick(index, card) : null}/>
                        </Grid> 
                    ) 
                })} 
            </Grid>
        </Container>
    )
}

export default GameRound;