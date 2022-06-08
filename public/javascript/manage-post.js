
async function newPost(event) {
    event.preventDefault();
    //take title and content section and take value from input to push to db 
    const title = document.querySelector('input[name="post-title"]').value;

    const post_content = document.querySelector('textarea[name="post_content"]').value;

    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
        title,
        post_content,
        }),
        headers: {
        "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        //if response is ok then change endpoint
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
}

//==================delete post function ==================================================================

async function deletePost(event) {
    event.preventDefault();
    //to delete post target correct id 

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    //get correct endpoint with the id and method delete
    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
}

// =================edit post fucntion =================================================

async function editPost(event) {
    event.preventDefault();
    //value in title input 
    const title = document.querySelector('input[name="post-title"]').value.trim();
    //value in content input 
    const post_content = document.querySelector('textarea[name="post_content"]').value.trim();
    //target correct id 
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    //use put function for update db
    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
        title,
        post_content,
        }),
        headers: {
        "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
}



//==============listeners for when function will be called/executed======================================================
document.querySelector(".edit-post-form").addEventListener("submit", editPost);

document.querySelector(".delete-post-btn").addEventListener("click", deletePost);

document.querySelector(".new-post-form").addEventListener("submit", newPost);
