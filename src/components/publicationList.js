import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


const PublicationBlock = ({item}) => {
    return(
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
            <IconButton href={item.paper}>
                <ArticleOutlinedIcon />
            </IconButton>
            </>
        }
        position="bottom"
    />
    </ImageListItem>
    )
}

const PublicationList = ({itemData}) => (
    <div className="center-content">
        <ImageList cols={1} gap={'2rem'}>
            {itemData.map((item) => (
                <PublicationBlock item={item}/>
            ))}
        </ImageList>
    </div>
);
export default PublicationList;
