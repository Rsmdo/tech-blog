const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

// all associations have to have ondelete 
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
//when deleted it becomes null 
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "SET NULL",
  });

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});



module.exports = { User, Post, Comment };
