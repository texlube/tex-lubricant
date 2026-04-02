// src/data/operations.ts

export const operations = [
  {
    id: "ajman-hub",
    category: "UAE PRODUCTION",
    title: "AJMAN MANUFACTURING HUB",
    description: "The central nervous system of our UAE production, located in the heart of Ajman.",
    src: "/images/operations/homepage-01.jpg", // Fallback Image
    videoSrc: "/facility-tour.mp4",           // <--- ADD THIS LINE (The actual video file)
    type: "video"
  },
  {
    id: "titanium-launch",
    category: "Product Development",
    title: "TITANIUM PRO 5W-30 LAUNCH",
    description: "Advanced synthetic development phase for our flagship Titanium Pro series.",
    src: "/images/operations/homepage-01.jpg",
    type: "image"
  },
  {
    id: "logistics-expansion",
    category: "Infrastructure",
    title: "AJMAN LOGISTICS EXPANSION",
    description: "Expanding our footprint to ensure rapid delivery across the Emirates.",
    src: "/images/operations/homepage-02.jpg",
    type: "image"
  },
  {
    id: "global-network",
    category: "Strategic Growth",
    title: "GLOBAL PARTNER NETWORK",
    description: "Connecting our Ajman production with global distribution partners.",
    src: "/images/operations/homepage-03.jpg",
    type: "image"
  }
];

export const operationsData = {
  featuredVideo: operations[0],
  homepageImages: [operations[1], operations[2], operations[3]],
  extraImages: [
    { id: "extra-1", src: "/images/operations/album/extra-01.jpg" },
    { id: "extra-2", src: "/images/operations/album/extra-02.jpg" },
    { id: "extra-3", src: "/images/operations/album/extra-03.jpg" },
    { id: "extra-4", src: "/images/operations/album/extra-04.jpg" },
    { id: "extra-5", src: "/images/operations/album/extra-05.jpg" }
  ]
};