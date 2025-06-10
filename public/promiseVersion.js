function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(name);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        if (randomNumber() < 2) {
            reject(`${name} fell asleep after mowing the yard.`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished using the weed eater.`);
                resolve(name);
            }, 1500);
        }
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        if (randomNumber() < 2) {
            reject(`${name} fell asleep after weed eating the yard.`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
            }, 1000);
        }
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        if (randomNumber() < 2) {
            reject(`${name} fell asleep after trimming the hedges.`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished collecting wood.`);
                resolve(name);
            }, 2500);
        }
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        if (randomNumber() < 2) {
            reject(`${name} fell asleep after collecting wood.`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished watering the garden.`);
                resolve(name);
            }, 500);
        }
    });
}

function doSummerChores(name) {
    console.log(`${name} finished all their chores!`);
}

// Orchestrator function using promise chaining
function summerChores(name) {
    mowYard(name)
        .then(weedEat)
        .then(trimHedges)
        .then(collectWood)
        .then(waterGarden)
        .then(doSummerChores)
        .catch(error => console.log(error));
}

summerChores("Mike");
