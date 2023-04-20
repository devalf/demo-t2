import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {Link} from '@mui/material';

export const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AccountBalanceIcon/>
                    <Box sx={{pl: 1}}>
                        <Link href="/" sx={{'color': 'white'}}>Home</Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
