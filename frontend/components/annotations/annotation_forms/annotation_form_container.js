import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  createAnnotation,
  receiveAnnotationsErrors
} from '../../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  let poemId = ownProps.match.params.poemId;

  return {
    user: state.entities.users[state.session.id] || { },
    poem: state.entities.poems[poemId] || { },
    startPos: state.entities.newAnnotation.startPos || { },
    endPos: state.entities.newAnnotation.endPos || { }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnnotation: (annotation, poemId) => {
      return dispatch(createAnnotation(annotation, poemId));
    },
    clearErrors: (clear) => { dispatch(receiveAnnotationsErrors(clear)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
