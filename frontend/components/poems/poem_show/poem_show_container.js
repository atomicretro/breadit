import { connect } from 'react-redux';
import { fetchPoem } from '../../../actions/poem_actions';
import { fetchAuthor } from '../../../actions/author_actions';
import Poem from './poem_show';

const mapStateToProps = (state, ownProps) => {
  const poem = state.entities.poems[ownProps.match.params.poemId] || { };
  // let annotations = annotationIds.map((annotationId) => {
  //   return state.entities.annotations[annotationId];
  // });
  return {
    poem: poem,
    author: state.entities.authors[poem.author_id] || { }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);
