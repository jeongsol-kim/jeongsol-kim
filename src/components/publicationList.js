import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { IconButton, Stack } from "@mui/material";
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
        <Card variant="outlined" style={{margin: "1rem"}} sx={{ boxShadow: 'none', resize: 'horizontal', overflow: 'auto' }}>
            <AspectRatio ratio="21/9" objectFit="contain">
                <img
                    src={item.img + '.png'}
                    alt={item.title}
                    loading="lazy"
                />
            </AspectRatio>
            <CardContent>
                <Typography level="title-md">{item.title}</Typography>
                <Typography level="body-sm">{item.where}</Typography>
                <Typography level="body-xs">{item.dsec}</Typography>
            </CardContent>
            <Stack direction='row'>
                <IconButton href={item.code} style={{padding: '0 4px'}}>
                     <GitHubIcon 
                        sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}
                    />
                </IconButton>
                <IconButton href={item.paper} style={{padding: '0 4px'}}>
                    <ArticleOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}/>
                </IconButton>
            </Stack>
        </Card>

    // <Stack direction="row">
    // <img
    //     src={item.img + '.png'}
    //     alt={item.title}
    //     loading="lazy"
    // />
    // <ImageListItemBar 
    //     title={item.title}
    //     subtitle={<span>{item.where}</span>}
    //     actionIcon={
    //         <Stack direction='row'>
    //             <IconButton href={item.code} style={{padding: '0 4px', color:'white'}}>
    //                 <GitHubIcon 
    //                     sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}
    //                 />
    //             </IconButton>
    //             <IconButton href={item.paper} style={{padding: '0 4px', color: 'white'}}>
    //                 <ArticleOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 }}}/>
    //             </IconButton>
    //         </Stack>
    //     }
    //     position="bottom"
    // />

    // </Stack>
    )
}

const PublicationListv2 = ({itemData}) => (
    <div className="center-content" variant="mansonry">
        <Stack>
            {itemData.map((item) => (
                <>
                <PublicationBlock item={item}/>
                </>
            ))}
        </Stack>
    </div>
);
export default PublicationListv2;
