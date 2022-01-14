class SpeedTank extends EnemyTank{
    /**@type {number} */
    shotInterval = 500
    /**@type {number} */
    tankSpeed = 200
    /** @type {number} */
    damageMax = 4
    constructor(scene, x, y, texture, frame, player){
        super(scene, x, y, texture, frame, player)
    }
}