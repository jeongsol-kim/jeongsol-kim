
import {Component, Fragment} from "react";


const ConferenceBlock = () => (
    <section className="section">
        <p>International Conferences</p>
    </section>
)

export default class Conference extends Component{
    render(){
        return (
            <Fragment>
                <ConferenceBlock />
            </Fragment>
        )
    }
}