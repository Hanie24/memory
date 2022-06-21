import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography, Button } from '@mui/material';

function Win({resetGame}){
    return (
        <Container maxWidth="md">
            <Grid container spacing={{xs: 1, sm: 2}} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Box>
                    <Typography variant="h3" component="h3">Ganaste</Typography>
                    <Button onClick={() => resetGame()} variant="contained" >Volver a jugar</Button>
                </Box>
            </Grid>
        </Container>
    )
}

export default Win;