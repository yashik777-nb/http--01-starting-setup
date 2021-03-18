import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPosts: null,
  };

  deletePostHandler = (id) => {
    axios.delete(`/posts/${id}`).then((res) => console.log(res));
  };

  componentDidUpdate() {
    if (this.props.id)
      if (
        !this.state.loadedPosts ||
        (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)
      )
        axios
          .get(`/posts/${this.props.id}`)
          .then((res) => this.setState({ loadedPosts: res.data }));
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) post = <p style={{ textAlign: "center" }}>Loading...</p>;
    if (this.state.loadedPosts) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPosts.title}</h1>
          <p>{this.state.loadedPosts.body}</p>
          <div className="Edit">
            <button
              onClick={() => this.deletePostHandler(this.props.id)}
              className="Delete"
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
