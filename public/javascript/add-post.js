
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

document.querySelector(".new-post-form").addEventListener("submit", newPost);