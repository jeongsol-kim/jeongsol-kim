
import {Component, Fragment} from "react";


const PublicationBlock  = () => (
    <section className="section">
        <p>Publications</p>
    </section>
)

export default class Publication extends Component{
    render(){
        return (
            <Fragment>
                <PublicationBlock />
            </Fragment>
        )
    }
}