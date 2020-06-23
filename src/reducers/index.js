import { combineReducers } from "redux";

const videoReducer = (videos = [], action) => {
  switch (action.type) {
    case "VIDEO_FETCHED":
      return action.payload;
    default:
      return videos;
  }
};

const selectedVideo = (selectedVideo = null, action) => {
  switch (action.type) {
    case "VIDEO_SELECTED":
      return action.payload;

    default:
      return selectedVideo;
  }
};

export default combineReducers({
  videos: videoReducer,
  selectedVideo: selectedVideo
});
