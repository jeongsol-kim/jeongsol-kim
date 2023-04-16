import { Badge, Stack } from '@mui/material'
import profile from '../assets/profile.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub'; 
import ArticleIcon from '@mui/icons-material/Article';

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
            <Stack direction='row' spacing={3} style={{display: 'block'}}>
                <GitHubIcon />
                <ArticleIcon />
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
    return (
        <div style={{justifyContent: 'center'}}> 
            <Profile />
            <Information />
        </div>
    )
}

export default Home