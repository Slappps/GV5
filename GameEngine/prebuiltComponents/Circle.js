class Circle extends Component{
  constructor(color = 'green', radius = 50){
    super()
    this.fillStyle = color
    this.radius = radius
    this.strokeStyle = "purple"
    this.lineWidth = 5
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth
    ctx.arc(this.parent.transform.x, this.parent.transform.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}