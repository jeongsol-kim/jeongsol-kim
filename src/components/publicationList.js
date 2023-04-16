import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


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
            <IconButton href={item.paper}>
                <ArticleOutlinedIcon />
            </IconButton>
            </>
        }
        position="bottom"
    />
    </ImageListItem>
)

// const StyledPublicationBlock = styled(PublicationBlock)`
//     padding: 0px 0px;
// `

const PublicationList = ({itemData}) => (
    <div>
        <ImageList cols={2}>
            {itemData.map((item) => (
                <PublicationBlock item={item}/>
            ))}
        </ImageList>
    </div>
);
export default PublicationList;
