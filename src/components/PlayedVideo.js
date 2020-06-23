import React from "react";
import { connect } from "react-redux";

class PlayedVideo extends React.Component {
  render() {
    if (this.props.selectedVideo === null) {
      return null;
    } else {
      return (
        <div
          className="ui card"
          style={{
            margin: "auto",
            width: "100%",
            marginTop: "20px"
          }}
        >
          <iframe
            title="selected-videos"
            height="650"
            src={`https://www.youtube.com/embed/${this.props.selectedVideo}`}
          ></iframe>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo };
};

export default connect(mapStateToProps)(PlayedVideo);
