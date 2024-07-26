import { Grid } from "@mui/material"
import Categories from "./Categories"
import Posts from "./post/Posts"

const { default: Banner } = require("../banner/Banner")


const Home = () => {
    return (
        <>
            <Banner/>
            <Grid container>
                <Grid item lg={2} sm={2} xs={12}>
                    <Categories/>
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts/>
                </Grid>
            </Grid>
            
        </>
        
    )
}

export default Home