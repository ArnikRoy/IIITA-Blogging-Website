import { Box, Typography, styled } from "@mui/material";
import { addElipsis } from "../../../utils/common-utils";

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`;

const Image = styled('img')({
    width: '100%',
    height: 150,
    objectFit: 'cover',
    borderBottom: '1px solid #d3cede'
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    margin-top: 5px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    padding: 0 15px 15px 15px;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    return (
        <Container>
            <Image src={url} alt="blog" />
            <Text>{post.categories}</Text>
            <Text>Author: {post.username}</Text>
            <Heading>{addElipsis(post.title, 20)}</Heading>
            <Details>{addElipsis(post.description, 100)}</Details>
        </Container>
    );
}

export default Post;
