import PostPage from "./post_page";
import { Link, Route, Routes } from "react-router-dom";
import { PostList } from "../data/post_list";

const WorkList = ({match}) => (
    <>
    <h2> Test </h2>
    <ul>
        {PostList.map((item) => (
            <li key={item.title}>
                <Link to={`${item.title}`}>
                    {item.title}
                </Link> 
            </li>
        ))}
    </ul>
    </>
)


const Sidework = () => {
    return (
        <div className="center-content">
            <Routes>
            <Route path='/' element={<WorkList />} />
            <Route path={':title'} element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default Sidework