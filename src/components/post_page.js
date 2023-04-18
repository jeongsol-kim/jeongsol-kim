import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { PostList } from "../data/post_list";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const PostPage = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const post = PostList.find((item) => item.title === title);
    return (
        <div className="center-content">
            <img 
                src={post.thumbnail} 
                alt={post.title}
                style={{maxWidth:'15rem', display:'block'}}/>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
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