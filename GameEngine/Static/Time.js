class Time {
    static ms = 20;
    static fps = 1000 / Time.ms;
    static deltaTime = Time.ms / 1000;
    //static deltaTime = time.msBetweenFrames / 1000 doesn't throw an error, why not?
}