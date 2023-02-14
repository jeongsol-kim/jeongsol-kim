import {Component, Fragment} from "react";


const IntroBlock = () => (
    <section className="section">
        <p>The Introduction</p>
    </section>
)

export default class Introduction extends Component{
    render(){
        return (
            <Fragment>
                <IntroBlock />
            </Fragment>
        )
    }
}