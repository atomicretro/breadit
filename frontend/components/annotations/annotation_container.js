import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  fetchAnnotation,
  createAnnotation,
  receiveAnnotationsErrors
} from '../../actions/annotations_actions';
import Annotation from './annotation';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnnotation: (annotationId) => dispatch(fetchAnnotation(annotationId)),
    createAnnotation: (annotation, poemId) => {
      return dispatch(createAnnotation(annotation, poemId));
    },
    clearErrors: (clear) => { dispatch(receiveAnnotationsErrors(clear)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
