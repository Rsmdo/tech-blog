

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

