class BaseTank{
    /** @type {number} */
    tankSpeed = 100
    /** @type {number} */
    damageMax = 2
    constructor(scene,x,y,texture,frame){
        this.scene = scene
        this.shadow = this.scene.add.image(x,y,texture,'shadow')
        this.shadow.setDepth(1)
        this.hull = this.scene.physics.add.sprite(x,y,texture,frame)
        this.hull.body.setSize(this.hull.width - 8, this.hull.height - 8)
        this.hull.setDepth(2)
        this.hull.body.collideWorldBounds = true
        this.hull.body.bounce.setTo(1,1)
        this.turret = this.scene.physics.add.sprite(x,y,texture,'turret')
        this.turret.setDepth(4)
        this.damageCount = 0
    }
    update(){
        this.shadow.x = this.turret.x = this.hull.x
        this.shadow.y = this.turret.y = this.hull.y
        this.shadow.rotation = this.hull.rotation
        
    }
    damage(){

    }
    setBullets(){

    }
    burn(){

    }
    isDestroyed(){

    }
    isImmobilised(){

    }
    enableCollision(destructLayer){
        this.scene.physics.add.collider(this.hull, destructLayer)

    }

}
