
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import {Component, Fragment} from "react";


const PublicationBlock  = () => (
    <section className="section">
        <div className="container is-max-desktop">
            <div className="columns is-centered">
                <div className="column is-four-fifths">
        <ImageList cols={1}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img></img>
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.subtitle}</span>}
                    position="below"/>
                </ImageListItem>
            ))}
        </ImageList>
        </div>
        </div>
        </div>
    </section>
)

const itemData = [
    {
        img: '',
        title: 'Diffusion Posterior Sampling for General Noisy Inverse Problems',
        subtitle: 'ICLR 2023, spotlight'
    },
    {
        img: '',
        title: 'Diffusion Posterior Sampling for General Noisy Inverse Problems',
        subtitle: 'ICLR 2023, spotlight'
    }
]

export default class Publication extends Component{
    render(){
        return (
            <Fragment>
                <PublicationBlock />
            </Fragment>
        )
    }
}