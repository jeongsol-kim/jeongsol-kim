import { ImageList, ImageListItem, ImageListItemBar  } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import PostPage from "./post_page";
import { PostList } from "../data/post_list";
import styled from "styled-components";
import { useTitle } from "./title_hook";

const StyledImageListItemBar = styled(ImageListItemBar)`
    font-weight: bold;
    text-align: center;
`

const WorkBlock = ({item}) => {
    return (
        <ImageListItem key={item.id}>
        <img
            src={item.thumbnail}
            alt={item.title}
            loading='lzay' 
        />
        <StyledImageListItemBar 
            title={item.title}
            position="below"
        />
        </ImageListItem>
    )
}

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration-line: none;
`

const WorkList = () => {
    useTitle('SideWork | Oranging-K')
    return (
    <div className="center-content">
        <h2 className="hello"
            style={{textAlign:'center', padding: '1rem 0'}}>
            Side Projects
        </h2>
        <ImageList cols={2} gap={'2rem'}>
            {PostList.map((item) => (
                <StyledLink to={`${item.title}`}>
                    <WorkBlock item={item} />
                </StyledLink> 
            ))
            }
        </ImageList>
    </div>
)}


const Sidework = () => {
    return (
        <Routes>
        <Route path='/' element={<WorkList />} />
        <Route path={':title'} element={<PostPage />} />
        </Routes>
    );
}

export default Sidework