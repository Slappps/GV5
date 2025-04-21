class Engine {
  /**
   * The game loop.
   * The game loop calls update and draw using a timer
   */
  static currentScene = null
  static bounds = null
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Update the current scene
    
    Engine.currentScene.update()

    //Draw in world space
    Engine.currentScene.draw(ctx)
    
  }

  /** Setup the game **/
  static setup() {
    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)
    document.addEventListener("mouseup", Input.mouseup)
    document.addEventListener("mousedown", Input.mousedown)

    Engine.currentScene.setup()

    //In the background, create a thread and call
    //gameLoop every 100ms.
    setInterval(Engine.gameLoop, Time.ms)
  }

  
}