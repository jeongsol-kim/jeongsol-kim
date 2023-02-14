
import {Component, Fragment} from "react";


const NewsBlock  = () => (
    <section className="section">
        <p>Update!</p>
    </section>
)

export default class News extends Component{
    render(){
        return (
            <Fragment>
                <NewsBlock />
            </Fragment>
        )
    }
}