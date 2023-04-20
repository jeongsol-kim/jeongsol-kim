import { IconButton, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useTitle } from "./title_hook";

const PublicationBlock = ({item}) => {
    useTitle('Publication | Jeongsol Kim');

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
            <Stack direction='row'>
                <IconButton href={item.code} style={{padding: '0 4px', color:'white'}}>
                    <GitHubIcon 
                        sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}
                    />
                </IconButton>
                <IconButton href={item.paper} style={{padding: '0 4px', color: 'white'}}>
                    <ArticleOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}/>
                </IconButton>
            </Stack>
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
                <>
                <PublicationBlock item={item}/>
                <p style={{textAlign: 'justify'}}>
                    Summary: {item.desc}
                </p>
                </>
            ))}
        </ImageList>
    </div>
);
export default PublicationList;
