
import { publicationData } from "../data/publication";
import PublicationListv2 from "./publicationList";

const Publication = () => {
    return (
        <>
        <h2 className="hello"
            style={{textAlign:'center', padding: '1rem 0'}}>
            Publications
        </h2>
        <PublicationListv2 itemData={publicationData}/>
        </>
    );
}

export default Publication