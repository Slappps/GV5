class collisions{


    static cirCir(c1 , c2){
        //c1[x,y,radius]
        
        let distX = c1[0] - c2[0]
        let distY = c1[1] - c2[1]
        let dist = Math.sqrt( (distX*distX) + (distY*distY) )
        

        let radSum = c1[2] + c2[2]
        
        if(dist <= radSum){
            
            return 1
        }
        else{
            
            return 0
        }
    }

    static otofbnds(c1){

        let x = c1[0]
        let y = c1[1]
        let rad = c1[3]

        if (x < 0 + rad || x > Engine.boundX - rad || this.entityY < 0 + rad || this.entityY > this.boundY - rad) {
            
            console.log("oob")
            return 1
            
        }
    }


}