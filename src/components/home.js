import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import profile from '../assets/profile.jpeg';

import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useTitle } from './title_hook';

export const PCChips = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Signal Processing" variant='outlined' style={{color:"inherit"}}/>
      <Chip label="Image Processing" variant="outlined" style={{color:"inherit"}}/>
      <Chip label="Inverse Problem" variant="outlined" style={{color:"inherit"}}/>
    </Stack>
  );
}

export const MobileChips = () => {
  return (
    <Stack direction="column" spacing={1} style={{width: '60%', margin:'auto', color:"inherit"}}>
      <Chip label="Signal Processing" variant='outlined' style={{color:"inherit"}}/>
      <Chip label="Image Processing" variant="outlined" style={{color:"inherit"}}/>
      <Chip label="Inverse Problem" variant="outlined" style={{color:"inherit"}}/>
    </Stack>
  );
}

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
      query: "(max-width:950px)"
  });

  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
      query: "(min-width:951px)"
  });

  return <>{isPc && children}</>
}

const CopySnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText('jeongsol@kaist.ac.kr')
    .then(() => {setOpen(true)})
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
        <Typography 
            sx={{ p: 2 }}
            component='div'
            onClick={handleClick}>
            jeongsol@kaist.ac.kr
        </Typography> 
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Email address is copied."
        action={action}
        />
    </div>
  );
}

const EmailPopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <EmailIcon onClick={handleClick}/> 
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
        >
            <CopySnackbar />
        </Popover>
    </div>
  );
}

const Profile = () => {
    return (
        <div 
            style={{alignContent: 'center'}}>
            <img 
                className='profile'
                src={profile}
                alt='Profile'
                width='70%'
                />
        </div>
    )
}

const Introduce = () => {
  return (
    <div style={{margin: '0'}}>
    <h3
      className='introtext'
      style={{
              margin: '0 0',
              textAlign: 'center',
              fontWeight: '500',
              fontStyle: 'italic'
              }}>
          Ph.D Student @ KAIST ( <a style={{textDecoration:'none', color:'inherit'}} href='https://bispl.weebly.com/'>BiSPL </a> 
                                & <a style={{textDecoration:'none', color:'inherit'}} href='http://mooolab.kaist.ac.kr/'>MOOO</a> )
    </h3>
    <p className='introtext' style={{padding: '0.5rem', margin:'auto', textAlign: 'center'}}>
        Exploring a wide range of research fields,<br></br> with a particular focus on following areas
              
        <br></br>
        <br></br>
        <PC><PCChips /></PC>
        <Mobile><MobileChips /></Mobile>
        <br></br>
        <br></br>

        As tools for the research,<br></br>
        I'm interested in machine learning including<br></br>
        <b> Diffusion models, Multi-modal alignment, Foundation model</b>.
        
        <br></br> 
        <br></br>
        
        Primary programming language is<br></br>
        Python - Pytorch, JAX for machine learning.
        <br></br>
        <br></br>
        Secondaries (can make an application) are<br></br>
        Matlab, C#, C++ and Javascript.

        <br></br> 
        <br></br>
    </p>
    </div>
  )
}

const Buttons = () => {
  return (
    <div
        style={{textAlign: 'center', 
                right: '0',
                left: '0',
                marginLeft: 'auto',
                marginRight: 'auto',
                // width: '70%'
                }}>
        {/* <Profile /> */}
        <h2
        className='hello'
        style={{
                fontWeight: '300',
                margin: '1rem 0'
                }}>
            Hello! I'm Jeongsol Kim
        </h2>
        <Stack direction='row' spacing={3} style={{display: 'block', alignItems: 'center', margin: '1rem'}}>
          <IconButton 
            style={{color:'inherit',
                    padding: '0'}}
            href="https://github.com/jeongsol-kim">
          <GitHubIcon />
          </IconButton>
          <IconButton 
            style={{color:'inherit',
                    padding: '0'}}
            href="https://scholar.google.com/citations?user=ZaVNwcQAAAAJ&hl=ko">
            <ArticleIcon />
          </IconButton>
          <IconButton 
            style={{color:'inherit',
                    padding: '0'}}>
            <EmailPopOver />
          </IconButton>
        </Stack>
        </div>
      )
}

const PCInformation = () => {
    return (
      <Stack direction='row' spacing={3} >
        <div
            style={{textAlign: 'center', 
                    right: '0',
                    left: '0',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // width: '70%'
                    }}>
            <Profile />
            <Buttons />
        </div>
        <Introduce />
    </Stack>
    )
}

const MobileInformation = () => {
  return (
    <Stack direction='row' spacing={3} divider={<Divider orientation="vertical" flexItem />}>
      <div
          style={{textAlign: 'center', 
                  right: '0',
                  left: '0',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '90%'
                  }}>
          <Buttons />
          <Introduce />
      </div>
  </Stack>
  )
}

const Home = () => {
    useTitle('Jeongsol Kim')
    return (
        <div style={{justifyContent: 'center'}}> 
            <PC>
            <div style={{margin: 'auto',
                         width: '80%'}}>
            <PCInformation />
            </div>
            </PC>
            <Mobile>
              <Profile />
              <MobileInformation />
            </Mobile>
          <div></div>
          </div>
    )
}

export default Home