import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from './../../assets/img/logo-justo.png'

const Header = () => {
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            width: 200,
                            padding: 2,
                        }}
                        alt="Justo"
                        src={Logo}
                    />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;