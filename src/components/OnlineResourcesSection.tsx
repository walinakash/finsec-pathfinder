import React, { useState } from "react";

const youtubeVideos = [
  {
    id: "1",
    url: "https://youtu.be/LjNyZ5wTyQU?si=2o9it7gxLALfs0Y7", // IBM Technology - What is Cybersecurity? (embeddable)
    title: "National Blockchain Policy, Cybersecurity Awareness | Tech Trends",
    author: "Channels Television",
    views: "298K views"
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/2e2v9v2l3zE", // Infosec - Cybersecurity Awareness Training for Employees (embeddable)
    title: "Cybersecurity Awareness Training for Employees",
    author: "Infosec",
    views: "1.2M views"
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/5h9Q6FhTt9w", // Google - Cybersecurity: Safety Tips for You (embeddable)
    title: "Cybersecurity: Safety Tips for You",
    author: "Google",
    views: "1.1M views"
  }
];

const OnlineResourcesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
          Online Resources
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch these top-rated cybersecurity awareness videos to boost your knowledge and stay protected online.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {youtubeVideos.map(video => (
          <div key={video.id} className="bg-gradient-card border-border/50 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-full aspect-video mb-4">
              <iframe
                width="100%"
                height="215"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary text-center">{video.title}</h3>
            <div className="text-sm text-muted-foreground mb-1">By <span className="font-semibold">{video.author}</span></div>
            <div className="text-xs text-muted-foreground">{video.views}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OnlineResourcesSection;
