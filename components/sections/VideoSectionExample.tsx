import SimpleVideoSection from "./SimpleVideoSection";

// Example of how to use different video sources
export default function VideoSectionExample() {
  return (
    <div>
      {/* Option 1: YouTube Video (Current - No Download Needed) */}
      <SimpleVideoSection 
        title="See TechFlow in Action"
        description="Watch how we help businesses transform their operations with cutting-edge technology solutions."
        youtubeId="jNQXAC9IVRw"
      />

      {/* Option 2: Self-Hosted Video (When you download one) */}
      {/* 
      <SimpleVideoSection 
        title="See TechFlow in Action"
        description="Watch how we help businesses transform their operations with cutting-edge technology solutions."
        videoUrl="/videos/company-intro.mp4"
        posterImage="/images/video-thumbnail.jpg"
      />
      */}

      {/* Option 3: Vimeo Video */}
      {/* 
      <SimpleVideoSection 
        title="See TechFlow in Action"
        description="Watch how we help businesses transform their operations with cutting-edge technology solutions."
        vimeoId="123456789"
      />
      */}
    </div>
  );
}
