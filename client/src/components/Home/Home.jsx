// import { Grid } from "@mui/material"
// import Categories from "./Categories"
// import Posts from "./post/Posts"

// const { default: Banner } = require("../banner/Banner")


// const Home = () => {
//     return (
//         <>
//             <Banner/>
//             <Grid container>
//                 <Grid item lg={2} sm={2} xs={12}>
//                     <Categories/>
//                 </Grid>
//                 <Grid container item xs={12} sm={10} lg={10}>
//                     <Posts/>
//                 </Grid>
//             </Grid>
            
//         </>
        
//     )
// }

// export default Home



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
