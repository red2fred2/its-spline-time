const T = 0.5

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#fff'
ctx.strokeStyle = '#fff'

const point = (p) => {
	ctx.beginPath()
	ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI)
	ctx.closePath()
	ctx.fill()
}

const line = (p1, p2) => {
	ctx.beginPath()
	ctx.moveTo(p1.x, p1.y)
	ctx.lineTo(p2.x, p2.y)
	ctx.closePath()
	ctx.stroke()
}

let points = [
	{x: 100, y: 400},
	{x: 150, y: 200},
	{x: 350, y: 200},
	{x: 450, y: 400},
]

// Draw points
for(p of points) point(p)

// Find pairs of points in order
let pairs = []
for(let i = 0; i < points.length - 1; i++) pairs[i] = {from: points[i], to: points[i+1]}

// Draw lines
for(pair of pairs) line(pair.from, pair.to)

// Interpolate the first time
let interpolation1points = []
for(pair of pairs) interpolation1points.push()
