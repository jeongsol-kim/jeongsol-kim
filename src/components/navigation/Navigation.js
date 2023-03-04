
import { Button, IconButton, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {Fragment, forwardRef} from "react";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });

    return <>{isMobile && children}</>
}

const PC = ({children}) => {
    const isPc = useMediaQuery({
        query: "(min-width:769px)"
    });

    return <>{isPc && children}</>
}

const FadeMenu = forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ref) => {
    setAnchorEl(null);
    scrollDownMobile(ref);
  };

  const scrollDownMobile = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 50,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={{color:'white'}}/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose(ref.about)}>About</MenuItem>
        <MenuItem onClick={() => handleClose(ref.edu)}>Education</MenuItem>
        <MenuItem onClick={() => handleClose(ref.news)}>Update</MenuItem>
        <MenuItem onClick={() => handleClose(ref.pub)}>Publication</MenuItem>
        <MenuItem onClick={() => handleClose(ref.award)}>Award</MenuItem>
      </Menu>
    </div>
  );
});

const scrollDown = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 70, // margin for navibar
    behavior: 'smooth',
  });
};

const NaviBlock2 = forwardRef((props, ref) => (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed' style={{backgroundColor:"#03C988"}}>
                <Toolbar sx={{mx: "auto", width:"100%", maxWidth: 800, justifyContent: "space-around"}}>
                    <IconButton size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 15}}>
                    <Typography variant="h6" component="div" sx={{flexGlow:1}}>
                        Jeongsol Kim
                    </Typography>
                    </IconButton>
                    <PC>
                        <Button color="inherit" onClick={() => scrollDown(ref.about)}>
                            About
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(ref.edu)}>
                            Education
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(ref.news)}>
                            Update
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(ref.pub)}>
                            Publications
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(ref.award)}>
                            Awards
                        </Button>
                    </PC>
                    <Mobile>
                        <FadeMenu ref={ref}/>
                    </Mobile>
                </Toolbar>
            </AppBar>
        </Box>
));


const Navigation = forwardRef((props, ref) => {
  // console.log(this.ref)
  return (
      <Fragment>
          <NaviBlock2 ref={ref}/>
          {/* To avoid overlapped content by the appbar */}
          <Toolbar>{/* content */}</Toolbar>
      </Fragment>
  )
});

export default Navigation;