import { connect } from 'react-redux';
import React from 'react';
import {
  createPoem,
  receivePoemErrors
} from '../../../actions/poem_actions';
import PoemForm from './poem_form.jsx';

const mapStateToProps = (state) => {
  return({
    errors: state.errors,
    formType: 'create poem'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (poem) => { return dispatch(createPoem(poem)); },
    clearErrors: (clear) => { dispatch(receivePoemErrors(clear)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemForm);
