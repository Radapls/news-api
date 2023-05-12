import { Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNews from "../hooks/useNews";
import { Report } from "./Report";



function NewsList()
{
    const { news, totalNews, handlePageChange, page } = useNews();

    const totalPages = Math.ceil(totalNews / 20);

    return (
        <>
            <Typography textAlign={'center'} marginY={5} variant="h3" component={'h2'}>
                Last news
            </Typography>

            <Grid container spacing={2}>
                {news.map(report =>

                    <Report report={report} key={report.url} />
                )}

            </Grid >

            <Stack sx={{ marginY: 10 }} spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Pagination count={totalPages} color="primary" onChange={handlePageChange} page={page} />
            </Stack>
        </>
    )
}

export default NewsList