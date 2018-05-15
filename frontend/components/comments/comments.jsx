import React from 'react';
import CommentItem from '../comment_item/comment_item';
import CommentForm from '../comment_form/comment_form';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const commentsToRender = [];
    const poemComments = this.props.comments;
    const commentAuthors = this.props.commentAuthors;
    // debugger
    this.props.comments.forEach((comment) => {
      // debugger
      let commentAuthorId = comment.comment_author_id;
      commentsToRender.push(
        <CommentItem
          key={`comment-item-${comment.id}`}
          body={comment.body}
          commentAuthor={commentAuthors[commentAuthorId]} />
      );
    });

    return(
      <div className="comments-container">
        <hr className="line4" />
        <h3 className="comments-title">comments</h3>
        <CommentForm
          poemId = {this.props.poemId}
          createComment={this.props.createComment}
          clearErrors={this.props.clearErrors} />
        <ul className="comment-items-list-container">
          {commentsToRender}
        </ul>
      </div>
    );
  }
}

export default Comments;
