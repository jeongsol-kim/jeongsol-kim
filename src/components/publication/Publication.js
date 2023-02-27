
import { Card, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import {Component, Fragment} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const PublicationBlock  = () => (
    <section className="section">
        <div className="container is-max-desktop">
            <div className="columns is-centered">
                <div className="column is-four-fifths">
                    <Card>
                    <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                        Publications
                    </h2>
                    <ImageList cols={1}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} style={{padding: "1rem"}}>
                                <img 
                                    src={item.img+'.png'}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{width: "100%"}}
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>{item.where}</span>}
                                    actionIcon={
                                        <>
                                        <IconButton href={item.code} style={{color: "white"}}>
                                            <GitHubIcon />
                                        </IconButton>
                                        <IconButton href={item.paper} style={{color: "white"}}>
                                            <ArticleOutlinedIcon />
                                        </IconButton>
                                        </>
                                    }
                                    position="bottom"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    </Card>
                </div>
            </div>
        </div>
    </section>
)

const itemData = [
    {
        img: process.env.PUBLIC_URL + '/imgs/dps',
        title: 'Diffusion Posterior Sampling for General Noisy Inverse Problems',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Michael T.McCann, Marc L. Klasky, Jong Chul Ye (*co-first) / ICLR 2023, spotlight',
        code: 'https://github.com/DPS2022/diffusion-posterior-sampling',
        paper: 'https://openreview.net/forum?id=OnD9zGAGT0k',
        
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/tavit',
        title: 'Task-Agnostic Vision Transformer for Distributed Learning of Image Processing',
        where: 'Boah Kim*, Jeongsol Kim*, Jong Chul Ye (*co-first) / IEEE Transaction on Image Processing, Vol 32',
        code: 'https://github.com/TAViT2022/TAViT',
        paper: 'https://ieeexplore.ieee.org/document/9979765',
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/festa',
        title: 'Federated Split Vision Transformer for COVID-19 CXR Diagnosis using Task-Agnostic Training',
        where: 'Sangjoon Park*, Gwanghun Kim*, Jeongsol Kim, Boah Kim, Jong Chul Ye (*co-first) / NeurIPS 2021',
        code: '',
        paper: 'https://openreview.net/pdf?id=Ggikq6Tdxch',
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/otcyclegan',
        title: 'Optimal Transport Driven CycleGAN for Unsupervised Learning in Inverse Problem',
        where: 'Byeongsu Sim, Gyutaek Oh, Jeongsol Kim, Chanyonh Jung, Jong Chul Ye / SIAM Journal on Imaging Science Vol. 13 (2020)',
        code: '',
        paper: 'https://epubs.siam.org/doi/10.1137/20M1317992'
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