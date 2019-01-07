const countTime = (num = 0) => {
    let numOfSecunds = num;
    document.body.textContent = `minęło ${numOfSecunds}s odkąd jesteś na stronie`;

    function clock() {
        numOfSecunds++;
        document.body.textContent = `minęło ${numOfSecunds}s odkąd jesteś na stronie`;
    };

    return clock;
}

const timer = countTime();

setInterval(timer, 1000)