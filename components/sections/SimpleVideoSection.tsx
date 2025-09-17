import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SimpleVideoSectionProps {
  title?: string;
  description?: string;
  youtubeId?: string;
  vimeoId?: string;
  videoUrl?: string;
  posterImage?: string;
  className?: string;
}

export default function SimpleVideoSection({
  title = "Watch Our Story",
  description = "Discover how TechFlow Solutions transforms businesses through innovative technology solutions.",
  youtubeId,
  vimeoId,
  videoUrl,
  posterImage = "/images/video-poster.jpg",
  className = ""
}: SimpleVideoSectionProps) {
  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
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
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {/* Vimeo Embed */}
              {vimeoId && (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
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
                  controls
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Play Button Overlay for Poster */}
              {posterImage && !youtubeId && !vimeoId && !videoUrl && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Play className="h-6 w-6 mr-2" />
                    Play Video
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
