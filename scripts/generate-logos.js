const fs = require('fs');
const { createCanvas } = require('canvas');

function drawLogo(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#E5F0FF';
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(0, 0, size, size, size * 0.167);
  } else {
    ctx.rect(0, 0, size, size);
  }
  ctx.fill();

  // Main shape
  ctx.fillStyle = '#0066FF';
  ctx.beginPath();
  const mainX = size * 0.25;
  const mainY = size * 0.24;
  const mainW = size * 0.53;
  const mainH = size * 0.52;
  if (ctx.roundRect) {
    ctx.roundRect(mainX, mainY, mainW, mainH, size * 0.031);
  } else {
    ctx.rect(mainX, mainY, mainW, mainH);
  }
  ctx.fill();

  // Inner shape
  ctx.fillStyle = '#E5F0FF';
  ctx.beginPath();
  const innerX = size * 0.354;
  const innerY = size * 0.344;
  const innerW = size * 0.323;
  const innerH = size * 0.312;
  if (ctx.roundRect) {
    ctx.roundRect(innerX, innerY, innerW, innerH, size * 0.031);
  } else {
    ctx.rect(innerX, innerY, innerW, innerH);
  }
  ctx.fill();

  // Circle
  ctx.fillStyle = '#0066FF';
  ctx.beginPath();
  const circleX = size * 0.51;
  const circleY = size * 0.5;
  const circleR = size * 0.078;
  ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2);
  ctx.fill();

  return canvas;
}

// Generate favicon
const faviconCanvas = drawLogo(64);
fs.writeFileSync('public/favicon.ico', faviconCanvas.toBuffer('image/png'));

// Generate logo192
const logo192Canvas = drawLogo(192);
fs.writeFileSync('public/logo192.png', logo192Canvas.toBuffer('image/png'));

// Generate logo512
const logo512Canvas = drawLogo(512);
fs.writeFileSync('public/logo512.png', logo512Canvas.toBuffer('image/png'));

console.log('Logo files generated successfully!');
