export type Video = {
  id: string;
  title: string;
  creator: string;
  language: string;
  youtubeId: string; // YouTube video ID
};

export const videos: Video[] = [
  {
    id: "1",
    title: "How to choose crypto",
    creator: "Cipzo Demo",
    language: "Hindi",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "UPI & creator income (Demo)",
    creator: "Cipzo Demo",
    language: "English",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export function getVideoById(id: string) {
  return videos.find((v) => v.id === id);
}
