async function toComment(event) {
    event.preventDefault();
  //take the value inside the text area 
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
      //to find the id
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1];
  //if comment text has a value
    if (comment_text) {
        //use post to post to db with correct endpoint 
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
            //contents to be posted 
          post_id,
          comment_text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector(".comment-form").addEventListener("submit", toComment);
  