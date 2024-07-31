import { Grid, Box } from "@mui/material";
import Categories from "./Categories";
import Posts from "./post/Posts";
const { default: Banner } = require("../banner/Banner");

const Home = () => {
    return (
        <>
            <Banner />
            <Box sx={{ padding: "20px" }}>
                <Grid container spacing={3}>
                    <Grid item lg={2} sm={3} xs={12}>
                        <Categories />
                    </Grid>
                    <Grid item lg={10} sm={9} xs={12}>
                        <Posts />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;
