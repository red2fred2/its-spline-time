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

// I'm just assuming a and b are positive
const lerp = (a, b, t) => a + t * (b - a)

const pointLerp = (p1, p2, t) => {
	return {
		x: lerp(p1.x, p2.x, t),
		y: lerp(p1.y, p2.y, t)
	}
}

const drawPoints = (points) => {
	for(p of points) point(p)
}

const drawLines = (pairs) => {
	for(pair of pairs) line(pair.from, pair.to)
}

const getPairs = (points) => {
	let pairs = []
	for(let i = 0; i < points.length - 1; i++) pairs[i] = {from: points[i], to: points[i+1]}
	return pairs
}

const lerpPairs = (pairs, t) => {
	let p = []
	for(pair of pairs) p.push(pointLerp(pair.from, pair.to, t))
	return p
}

const bezier = (points, t) => {
	let length = points.length
	let pairs = []

	for(let i = 0; i < length; i++) {
		drawPoints(points)
		pairs = getPairs(points)
		drawLines(pairs)
		points = lerpPairs(pairs, t)
	}
}

// Actually do some stuff

bezier([
	{x: 100, y: 400},
	{x: 150, y: 200},
	{x: 350, y: 200},
	{x: 450, y: 400},
], 0.4)
