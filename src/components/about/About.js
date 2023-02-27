import {Component, Fragment} from "react";
import {Grid, Card, List, ListItem, ListItemAvatar, ListItemText, Avatar, ButtonGroup, Button, ListItemSecondaryAction, ListItemButton} from "@mui/material";
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
                                <Grid container>
                                    <Grid item xs={6}>
                                        <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                                        About Me
                                        </h2>
                                        <div className="has-text-justified">
                                        <p style={{padding: '0rem 1rem'}}>
                                            My research interests are machine learning including
                                            federated learning, diffusion-based generative model, and
                                            application to optics.
                                            My main programming language is Python, but I also enjoy
                                            playing with MatLab, C#, C++ and Javascript.
                                            I hope to be a professional in my research field.
                                        </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div style={{padding: '2.5em 0em'}}></div>
                                        <List style={{padding: '0em 0em'}}>
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