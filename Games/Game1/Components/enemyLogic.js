class enemyLogic extends Component{
    constructor() {
        super()
        
    }

    update() {
        
        this.enemyCollision()
        
    }

    enemyCollision(){

        for (let gameObject of Engine.currentScene.gameObjects){

            if (gameObject instanceof Head){
                
                let colliding = collisions.cirCir([gameObject.transform.x , gameObject.transform.y , 50] , [this.parent.transform.x , this.parent.transform.y , 50])

                for(let component of gameObject.components){

                    if (component instanceof HeadLogic){
                        if(colliding){
                            component.removeBodySegment()
                            
                        }
                    }
                }
            }
        }
    }
}