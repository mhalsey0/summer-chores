function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback(name);
    }, 2000);
}

function weedEat(name, callback) {
    if (randomNumber() < 2) {
        return console.log(`${name} fell asleep after mowing the yard.`);
    } else {
        setTimeout(() => {
            console.log(`${name} finished using the weed eater.`);
            callback(name);
        }, 1500);
    }
}

function trimHedges(name, callback) {
    if (randomNumber() < 2) {
        return console.log(`${name} fell asleep after weed eating the yard.`);
    } else {
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback(name);
        }, 1000);
    }
}

function collectWood(name, callback) {
    if (randomNumber() < 2) {
        return console.log(`${name} fell asleep after trimming the hedges.`);
    } else {
        setTimeout(() => {
            console.log(`${name} finished collecting wood.`);
            callback(name);
        }, 2500);
    }
}

function waterGarden(name, callback) {
    if (randomNumber() < 2) {
        return console.log(`${name} fell asleep after collecting wood.`);
    } else {
        setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback(name);
        }, 500);
    }
}

function doSummerChores(name, mowYard) {
    console.log(`${name} finished all their chores!`);
    mowYard(name);
}

function summerChores(name) {
    mowYard(name, function(name) {
        weedEat(name, function(name) {
            trimHedges(name, function(name) {
                collectWood(name, function(name) {
                    waterGarden(name, function(name) {
                        doSummerChores(name, summerChores);
                    });
                });
            });
        });
    });
}

summerChores("Mike");
