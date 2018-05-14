import React from 'react';
import CommentItem from '../comment_item/comment_item';
import CommentForm from '../comment_form/comment_form';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    this.render();
  }

  render () {
    const commentsToRender = [];
    const poemComments = this.props.comments;
    const commentAuthors = this.props.commentAuthors;
    this.props.commentIds.forEach((id) => {
      let commentAuthorId = poemComments[id].comment_author_id;
      commentsToRender.unshift(
        <CommentItem
          key={`comment-item-${id}`}
          body={poemComments[id].body}
          commentAuthor={commentAuthors[commentAuthorId]} />
      );
    });

    return(
      <div className="comments-container">
        <hr className="line4" />
        <h3 className="comments-title">comments</h3>
        <CommentForm
          poemId = {this.props.poemId}
          createComment={this.props.createComment} />
        <ul className="comment-items-list-container">
          {commentsToRender}
        </ul>
      </div>
    );
  }
}

export default Comments;
