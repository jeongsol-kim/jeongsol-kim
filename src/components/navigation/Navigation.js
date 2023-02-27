
import { Button, Grid, IconButton, ListItem, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Component, Fragment} from "react";

const NaviBlock2 = () => (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed' style={{backgroundColor:"#03C988"}}>
                <Toolbar sx={{mx: "auto", width:"100%", maxWidth: 800}}>
                    <IconButton size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}>
                    <Typography variant="h6" component="div" sx={{flexGlow:1}}>
                        Jeongsol Kim
                    </Typography>
                    </IconButton>
                    <Button color="inherit">
                        About
                    </Button>
                    <Button color="inherit">
                        Education
                    </Button>
                    <Button color="inherit">
                        Update
                    </Button>
                    <Button color="inherit">
                        Publications
                    </Button>
                    <Button color="inherit">
                        Awards
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
)

export default class Navigation extends Component{
    render(){
        return (
            <Fragment>
                <NaviBlock2 />
                {/* To avoid overlapped content by the appbar */}
                <Toolbar>{/* content */}</Toolbar>
            </Fragment>
        )
    }
}