
// module.exports={Movie, movieArr}

// const yargs = require("yargs");

// const { Movie, movieArr } = require("./utils");

// const app = (args) => {
//     if(args.add) {
//         const movie = new Movie(args.movie, args.actor);
//         movie.add()
//         console.log(movieArr);
//     } else if(args.addMany){
//         console.log("add more command");
//     } else {
//         console.log("Incorrect command");
//     }
// };

// app(yargs.argv);



/////////////////////////////////////

module.exports = { Tennis, tennisArr}

const yargs = require("yargs");

const { Tennis, tennisArr } = require("./utils")

const app = (args) => {
    if(args.add) {
        const game = new Tennis(args.game, args.player);
        game.add()
        console.log(tennisArr);
    } else if(args.addMany){
        console.log("Add more players");
    } else {
        console.log("Wrong command");
    }
};

app(yargs.argv);


