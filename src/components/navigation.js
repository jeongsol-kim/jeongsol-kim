import { Button, IconButton, Toolbar, Typography} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { Link as RRDLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
  color: inherit;
  text-decoration: none;
	padding: 0;
	margin: 0 1rem;
	text-align: center;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;


const FadeMenu = ({isDarkMode, onClick}) => {
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
          <MenuIcon style={{color: isDarkMode? 'white':'black'}}/>
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
          <MenuItem onClick={onClick} style={{justifyContent: 'center'}}>
          {
            isDarkMode ? <DarkModeIcon />
            : <LightModeIcon />
          }
          </MenuItem>
        </Menu>
      </div>
    );
};

const StyledToolBar = styled(Toolbar)`
    justify-content: space-between;
`

const Navigation = ({isDarkMode, toggleDarkMode}) => (
  <div>
    <StyledToolBar>
      <IconButton size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 15 }}
        style={{marginLeft: '0', marginRight: '0'}}>
        <Typography variant="h6" 
                    component="div"
                    style={{fontSize: '1rem'}}>
          Oranging-K
        </Typography>
      </IconButton>
      <div className="links" style={{display: 'block', justifyContent:'space-between'}}>
        <PC>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/publication">PUBLICATION</StyledLink>
          <StyledLink to="/sidework">SIDE-WORK</StyledLink>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </PC>
        <Mobile>
          <FadeMenu isDarkMode={isDarkMode} onClick={toggleDarkMode}/>
        </Mobile>
      </div>
    </StyledToolBar>
    <Toolbar />
  </div>
)

export default Navigation