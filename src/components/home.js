import profile from '../assets/profile.jpeg'

const Home = () => {
    return (
        <div style={{alignContent: 'center'}}>
            <img 
                src={profile}
                alt='Profile'
                width={'90%'}
                style={{margin: 'auto',
                        display: 'block'}}
                />
        </div>
    )
}

export default Home