const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//first get comments 
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// To create comment need auth 
router.post("/", withAuth, (req, res) => {
  Comment.create({
      //need three requirments for comment creation 
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    //if error 
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// to delete need auth also need to target 
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
        //if cannot find the comment id in data 
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;