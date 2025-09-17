import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoSectionProps {
  title?: string;
  description?: string;
  videoUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  posterImage?: string;
  autoplay?: boolean;
  muted?: boolean;
  showControls?: boolean;
  className?: string;
}

export default function VideoSection({
  title = "Watch Our Story",
  description = "Discover how TechFlow Solutions transforms businesses through innovative technology solutions.",
  videoUrl,
  youtubeId,
  vimeoId,
  posterImage = "/images/video-poster.jpg",
  autoplay = false,
  muted = true,
  showControls = true,
  className = ""
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // YouTube Embed URL
  const getYouTubeEmbedUrl = (id: string) => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      controls: showControls ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1'
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  };

  // Vimeo Embed URL
  const getVimeoEmbedUrl = (id: string) => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      muted: muted ? '1' : '0',
      controls: showControls ? '1' : '0',
      title: '0',
      byline: '0',
      portrait: '0'
    });
    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {/* YouTube Embed */}
              {youtubeId && (
                <iframe
                  src={getYouTubeEmbedUrl(youtubeId)}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* Vimeo Embed */}
              {vimeoId && (
                <iframe
                  src={getVimeoEmbedUrl(vimeoId)}
                  title={title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* Self-hosted Video */}
              {videoUrl && !youtubeId && !vimeoId && (
                <video
                  className="w-full h-full object-cover"
                  poster={posterImage}
                  controls={showControls}
                  autoPlay={autoplay}
                  muted={isMuted}
                  loop
                >
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Custom Controls Overlay (for self-hosted videos) */}
              {videoUrl && !youtubeId && !vimeoId && !showControls && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={handlePlayPause}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              )}

              {/* Video Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handlePlayPause}
                    className="bg-black/50 hover:bg-black/70 text-white border-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleMuteToggle}
                    className="bg-black/50 hover:bg-black/70 text-white border-white/20"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleFullscreen}
                  className="bg-black/50 hover:bg-black/70 text-white border-white/20"
                >
                  {isFullscreen ? (
                    <Minimize className="h-4 w-4" />
                  ) : (
                    <Maximize className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Learn more about our services and how we can help transform your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
