import { ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import PostPage from "./post_page";
import { PostList } from "../data/post_list";

const WorkBlock = ({item}) => {
    return (
        <ImageListItem key={item.id}>
        <img
            src={item.thumbnail}
            alt={item.title}
            loading='lzay' 
        />
        <ImageListItemBar 
            title={item.title}
            position="below"
        />
        </ImageListItem>
    )
}

const WorkList = () => (
    <ImageList cols={2} gap={'2rem'}>
        {PostList.map((item) => (
            <Link to={`${item.title}`}>
                <WorkBlock item={item} />
            </Link> 
        ))
        }
    </ImageList>
)


const Sidework = () => {
    return (
        <div className="center-content">
            <h2 className="hello"
                style={{textAlign:'center', padding: '1rem 0'}}>
                Side Projects
            </h2>
            <Routes>
            <Route path='/' element={<WorkList />} />
            <Route path={':title'} element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default Sidework