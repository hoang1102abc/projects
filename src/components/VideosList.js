import React from "react";
import PlayedVideo from "./PlayedVideo";
import { connect } from "react-redux";
import { selectVideo } from "../actions";

class VideosList extends React.Component {
  renderList = () => {
    return this.props.videos.map(item => {
      if (item.id.videoId !== this.props.selectedVideo) {
        return (
          <div key={item.id.videoId} className="item">
            <div className="image">
              <img
                alt="thumbnails"
                src={`${item.snippet.thumbnails.high.url}`}
              />
            </div>
            <div className="content">
              <div
                className="header"
                onClick={() => {
                  this.props.selectVideo(item.id.videoId);
                }}
              >
                <a>{item.snippet.title}</a>
              </div>
              <div className="description">
                <p>{item.snippet.description}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    if (this.props.videos.length !== 0) {
      return (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <PlayedVideo />
          <div className="ui items">{this.renderList()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome to Mini-Youtube App</h2>
          <p>This web app is mainly built on React/Redux technologies</p>
          <p>To give it a shot, please enter something in search bar...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { videos: state.videos, selectedVideo: state.selectedVideo };
};

export default connect(mapStateToProps, { selectVideo })(VideosList);
