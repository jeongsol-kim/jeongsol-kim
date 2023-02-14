
import {Component, Fragment} from "react";


const FooterBlock  = () => (
    <section className="section">
        <p>Footer</p>
    </section>
)

export default class Footer extends Component{
    render(){
        return (
            <Fragment>
                <FooterBlock />
            </Fragment>
        )
    }
}