const express = require('express')
const { signupUser, loginUser } = require('../controller/user-controller')
const { uploadImage, getImage } = require('../controller/image-controller')
const upload  = require('../utils/upload')
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/post-controller')
const { authenticateToken } = require('../controller/jwt-controller')
const { newComment, getComments, deleteComment } = require('../controller/comment-controller')

const router = express.Router()

router.post('/login', loginUser)
router.post('/signup', signupUser)
router.post('/file/upload',upload.single('file'), uploadImage)
router.get('/file/:filename', getImage)

router.post('/create', authenticateToken,createPost)
router.get('/posts', authenticateToken, getAllPosts)
router.get('/post/:id', authenticateToken, getPost)
router.put('/update/:id', authenticateToken, updatePost)
router.delete('/delete/:id', authenticateToken, deletePost)

router.post('/comment/new', authenticateToken, newComment)
router.get('/comments/:id', authenticateToken, getComments)
router.delete('/comment/delete/:id', authenticateToken, deleteComment) 

module.exports=router