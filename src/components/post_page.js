import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { PostList } from "../data/post_ilst";
import { useParams } from "react-router-dom";


const PostPage = () => {
    const { title } = useParams();
    const post = PostList.find((item) => item.title === title);
    return (
        <div className="center-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
        </div>
    )
}

export default PostPage