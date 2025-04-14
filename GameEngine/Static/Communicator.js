class Communicator {
    //how do i relate names and objects right now the scene keeps track of all the game objects, 
    // but there is no way to tell them apart
    //vice versa, i dont want to start naming objects because then you 
    // get into the whole magic name issue

    //how can i hard code relationships such as the relationship 
    // between a snakes head, and its tail?
    //this would be similar to the extends keyword
    static gameobjects = []


    addObj(objThis, name) {

        this.gameobjects.push([[objThis,name]]);
        
    }

    getContext(name){

        for (let i = 0; i < gameobjects.length; i++) {
            
            if (gameobjects[i][1] == name){
                objCntxt = gameobjects[i][0]
                return objCntxt
            }

          }

    }
    //objectReferance = Communicator.getContext("head")
    //objectReferance.x
    //objectReferance.y ect...
    //returns the this. of the object
}