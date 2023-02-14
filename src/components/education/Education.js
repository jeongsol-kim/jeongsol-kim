
import {Component, Fragment} from "react";


const EducationBlock  = () => (
    <section className="section">
        <p>Education</p>
    </section>
)

export default class Education extends Component{
    render(){
        return (
            <Fragment>
                <EducationBlock />
            </Fragment>
        )
    }
}