import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";

export const Report = ({ report }) =>
{
    const { urlToImage, url, title, description, source } = report;

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (

                    <CardMedia component={'img'} alt={`${title} report image`} image={urlToImage} height={'250'} />
                )}

                <CardContent>
                    <Typography variant="body1" color={'error'}>{source.name}</Typography>
                    <Typography variant="h5" component={'div'}>{title}</Typography>
                    <Typography variant="body2" component={'div'}>{description}</Typography>
                </CardContent>

                <CardActions>
                    <Link href={url} target="_blank" variant="button" color={'primary'} width={'100%'} textAlign={'center'}>
                        See report
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}
