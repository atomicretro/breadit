import { connect } from 'react-redux';
import { fetchPoem } from '../../../actions/poem_actions';
import { fetchAuthor } from '../../../actions/author_actions';
import { openAnnotationModal, closeModal } from '../../../actions/modal_actions';
import Poem from './poem_show';

const mapStateToProps = (state, ownProps) => {
  let poem = state.entities.poems[ownProps.match.params.poemId] || { };
  let annotationIds = poem.annotation_ids || [ ];
  let annotations = annotationIds.map((annotationId) => {
    return state.entities.annotations[annotationId];
  });
  return {
    poem: poem,
    author: state.entities.authors[poem.author_id] || { },
    annotations: annotations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId)),
    openAnnotationModal: (modal) => dispatch(openAnnotationModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);
