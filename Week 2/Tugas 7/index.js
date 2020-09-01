// Soal 1

// Release 0
class Animal {
    constructor(name) {
        this._name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    // getter Name
    get name() {
        return this._name;
    }

    // setter Name
    set name(value) {
        this._name = value;
    }
}

const sheep = new Animal("shaun");

// Output
console.log('Soal 1');
console.log('Release 0');
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
console.log('\n');


// Release 1
class Ape extends Animal {
    constructor(name) {
        super(name);
        this._yell = "Auooo";
        this.legs = 2;
    }

    yell() {
        console.log(this._yell);
    }
}

const sungokong = new Ape("kera sakti");

// Output
console.log('Release 1');
sungokong.yell();

class Frog extends Animal {
    constructor(name) {
        super(name);
        this._jump = "hop hop";
    }

    jump() {
        console.log(this._jump);
    }
}

const kodok = new Frog("buduk")

// Output
kodok.jump()
console.log('\n');


// soal 2

class Clock {
    constructor({template}){
        this._template = template;
        this._timer = null;
    }

    render() {
        const date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this._template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
    start(){
        this.render();
        this._timer = setInterval(this.render.bind(this), 1000);
    }
}

const clock = new Clock({template: 'h:m:s'});

// Output
console.log('Soal 2');
clock.start();