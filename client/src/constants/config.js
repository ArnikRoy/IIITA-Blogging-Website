// Api notification msg
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data. Please try again"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity"
    }
}


export const SERVICE_URLS = {
    userSignup : { url :'/signup', method : 'POST'},
    userLogin : { url :'/login', method : 'POST'},
    uploadFile : { url :'file/upload', method : 'POST'},
    createPost : { url :'create', method : 'POST'},
    getAllPosts : { url : '/posts', method : 'GET', params : true},
    getPostById : { url : 'post', method: 'GET', query : true},
    updatePost : { url : 'update', method: 'PUT', query : true},
    deletePost : { url : 'delete', method: 'DELETE', query : true},
    newComment : { url :'/comment/new', method : 'POST'},
    getAllComments : {url : 'comments', method : 'GET', query : true},
    deleteComment : { url : 'comment/delete', method: 'DELETE', query : true},
}


// module.exports={
//     API_NOTIFICATION_MESSAGES,
//     SERVICE_URLS,
// }