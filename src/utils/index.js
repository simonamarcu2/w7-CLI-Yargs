// const movieArr = [];

// class Movie {
//     constructor(title, actor = "not defind"){
//         this.title = title;
//         this.actor = actor;
//     }
//     add(){
//         movieArr.push(this);
//     }
// };

// module.exports = { Movie, movieArr};


///////////////////////////////////////////

const tennisArr =[];

class Tennis{
    constructor(args){
        const playerAttr = ["country", "player", "year", "winningTitle"];
        playerAttr.forEach((element) => {
            this[element] = args[element] ? args[element] : "unspecified";
        });
    }
    add(){
        tennisArr.push(this)
    }
}
const morePlayers = (args) => {
    if (args.entries > 10) {
        console.log(" Maximum capacity of players reached")
    }
    const allTennisKeys = Object.keys(args);
  for (let i = 1; i < args.place + 1; i++) {
    const tennisAttr = {};
    allTennisKeys.forEach((element) => {
      if (element.includes(i)) {
       const newKey = element.slice(0, -1);
        tennisAttr[newKey] = args[element];
      }
    });
    const movieI = new Movie(movieIAttributes);
    movieI.add();
  }
};
module.exports = { Tennis, tennisArr, morePlayers};
