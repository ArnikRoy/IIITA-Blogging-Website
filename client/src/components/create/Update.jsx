import { useContext, useEffect, useState } from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
const { Box, styled, FormControl, InputBase, Button, TextareaAutosize } = require("@mui/material");

const Container = styled(Box)`
    margin: 50px 100px;
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});
    
const StyledFormControl = styled(FormControl)`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 30px;
    font-size: 18px;
    border: none;
    &:focus-visible {
        outline: none;
    };
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const Update = () => {
    
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    
    const location = useLocation();
    const navigate = useNavigate()

    const { account } = useContext(DataContext);
    const { id } = useParams()
    
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async() => {
            let response = await API.getPostById(id)
            if(response.isSuccess){
                setPost(response.data)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                console.log('Yes file is there');
                const data = new FormData();
                data.append('file', file);
                data.append('name', file.name);

                // API call
                try {
                    const response = await API.uploadFile(data);
                    setPost(prevPost => ({
                        ...prevPost,
                        picture: response.data
                    }));
                } catch (error) {
                    console.error('Error uploading file', error);
                }
            }
        };
        getImage();
    }, [file]);

    useEffect(() => {
        setPost(prevPost => ({
            ...prevPost,
            categories: location.search?.split('=')[1] || 'All',
            username: account.username
        }));
    }, [location.search, account.username]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const updateBlogPost = async() => {
        let response = await API.updatePost(post)
        if(response.isSuccess){
            navigate(`/details/${id}`)
        }
    }

    return (
        <Container>
            <Image src={url} alt="banner" />

            <StyledFormControl>
                <label htmlFor='fileInput'>
                    <Add fontSize='large' color='action' />
                </label>

                <input type='file' id='fileInput' style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <InputTextField placeholder='Title' value={post.title} onChange={(e) => handleChange(e)} name='title' />

                <Button variant='contained' onClick={() => updateBlogPost()}>Update</Button>
            </StyledFormControl>

            <TextArea minRows={5} placeholder='Enter your text....' value={post.description} onChange={(e) => handleChange(e)} name='description' />
        </Container>
    );
};

export default Update;
