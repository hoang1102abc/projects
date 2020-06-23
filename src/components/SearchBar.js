import React from "react";
import { connect } from "react-redux";
import { fetchVideos, selectVideo } from "../actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = { isLoading: "" };
  }

  getSearchTerm = () => {
    this.setState({ isLoading: "loading" });
    try {
      this.props.fetchVideos(this.textInput.current.value);
      this.props.selectVideo(null);
    } catch (e) {
      console.log(e.message);
    }
    this.setState({ isLoading: "" });
  };

  render() {
    return (
      <div>
        <div className="ui fluid action input" style={{ marginTop: "20px" }}>
          <input
            type="text"
            name="search-term"
            placeholder="Enter Your Search Terms here"
            ref={this.textInput}
          />
          <div
            className={`ui button primary ${this.state.isLoading}`}
            onClick={this.getSearchTerm}
          >
            Search
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchVideos, selectVideo })(SearchBar);
