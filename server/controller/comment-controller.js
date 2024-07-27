const Comment = require('../model/comment')

const newComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        comment.save()

        return res.status(200).json({ msg : 'Comment saved successfully!'})
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
};

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({postId : req.params.id})

        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ error : error.message})
    }
};

const deleteComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.id });

        res.status(200).json({ msg : 'Comment deleted successfully!'})
    } catch (error) {
        res.status(500).json({ error : error.message})
    }
};


module.exports = {newComment, getComments, deleteComment}