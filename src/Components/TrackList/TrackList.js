import "./TrackList.css";
import React from "react";
import { Track } from "../Track/Track.js";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((eachTrack) => {
          return (
            <Track
              track={eachTrack}
              key={eachTrack.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}
