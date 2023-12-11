import { Circle } from "./Circle";
import { SpawnCircle } from "./SpawnCircle";

export default class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  circles: Circle[];

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.circles = [];

    if (!this.ctx) {
      console.error("Failed to get canvas context");
      return;
    }

    this.canvas.addEventListener("click", (event) => {
      SpawnCircle.spawn(this.canvas, this.circles, event);
      this.animate();
    });
  }

  animate() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.circles.forEach((circle) => {
        circle.updatePosition(this.canvas);
        circle.draw(this.ctx);
      });
    });
  }
}
