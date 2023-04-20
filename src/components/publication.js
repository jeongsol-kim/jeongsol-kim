
import PublicationList from "./publicationList";
import { publicationData } from "../data/publication";

const Publication = () => {
    return (
        <>
        <h2 className="hello"
            style={{textAlign:'center', padding: '1rem 0'}}>
            Publications
        </h2>
        <PublicationList itemData={publicationData}/>
        </>
    );
}

export default Publication