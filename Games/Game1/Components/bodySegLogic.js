class bodySegLogic extends Component {
    constructor() {
        super()
        this.speed = 300;
    }
    
    move(targetXY) {

        let xparent = targetXY[0]
        let yparent = targetXY[1]

        if(!(collisions.cirCir( [xparent , yparent , 50] , [this.parent.transform.x , this.parent.transform.y , 50]))){

            

            let relx = -1 * (this.parent.transform.x - xparent)
            let rely = 1 * (this.parent.transform.y - yparent)


            let mag = Math.sqrt((relx**2) + (rely**2))

            let x = relx / mag
            let y = rely / mag

            

            this.parent.transform.x += x * (this.speed * Time.deltaTime )
            this.parent.transform.y += -1*(y * (this.speed * Time.deltaTime))

        }
        
        
    }
    
}