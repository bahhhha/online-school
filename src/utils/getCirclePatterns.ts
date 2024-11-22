const circlePatterns = [
  [
    { size: 70, top: "0%", left: "10%", color: "#CA3039" }, // Red
    { size: 100, top: "30%", left: "-15%", color: "#5B61EB" }, // Blue
    { size: 60, top: "50%", left: "10%", color: "#33EFA0" }, // Green
    { size: 90, top: "20%", left: "70%", color: "#F6C566" }, // Yellow
  ],
  [
    { size: 80, top: "-10%", left: "-10%", color: "#5B61EB" }, // Blue
    { size: 60, top: "15%", left: "60%", color: "#33EFA0" }, // Green
    { size: 120, top: "90%", left: "-20%", color: "#F6C566" }, // Yellow
    { size: 90, top: "35%", left: "50%", color: "#56CCF2" }, // Cyan
  ],
  [
    { size: 60, top: "10%", left: "-15%", color: "#FFB545" }, // Orange
    { size: 70, top: "45%", left: "25%", color: "#5B61EB" }, // Blue
    { size: 80, top: "-5%", left: "50%", color: "#33EFA0" }, // Green
    { size: 140, top: "65%", left: "70%", color: "#F56666" }, // Light Red
  ],
  [
    { size: 100, top: "-15%", left: "15%", color: "#56CCF2" }, // Cyan
    { size: 70, top: "25%", left: "45%", color: "#F6C566" }, // Yellow
    { size: 80, top: "55%", left: "-25%", color: "#33EFA0" }, // Green
    { size: 90, top: "85%", left: "75%", color: "#FFB545" }, // Orange
  ],
  [
    { size: 60, top: "-30%", left: "10%", color: "#F56666" }, // Light Red
    { size: 70, top: "40%", left: "5%", color: "#33EFA0" }, // Green
    { size: 80, top: "70%", left: "55%", color: "#5B61EB" }, // Blue
    { size: 50, top: "75%", left: "85%", color: "#FFB545" }, // Orange
  ],
];
export function getCirclePatterns(index: number) {
  return circlePatterns[index % circlePatterns.length];
}
