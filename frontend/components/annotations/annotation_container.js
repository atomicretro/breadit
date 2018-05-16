import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  fetchAnnotation,
  createAnnotation,
  receiveAnnotationsErrors
} from '../../actions/annotation_actions';
import Annotation from './annotation';

const mapStateToProps = (state, ownProps) => {
  let annotationId = ownProps.match.params.annotationId;
  let poemId = ownProps.match.params.poemId;
  
  return {
    annotation: state.entities.annotations[annotationId] || { },
    poem: state.entities.annotations[poemId] || { }
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
