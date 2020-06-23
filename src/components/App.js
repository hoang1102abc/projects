import React from "react";
import VideosList from "./VideosList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />

        <VideosList />
      </div>
    );
  }
}

export default App;
