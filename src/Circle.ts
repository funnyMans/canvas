export class Circle {
  x: number;
  y: number;
  radius: number;
  velocityY: number;
  dampening: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityY = 0;
    this.dampening = 0.8;
  }

  updatePosition(canvas: HTMLCanvasElement) {
    this.velocityY += 0.2;

    if (this.y + this.radius + this.velocityY >= canvas.height) {
      this.velocityY = -this.velocityY * this.dampening;
    }

    this.y += this.velocityY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}
