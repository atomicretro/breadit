import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchPoem } from '../../../actions/poem_actions';
import {
  createAnnotation,
  receiveAnnotationsErrors
} from '../../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => {
  let poemId = ownProps.match.params.poemId;

  return {
    user: state.entities.users[state.session.id] || { },
    poem: state.entities.poems[poemId] || { },
    startPos: state.entities.newAnnotation.startPos || { },
    endPos: state.entities.newAnnotation.endPos || { },
    errors: state.errors
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
