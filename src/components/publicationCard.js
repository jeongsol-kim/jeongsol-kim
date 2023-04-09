import styled from "styled-components";
import { Card, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { publicationData } from "../data/publication";

const PublicationBlock = (item) => (
    <ImageListItem key={item.img}>
    <img
        src={item.img + '.png'}
        alt={item.title}
        loading="lazy"
    />
    <ImageListItemBar 
        title={item.title}
        subtitle={<span>{item.where}</span>}
        actionIcon={
            <>
            <IconButton href={item.code}>
                <GitHubIcon />
            </IconButton>
            <IconButton href={item.code}>
                <ArticleOutlinedIcon />
            </IconButton>
            </>
        }
    />
    </ImageListItem>
)

// const StyledPublicationBlock = styled(PublicationBlock)`
//     padding: 0px 0px;
// `

const PublicationCard = () => (
    <div>
        <PublicationBlock />
    </div>
);
export default PublicationCard;
