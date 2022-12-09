import React, { useState } from 'react';
import BookIcon from '@mui/icons-material/Book';
import { useRouter } from 'next/router';
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";

const Header = () => {
    const router = useRouter();
    const [value, setValue] = useState()
    const handleChange = (e, val) => {
        setValue(val);
        if(val == 0){
            router.push('/');
        }else if(val == 1){
            router.push('/books');
        }else if(val == 2){
            router.push('/books/add');
        }
    }
    return (
        <AppBar position='sticky' sx={{bgcolor:"#c83576" }}>
            <Toolbar>
                <BookIcon sx={{fontSize: '26px'}} />
                <Box display="flex" margin={"auto"}>
                    <Tabs textColor="inherit" onChange={handleChange} value={value}>
                        <Tab label='Home' />
                        <Tab label='All Books' />
                        <Tab label='Add New' />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;