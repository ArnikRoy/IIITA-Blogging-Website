import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Comments from "./comments/Comments";
const { Box, Typography, styled } = require('@mui/material');
const { Delete, Edit } = require('@mui/icons-material');
const { API } = require('../../service/api');
const {DataContext} = require('../../context/DataProvider')


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    // display : 'flex',
    // flexDirection : 'column',
    // allignItems : 'center',
    // [theme.breakpoints.down('md')]: {
    //     margin: 0
    // },
    [theme.breakpoints.down('md')]: {
        margin: '20px 50px',
    },
    [theme.breakpoints.down('sm')]: {
        margin: '10px 20px',
    },
}));

// const Image = styled('img')({
//     width: '100%',
//     height: '50vh',
//     objectFit: 'cover',
// });

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Image = styled('img')({
    width: '100%',
    maxWidth: '700px', // Ensures the image does not overflow
    height: '60vh', // Maintain the height
    objectFit: 'contain', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0 10px 0;
    word-break : break-word;
    color: #333;
`;

const Description = styled(Typography)`
    word-break : break-word;
    margin: 20px 0;
    line-height: 1.6;
    color: #555;
    margin-left: 100px;
`

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    cursor: pointer;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    cursor: pointer;
`;

const DateBox = styled(Typography)`
    margin-left: auto;
    margin-right: 10px; // Shifted right
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    marginLeft: '100px',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));


const DetailView = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const {account} = useContext(DataContext)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                }
            } catch (error) {
                console.error('Error fetching post!', error);
            }
        };
        fetchData();
    }, [id]);

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const deleteBlog = async () => {
        try {
            let response = await API.deletePost(post._id);
            if (response.isSuccess) {
                navigate('/');
            } else {
                console.error('Failed to delete post:', response.msg);
                alert('Failed to delete post: ' + response.msg);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Error deleting post: ' + error.message);
        }
    };

    return (
        <Container>
            <ImageContainer>
                <Image src={url} alt="blog"/>
            </ImageContainer>
            
            <Box style={{float:'right'}}>
                {
                    account.username === post.username &&
                    <>
                        <Link to={`/update/${post._id}`}><EditIcon color='primary'/></Link>
                        <DeleteIcon onClick={()=>deleteBlog()} color='error'/>
                    </>
                }
                
            </Box>

            <Heading>{post.title}</Heading>

            <Author>
                <Typography>Author : <Box component='span' style={{fontWeight:800}}>{post.username}</Box></Typography>
                <DateBox style={{marginLeft:'auto'}}>Created at : { new Date(post.createdDate).toUTCString()}</DateBox>
            </Author>

            <Description>{post.description}</Description>
            <Comments post={post}/>
        </Container>
    );
};

export default DetailView;

