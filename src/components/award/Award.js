import {Card} from "@mui/material";
import {Component, Fragment} from "react";


const AwardBlock = () => (
    <section className="section">
        <div className="container is-max-desktop">
            <div className="columns is-centered has-text-centered">
                <div className="column is-four-fifths">
                    <Card>
                        <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                            Honors & Awards
                        </h2>
                    </Card>
                </div>
            </div>
        </div>
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