import React from 'react';
import VideoItemContent from "./VideoItemContent";

export default function VideoList({ videos, onVideoSelect }) {
  //console.log(videos);
  const VideoLists = videos.map((video) => {
    return (
      <VideoItemContent
        video={video}
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{VideoLists}</div>;
}

VideoItemContent.defaultProps = {
  key: "1"
};
