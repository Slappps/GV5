class Food extends GameObject{

    constructor(){
        super()

        this.transform.x = 550
        this.transform.y = 200
        
        this.addComponent(new Circle('purple'))
        this.addComponent(new foodlogic())
        

    }
    

}