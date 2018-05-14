import React from 'react';
import CommentItem from '../comment_item/comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    const commentsToRender = [];
    const poemComments = this.props.comments;
    const commentAuthors = this.props.commentAuthors;
    this.props.commentIds.forEach((id) => {
      let commentAuthorId = poemComments[id].comment_author_id;
      commentsToRender.push(
        <CommentItem
          key={`comment-item-${id}`}
          body={poemComments[id].body}
          commentAuthor={commentAuthors[commentAuthorId]} />
      );
    });

    return(
      <div className="comments-container">
        comments:
        <ul className="comment-items-list-container">
          {commentsToRender}
        </ul>
      </div>
    );
  }
}

export default Comments;
