import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import post from "../data/post";

const Sidework = () => {
    return (
        <div className="center-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]} children={post} />
        </div>
    );
}

export default Sidework