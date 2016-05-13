import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveComment } from '../actions';

class CommentBox extends Component {

  constructor(props){
    super(props);

    this.state = { comment: '' };
  }

  handleChange(evt){
    this.setState({ comment: evt.target.value });
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea 
          value={this.state.comment} 
          onChange={this.handleChange.bind(this)} />
        <div>
          <button type="submit">Add Comment</button>
        </div>
      </form>
    );
  }
}

const mapPropsToDispatch = (dispatch) => {
  return bindActionCreators({saveComment}, dispatch);
}

export default connect(null, mapPropsToDispatch)(CommentBox);
