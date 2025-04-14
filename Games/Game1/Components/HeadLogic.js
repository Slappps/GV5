class HeadLogic extends Component {
    constructor() {
        super()
    }

    body = []

    update() {
        this.moveTail2()
        
    }

    setup() {
        this.addBodySegment(3)
    }

    addBodySegment(amount , color , size) {
        for (let i = 0; i < amount; i++) {
            let x = new BodySegment(color, size)
            this.body.push(x)
            Engine.currentScene.gameObjects.push(x)
        }
    }

    // variable x is in addBodySegment and moveTail. I want it to be local to each function. How do i do this. using: var, let, or this.
    

    moveTail2(){

        for (let i = 0; i < this.body.length; i++){
            let seg = this.body[i]
            
            for (let j = 0; j < seg.components.length; j++){
                let segComp = seg.components[j]
                if(segComp instanceof bodySegLogic){


                    if( i == 0){
                        var target = [this.parent.transform.x, this.parent.transform.y]
                    }
                    else if (i > 0){

                        var target = parentNewXY
                    }

                    var parentNewXY = [segComp.parent.transform.x , segComp.parent.transform.y]
                    segComp.move(target)

                    


                }
            }
        }





    }


}