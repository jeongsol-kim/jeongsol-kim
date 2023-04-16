
import PublicationList from "./publicationList";
import { publicationData } from "../data/publication";

const Publication = () => {
    return (
        <PublicationList itemData={publicationData}/>
    );
}

export default Publication