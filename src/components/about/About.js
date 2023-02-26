import {Component, Fragment} from "react";
import {Grid, Card, List, ListItem, ListItemAvatar, ListItemText, Avatar} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

export default class About extends Component{
    render(){
        return (
            <Fragment>
                <section className="section">
                    <div className="container is-max-desktop">
                        <div className="columns is-centered has-text-centered">
                        <div className="column is-four-fifths">
                            <Card>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <h4 className="subtitle left">
                                        About Me
                                        </h4>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h4 className="subtitle left">
                                        Bio
                                        </h4>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="has-text-justified">
                                        <p style={{padding: '0rem 1rem'}}>
                                            Hello. I'm Jeongsol Kim, Ph.D candidate at Korea Advanced
                                            Inst. of Science and Technology (KAIST).
                                        </p>
                                        <p style={{padding: '0rem 1rem'}}>
                                            My research interests are machine learning includes
                                            federated learning, diffusion-based generative model, and
                                            application to optics.
                                        </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <MailOutlineIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Email" secondary="jeongsol@kaist.ac.kr"/>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <LocalPhoneOutlinedIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Tel" secondary="+82 042-350-3460"/>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <BusinessOutlinedIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Address" secondary="291 Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea, 34141"/>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Card>
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}