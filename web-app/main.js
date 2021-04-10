const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the points as {x, y}
let start = { x: 150,    y:  0  };
let cp1 =   { x: 300,   y: 50  };
let cp2 =   { x: 300,   y: 130  };
let end =   { x: 150,   y: 300 };

// Cubic Bézier curve
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();

// Start and end points
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
ctx.fill();

// Control points
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
ctx.fill();
