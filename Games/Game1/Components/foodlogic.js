class foodlogic extends Component{
    constructor() {
        super()
        this.segAdded = 0
    }

    update() {
        
        this.foodCollision()
        
    }

    foodCollision(){

        for (let gameObject of Engine.currentScene.gameObjects){

            if (gameObject instanceof Head){
                
                let colliding = collisions.cirCir([gameObject.transform.x , gameObject.transform.y , 50] , [this.parent.transform.x , this.parent.transform.y , 50])
                
                if (colliding){

                    if(this.segAdded == 0){
                        for(let component of gameObject.components){

                            if (component instanceof HeadLogic){
                                component.addBodySegment(1 , 'red')
                                this.segAdded = 1
                            }
                        }
                    }
                    
                }
                else{
                    this.segAdded = 0
                }
            }
        }
    }
}