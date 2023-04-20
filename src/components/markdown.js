import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Markdown = ({ markdown, isDarkmode }) => {
    const syntaxTheme = isDarkmode? oneDark:oneLight;

    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={syntaxTheme}
                PreTag="div"
                language={match[1]}
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className ? className : ""} {...props}>
                {children}
              </code>
            );
    },
    img({node, ...props}) {
        return (
        <img style={{maxWidth: '100%', 
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'}}{...props} alt=""/>
        )
    },
    }

    return (
    <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}>
        {markdown}
    </ReactMarkdown>
    )
}

export default Markdown;