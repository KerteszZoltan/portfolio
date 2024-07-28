import "./backgroundVideo.scss";

export default function BackgroundVideo() {
  return (
    <video
      src="/assets/videos/background_video.mp4"
      className="background-video"
      autoPlay
      muted
      loop
    ></video>
  );
}
