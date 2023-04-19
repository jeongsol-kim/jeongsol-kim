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
        <div className="center-content" style={{textAlign: 'justify'}}>
            <ReactMarkdown 
                components={{img: ({node, ...props}) => <img style={{maxWidth: '100%', 
                                                                     display: 'block',
                                                                     marginLeft: 'auto',
                                                                     marginRight: 'auto'}}{...props} alt=""/>}}
                remarkPlugins={[remarkGfm]}>
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