import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const commentsToRender = [];
    const poemComments = this.props.comments;
    const commentAuthors = this.props.commentAuthors;
    this.props.comments.forEach((comment) => {
      let commentAuthorId = comment.comment_author_id;
      commentsToRender.unshift(
        <CommentItem
          key={`comment-item-${comment.id}`}
          body={comment.body}
          commentAuthor={commentAuthors[commentAuthorId]} />
      );
    });

    return(
      <div className="comments-container" data="comment">
        <hr className="line4" />
        <h3 className="comments-title">comments</h3>
        <CommentForm
          poemId = {this.props.poemId}
          createComment={this.props.createComment}
          errors={this.props.errors}
          clearErrors={this.props.clearErrors} />
        <ul className="comment-items-list-container">
          {commentsToRender}
        </ul>
      </div>
    );
  }
}

export default Comments;
