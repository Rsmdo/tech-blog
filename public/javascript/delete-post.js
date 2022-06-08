
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

document.querySelector(".delete-post-btn").addEventListener("click", deletePost);