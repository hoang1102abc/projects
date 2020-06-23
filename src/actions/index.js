import youtube from "../apis/youtube";

const API_KEY = "AIzaSyBL-b5jj24IUXLs87qtb-9qWvaRtX-3SzQ";

export const fetchVideos = term => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      q: `${term}`,
      type: "video",
      key: `${API_KEY}`
    }
  });

  dispatch({ type: "VIDEO_FETCHED", payload: response.data.items });
};

export const selectVideo = videoId => {
  return {
    type: "VIDEO_SELECTED",
    payload: videoId
  };
};
