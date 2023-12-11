import { Circle } from "./Circle";

export class SpawnCircle {
  static spawn(
    canvas: HTMLCanvasElement,
    circles: Circle[],
    event: MouseEvent
  ) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const circle = new Circle(mouseX, mouseY, 20);
    circles.push(circle);
  }
}
