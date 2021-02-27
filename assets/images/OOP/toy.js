// var bar = function(name){
//         this.name = name;
//     };
//     bar.prototype.learnFlying = function(){
//         console.log(this)
//         console.log(`${this.name} can fly!`)
//     }
    
//     // let oldBee = new bar('oldBee')
//     var foo = function(){
//     };
//     //1번
//     foo.prototype = Object.create(bar.prototype)
//     foo.prototype.constructor = foo
//     foo.prototype.sleep = function(){
//         console.log('Zzz...')
//     };
//     var newBee = new foo('newBee');
//     //2번
    
//     newBee.sleep();
//     newBee.learnFlying();
//     newBee

class bar {
    constructor(name){
        this.name = name;
        console.log(this);
    };
    learnFlying(){
        console.log(`${this.name} can fly!`)
    }
};

// let oldBee = new bar('oldBee')

class foo extends bar{
    constructor(name){
        super(name);
    }
    sleep(){
        console.log('Zzz...')
    }
}
let newBee = new foo('newBee');
    newBee.sleep();
    newBee.learnFlying();
    // newBee