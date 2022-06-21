import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../Header/Header'
import Game from './../Game/Game'

const theme = createTheme({
    palette: {
        primary: {
            main: '#154734',
        },
    },
});

const Main = styled('section')({
    height: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export default function App(props) {
	
	return (
        <ThemeProvider theme={theme}>
			<CssBaseline />
            <Header/>
            <Main>  
                <Game/>
            </Main>
        </ThemeProvider>
	)
}