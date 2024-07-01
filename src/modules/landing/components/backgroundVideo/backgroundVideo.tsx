import "./backgroundVideo.scss";

export default function BackgroundVideo() {
  return (
    <video
      src="/assets/videos/background_video.mp4"
      className="backgroundVideo"
      autoPlay
      muted
      loop
    ></video>
  );
}
