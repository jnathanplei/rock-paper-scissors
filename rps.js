function computerPlay(max) {
    num = Math.floor(Math.random() * max);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}