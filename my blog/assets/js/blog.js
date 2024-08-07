let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
const blogPost = document.getElementById('blogs')

for (let i=0; i < blogPost.length; i++){
    const recentPost = blogs[i]

    const post = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postComment = document.createElement("p");
    const postUser = document.createElement("h3");

    post.appendChild(postTitle);
    post.appendChild(postComment);
    post.appendChild(postUser);
} 