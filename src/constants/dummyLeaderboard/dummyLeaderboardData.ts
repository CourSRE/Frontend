export type TLeaderboardData = {
  id: string;
  name: string;
  rank: number;
  studentChapter: string;
  percentage: number;
  averageScore: number;
};

export const dummyLeaderboardData: TLeaderboardData[] = [
  {
    id: '1',
    rank: 1,
    name: "Rahmania1",
    studentChapter: "SRE in Universitas Gadjah Mada",
    percentage: 85,
    averageScore: 95,
  },
  {
    id: '2',
    rank: 2,
    name: "Rahmania2",
    studentChapter: "SRE in Universitas Gadjah Mada",
    percentage: 85,
    averageScore: 95,
  },
  {
    id: '3',
    rank: 3,
    name: "Rahmania3",
    studentChapter: "SRE in Universitas Gadjah Mada",
    percentage: 85,
    averageScore: 95,
  },
];
