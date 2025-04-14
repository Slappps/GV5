class GameObject {
    components = []
    constructor() {
        this.transform = new Transform();
        this.components.push(this.transform)
    }
    addComponent(component) {
        this.components.push(component);
        component.parent = this;
    }
    update(ctx) {
        for (let component of this.components) {
            if (component.update) {
                component.update(ctx)
            }
        }
    }

    setup(ctx) {
        for (let component of this.components) {
            if (component.setup) {
                component.setup(ctx)
            }
        }
    }

    draw(ctx) {
        for (let component of this.components) {
            if (component.draw) {
                component.draw(ctx)
            }
        }
    }

    
}