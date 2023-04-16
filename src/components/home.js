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
                width={'50%'}
                />
        </div>
    )
}

const Information = () => {
    return (
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
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
            <p style={{padding: '1rem 0'}}>
                Let's me introduce myself.
            </p>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <Profile />
            <Information />
        </>
    )
}

export default Home