import { connect } from 'react-redux';
import React from 'react';
import {
  createPoem,
  receivePoemErrors
} from '../../actions/session_actions';
import PoemForm from './poem_form.jsx';

const mapStateToProps = (state) => {
  return({
    poemform: 'poemform'
  });
};

export default connect(
  mapStateToProps
)(PoemForm);
