import { connect } from 'react-redux';
import React from 'react';
import {
  createAuthor,
  receiveAuthorErrors
} from '../../../actions/author_actions';
import AuthorForm from './author_form.jsx';

const mapStateToProps = (state) => {
  return({
    errors: state.errors,
    formType: 'create author'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (author) => { return dispatch(createAuthor(author)); },
    clearErrors: (clear) => { dispatch(receiveAuthorErrors(clear)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorForm);
