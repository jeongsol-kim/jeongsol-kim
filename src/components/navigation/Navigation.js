
import {Component, Fragment} from "react";


const NaviBlock  = () => (
    <section className="section">
        <p>Navigation</p>
    </section>
)

export default class Navigation extends Component{
    render(){
        return (
            <Fragment>
                <NaviBlock />
            </Fragment>
        )
    }
}