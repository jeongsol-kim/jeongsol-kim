import { Button, IconButton, Toolbar, Typography} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { Link as RRDLink, useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";


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

const Link = ({isActive, children, ...props}) => (
    <RRDLink {...props}>{children}</RRDLink>
)

const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
	padding: 0 1rem;
	margin: 0;
	text-align: center;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const FadeMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (ref) => {
      setAnchorEl(null);
    };
  
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
          <MenuItem>
            <StyledLink to="/">HOME</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/publication">PUBLICATION</StyledLink>
          </MenuItem>
          <MenuItem>
          <StyledLink to="/sidework">SIDE-WORK</StyledLink>
          </MenuItem>
        </Menu>
      </div>
    );
};


const NaviContent = () => (
    <div>
        <IconButton size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 15}}>
        <Typography variant="h6" component="div">
            Jeongsol Kim
        </Typography>
        </IconButton>
        <PC>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/publication">PUBLICATION</StyledLink>
            <StyledLink to="/sidework">SIDE-WORK</StyledLink>
        </PC>
        <Mobile>
            <FadeMenu />
        </Mobile>
    </div>
)


const StyledToolBar = styled(Toolbar)`
    align-content: space-around;
`

const StyledAppBar = styled(AppBar)`
    background: #FFFFFF
`

const Navigation = () => {
    return (
        <div>
            <StyledAppBar>
                <StyledToolBar>
                    <NaviContent />
                </StyledToolBar>
            </StyledAppBar>
            <Toolbar />
        </div>
    );
}

export default Navigation