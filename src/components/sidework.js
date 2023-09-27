import { ImageList } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "react-responsive";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { PostList } from "../data/post_list";
import PostPage from "./post_page";
import { useTitle } from "./title_hook";

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

const PCActionAreaCard = ({item}) => {
  return (
    <Card sx={{ display: 'flex' }} key={item.id}>
        <CardContent sx={{ flex: '1 0'}}>
          <Typography gutterBottom variant="h5" component="div" className="introtext">
            {item.title}
          </Typography>
        </CardContent>
      <CardMedia
          component="img"
          height="140"
          image={item.thumbnail}
          sx={{ width: 151 }}
          alt={item.title}
        />
    </Card>
  );
}

const MobileActionAreaCard = ({item}) => {
  return (
    <Card key={item.id}>
      <CardMedia
          component="img"
          height="140"
          image={item.thumbnail}
          alt={item.title}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom  component="div" className="introtext">
            {item.title}
          </Typography>
        </CardContent>
    </Card>
  );
}
const StyledLink = styled(Link)`
    color: inherit;
    text-decoration-line: none;
`

const WorkList = () => {
    useTitle('SideWork | Jeongsol Kim')
    return (
    <div className="center-content">
        <h2 className="hello"
            style={{textAlign:'center', padding: '1rem 0'}}>
            Side Projects
        </h2>
        <ImageList cols={1} gap={8}>
            {PostList.map((item) => (
                <StyledLink to={`${item.title}`}>
                    <PC>
                        <PCActionAreaCard item={item}/>
                    </PC>
                    <Mobile>
                        <MobileActionAreaCard item={item}/>
                    </Mobile>
                </StyledLink> 
            ))
            }
        </ImageList>
    </div>
)}


const Sidework = ({isDarkMode}) => {
    return (
        <Routes>
        <Route path='/' element={<WorkList />} />
        <Route path={':title'} element={<PostPage isDarkMode={isDarkMode}/>} />
        </Routes>
    );
}

export default Sidework