
import {Component, Fragment} from "react";


const AwardBlock = () => (
    <section className="section">
        <p>Honors & Awards</p>
    </section>
)

export default class Awards extends Component{
    render(){
        return (
            <Fragment>
                <AwardBlock />
            </Fragment>
        )
    }
}