
import { Card, Divider, Grid, List, ListItem } from "@mui/material";
import {forwardRef, Fragment} from "react";


const NewsBlock  = forwardRef((props, ref) => (
    <section className="section" ref={ref}>
        <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
            <div className="column is-four-fifths">
                <Card>
                    <Grid container>
                        <Grid item>
                            <h4 className="subtitle left">
                            Update
                            </h4>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item>
                            <List>
                                <ListItem>
                                    (2/28) A paper is accepted to CVPR 2023
                                </ListItem>
                                <ListItem>
                                    (2/6) Got Samsung Huantech gold award
                                </ListItem>
                                <ListItem>
                                    (1/21) A paper is accepted to ICLR 2023
                                </ListItem>
                                <ListItem>
                                    (12/6) Publish a new repository for phase retrieval algorithems
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Card>

            </div>
        </div>
        </div>
    </section>
));

const News = forwardRef((props, ref) => {
    return (
        <Fragment>
            <NewsBlock ref={ref}/>
        </Fragment>
    );
});

export default News;