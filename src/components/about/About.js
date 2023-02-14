
import {Component, Fragment} from "react";


const AboutBlock = () => (
    <section className="section">
        <p>About Me</p>
    </section>
)

export default class About extends Component{
    render(){
        return (
            <Fragment>
                <AboutBlock />
            </Fragment>
        )
    }
}