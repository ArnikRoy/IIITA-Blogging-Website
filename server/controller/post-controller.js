const Post = require('../model/post')

const createPost = async(req,res) => {
    try {
        const post = await Post(req.body)
        post.save()

        return res.status(200).json('Post saved successfully!')
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getAllPosts = async(req,res) => {
    let category = req.query.category;
    let posts;
    try {
        if(category){
            posts = await Post.find({ categories : category})
        }
        else{
            posts = await Post.find({})
        } 

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ msg : error.message})
    }
}


const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        return res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        return res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

const updatePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({ msg : 'Post not found'})
        }

        await Post.findByIdAndUpdate(req.params.id, { $set: req.body})

        return res.status(200).json({ msg : 'Post updated successfully!'})
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
}


const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        await post.deleteOne();

        return res.status(200).json({ msg: 'Post deleted successfully!' });
    } catch (error) {
        console.error('Error deleting post:', error);
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {createPost, getAllPosts, getPost, updatePost, deletePost}