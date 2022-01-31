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
    constructor(game, player = "Not specified"){
        this.game = game;
        this.player = player;
    }

    add(){
        tennisArr.push(this)
    }
}

module.exports = { Tennis, tennisArr};