/** Shared leaderboard — used by GET /api/leaderboard and server-rendered UI. */
const users = [
  { rank: 1, name: "Giulia Verdini", score: 2980, stars: 5 },
  { rank: 2, name: "Marco Bianchi", score: 2721, stars: 4 },
  { rank: 3, name: "Sara Neri", score: 2579, stars: 3 },
  { rank: 4, name: "Luca Rossi", score: 2401, stars: 3 },
  { rank: 5, name: "Anna Conti", score: 2288, stars: 3 },
];

export async function getLeaderboard() {
  return users;
}
