import {Avatar, Card, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {forwardRef, Fragment} from "react";


const AwardBlock = forwardRef((props, ref) => (
    <section className="section" ref={ref}>
        <div className="container is-max-desktop">
            <div className="columns is-centered has-text-centered">
                <div className="column is-four-fifths">
                    <Card>
                        <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                            Honors & Awards
                        </h2>
                        <List>
                            {itemData.map((item) => (
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <EmojiEventsIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.title}
                                    secondary={item.subtitle}
                                />
                            </ListItem>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>
        </div>
    </section>
));

const itemData = [
    {
        title: "Samsung Humantech Paper Award - Gold award",
        subtitle: '1st in signal processing / 2023.02.06'
    },
    {
        title: "2019 BBE Excellent Undergraduate Research",
        subtitle: "BBE, KAIST / 2020.08.28"
    },
    {
        title: "Dean's List in recognition of outstanding scholastic achievement",
        subtitle: "College of enginerring, KAIST / 2017 spring and fall"
    }
]

const Awards = forwardRef((props, ref) => {
    return (
        <Fragment>
            <AwardBlock ref={ref} />
        </Fragment>
    );
});

export default Awards;