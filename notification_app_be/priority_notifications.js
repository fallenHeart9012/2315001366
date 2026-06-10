const notifications = [
  { type: "Placement", recency: 9 },
  { type: "Result", recency: 8 },
  { type: "Event", recency: 10 },
  { type: "Placement", recency: 7 }
];

const weight = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const ranked = notifications
  .map(n => ({
    ...n,
    score: weight[n.type] * 100 + n.recency
  }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 10);

console.log("Top Priority Notifications");
console.table(ranked);