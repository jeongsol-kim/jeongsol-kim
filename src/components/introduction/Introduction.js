import {Component, Fragment} from "react";
import {Stack, ListItem, Card} from "@mui/material";


export default class Introduction extends Component{
    render(){
        return (
            <Fragment>
                <section className="section">
                    <div className="container is-max-desktop">
                    <div className="columns is-centered has-text-centered">
                        <div className="column is-four-fifths">
                        <Card>
                            <img id="me"
                                 height={"150rem"}
                                 src={process.env.PUBLIC_URL + "/imgs/cropped.png"}
                                 alt={"itsme!"}>
                            </img>
                            <h2 className="title is-3"> Jeongsol Kim</h2>
                            <p> Dept. Bio and Brain Engineering / Ph.D Candidate</p>
                        </Card>
                        </div>
                    </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}