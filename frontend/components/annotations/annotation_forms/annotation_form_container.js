import { connect } from 'react-redux';
import { fetchPoem } from '../../../actions/poem_actions';
import {
  createAnnotation,
  receiveAnnotationsErrors
} from '../../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => {
  let poemId = ownProps.match.params.poemId;
  let startPos;
  if(state.entities.newAnnotation.startPos === 0) startPos = 0;
  else if(!state.entities.newAnnotation.startPos) startPos = { };
  else startPos = state.entities.newAnnotation.startPos;
  let endPos;
  if(!state.entities.newAnnotation.endPos) endPos = { };
  else endPos = state.entities.newAnnotation.endPos - 1;

  return {
    user: state.entities.users[state.session.id] || { },
    poem: state.entities.poems[poemId] || { },
    startPos: startPos,
    endPos: endPos,
    errors: state.errors.annotationErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId)),
    createAnnotation: (annotation, poemId, startPos, endPos) => {
      return dispatch(createAnnotation(annotation, poemId, startPos, endPos));
    },
    clearErrors: (clear) => { dispatch(receiveAnnotationsErrors(clear)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
