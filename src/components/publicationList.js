import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useTitle } from "./title_hook";

export const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });

    return <>{isMobile && children}</>
}

export const PC = ({children}) => {
    const isPc = useMediaQuery({
        query: "(min-width:769px)"
    });

    return <>{isPc && children}</>
}

const PublicationBlock = ({item}) => {
    useTitle('Publication | Jeongsol Kim');

    return(
    <ImageListItem key={item.title}>
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
    {/* <p style={{textAlign:'justify'}}>
        Summary: {item.desc}
    </p> */}
    </ImageListItem>
    )
}

const PublicationList = ({itemData}) => (
    <div className="center-content">
        <ImageList cols={1} gap={16}>
            {itemData.map((item) => (
                <>
                <PublicationBlock item={item}/>
                </>
            ))}
        </ImageList>
    </div>
);
export default PublicationList;
