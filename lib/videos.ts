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
    youtubeId: "26pKp6dy9JA",
  },
  {
    id: "2",
    title: "UPI & creator income (Demo)",
    creator: "Cipzo Demo",
    language: "English",
    youtubeId: "c57w3QVNNFE",
  },
];

export function getVideoById(id: string) {
  return videos.find((v) => v.id === id);
}
