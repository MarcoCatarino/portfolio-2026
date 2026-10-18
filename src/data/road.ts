export interface RoadNodeData {
  id: string;
  avatar: string;
  yOffset: "top" | "bottom";
}

export const ROAD_DATA: RoadNodeData[] = [
  {
    id: "americanFutbol",
    avatar: "/images/american-football.webp",
    yOffset: "top",
  },
  {
    id: "preparatory",
    avatar: "/images/preparatory.webp",
    yOffset: "bottom",
  },
  {
    id: "danceSchool",
    avatar: "/images/dancing.webp",
    yOffset: "top",
  },
  {
    id: "university",
    avatar: "/images/university.webp",
    yOffset: "bottom",
  },
  {
    id: "freelancer",
    avatar: "/images/freelance.webp",
    yOffset: "top",
  },
];
