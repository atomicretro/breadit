import { connect } from 'react-redux';
import { fetchPoem } from '../../../actions/poem_actions';
import { fetchAuthor } from '../../../actions/author_actions';
import { receiveNewAnnotation } from '../../../actions/annotation_actions';
import { openAnnotationModal, closeModal } from '../../../actions/modal_actions';
import { createVote, deleteVote } from '../../../actions/vote_actions';
import Poem from './poem_show';

// poem doesn't rerender with new annotation
// b/c after annotation new poem isn't fetched from db
// tried getting it from db but then it thinks it has all the annotations,
// and still doesn't render
// check annotation form

const mapStateToProps = (state, ownProps) => {
  let poem = state.entities.poems[ownProps.match.params.poemId] || { };
  let annotations = getAnnotations(poem, state.entities.annotations);
  let votes = getVotes(poem, state.entities.votes);
  return {
    poem,
    author: state.entities.authors[poem.author_id] || { },
    annotations,
    modal: state.ui.modal,
    votes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId)),
    receiveNewAnnotation: (data) => dispatch(receiveNewAnnotation(data)),
    openAnnotationModal: (modal) => dispatch(openAnnotationModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createVote: (vote) => dispatch(createVote(vote)),
    deleteVote: (vote) => dispatch(deleteVote(vote))
  };
};

const getAnnotations = (poem, allAnnotations) => {
  let annotationIds = poem.annotation_ids || [ ];
  let annotations = annotationIds.map((annotationId) => {
    return allAnnotations[annotationId];
  });
  return annotations;
};

const getVotes = (poem, allVotes) => {
  let voteIds = poem.vote_ids || [ ];
  let votes = voteIds.map((voteId) => {
    return allVotes[voteId];
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);
