import { connect } from 'react-redux';
import { fetchPoem } from '../../actions/poem_actions';
import { fetchAuthor, fetchAuthorFromPoem } from '../../actions/author_actions';
import Poem from './poem';

const mapStateToProps = (state, ownProps) => {
  const poem = state.entities.poems[ownProps.match.params.poemId] || { };
  return {
    poem: poem,
    author: state.entities.authors[poem.author_id] || { }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId)),
    fetchAuthorFromPoem: (authorId) => dispatch(fetchAuthorFromPoem(authorId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);
