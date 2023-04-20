import { Stack } from '@mui/material'
import profile from '../assets/profile.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub'; 
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTitle } from './title_hook';

const CopySnackbar = () => {
  const [open, setOpen] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText('jeongsol@kaist.ac.kr');
  }

  const handleClick = () => {
    setOpen(true);
    copy();
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
                width='50%'
                />
        </div>
    )
}

const Information = () => {
    return (
        <div
            style={{textAlign: 'center', 
                    right: '0',
                    left: '0',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '70%'
                    }}>
            <h2
            className='hello'
            style={{
                    fontWeight: '300',
                    margin: '1rem 0'
                    }}>
                Hello! I'm Jeongsol Kim
            </h2>
            <Stack direction='row' spacing={3} style={{display: 'block', alignItems: 'center'}}>
              <IconButton 
                style={{color:'inherit',
                        padding: '0'}}
                href="https://github.com/jeongsol-kim/jeongsol-kim">
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
            <p style={{padding: '1rem 0', textAlign: 'justify'}}>
                Currently, I'm a Ph.D candidate at Department of Bio and Brain
                Engineering, Korea Advanced Institute of Science and Technology,
                South Korea. My research interests are machine learning including 
                federated learning, diffusion-based generative model, and application to optics. 
                My main programming language is Python, but I also enjoy playing with MatLab, 
                C#, C++ and Javascript.
            </p>
            <Stack direction='row'>
                
            </Stack>
        </div>
    )
}

const Home = () => {
    useTitle('Oranging-K')
    return (
        <div style={{justifyContent: 'center'}}> 
            <Profile />
            <Information />
        </div>
    )
}

export default Home