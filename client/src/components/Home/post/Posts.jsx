import { useEffect, useState } from "react";
import { Grid, Box } from '@mui/material';
import Post from "./Post";
import { Link, useSearchParams } from "react-router-dom";
const { API } = require('../../../service/api');

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                setPosts(response.data);
            }
        };
        fetchData();
    }, [category]);

    return (
        <Grid container spacing={3}>
            {posts && posts.length > 0 ? posts.map(post => (
                <Grid item lg={4} sm={6} xs={12} key={post._id}>
                    <Link to={`details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Post post={post}/> 
                    </Link>
                </Grid>
            )) : (
                <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                    No data available to display
                </Box>
            )} 
        </Grid>
    );
};

export default Posts;
