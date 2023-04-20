import { PostList } from "../data/post_list";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTitle } from "./title_hook";
import Markdown from "./markdown";

const PostPage = ({isDarkMode}) => {
    const navigate = useNavigate();
    const { title } = useParams();
    useTitle(title + ' | Jeongsol Kim');
    const post = PostList.find((item) => item.title === title);
    return (
        <div className="center-content">
            <Markdown markdown={post.content} isDarkmode={isDarkMode}/>
            <Button 
                color='info'
                startIcon={<ChevronLeftIcon />}
                onClick={() => navigate(-1)}>
                Back
            </Button>
        </div>
    )
}

export default PostPage