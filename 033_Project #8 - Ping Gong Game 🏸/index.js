document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("ping-pong-table"); // targeting the ping-pong-table element
    let paddle = document.getElementById("paddle");         // targeting the paddle element
    let ball = document.getElementById("ball");             // targeting the ball element
    
    // here the ballX and ballY will be helping us to set a starting point of of ball w.r.t table
    let ballX = 50; // distance of the top of the ball w.r.t pong table 
    let ballY = 50; // distance of the left of the ball w.r.t pong table
    
    let dx = 2; // displacement factor in x-direction, 2 -> you will displace by 2px in +x direction, -2 -> you will displace by 2px in -x direction
    let dy = 2; // displacement factor in y-direction, 2 -> you will displace by 2px in +y direction, -2 -> you will displace by 2px in -y direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    
    setInterval(function exec() {
        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // console.log(ball.offsetLeft);
        // console.log(ball.offsetTop);
        // console.log(ball.offsetHeight);
        // console.log(ball.offsetWidth);
        // console.log(ball.offsetParent);

        /**
         * ballX < paddle.offsetLeft + paddle.offsetWidth -> if left(wrt table) of ball < right(wrt table) of the paddle
         * ballY > paddle.offsetTop -> if top(wrt table) of ball > top(wrt table) of paddle
         * ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight -> 
         * ballY + ball.offsetHeight -> bottom of the ball
         * paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
         */
        if((ballX < paddle.offsetLeft + paddle.offsetWidth) && (ballY > paddle.offsetTop) && (ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight)) {
            dx *= -1;
        }

        /*
        if(ballX > 700-20 || ballX <= 0) {    // table width = 700px, ball width = 20px
            dx *= -1;
        }
        if(ballY > 400-20 || ballY <= 0) {    // table height = 400px, ball height = 20px
            dy *= -1;
        }
        */

        // collision of ball and paddle
        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) {    // change x-direction
            dx *= -1;
        }
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) {    // change y-direction
            dy *= -1;
        }
    }, 1);


    let paddleY = 0;
    let dPy = 10;    // displacement for paddle in y-direction

    // handle the paddling using keyboard up and down key
    document.addEventListener("keydown", (event) => {
        event.preventDefault(); // prevents the execution of the default event behaviour
        
        if((event.key === "ArrowUp") && (paddleY > 0)) {                  // event.keyCode === 38
            // when pressing up arrow key
            paddleY -= dPy;    // paddleY += (-1)*dPy;
            // console.log("up", paddleY );
        } else if((event.key === "ArrowDown") && (paddleY < table.offsetHeight - paddle.offsetHeight)) {          // event.keyCode === 40
            // when pressing down arrow key
            paddleY += dPy;
            // console.log("down", paddleY);
        }
        paddle.style.top = `${paddleY}px`
    });

    // handle the paddling using mouse
    document.addEventListener("mousemove", (event) => {
        // console.log(event.clientX);     // this is the distance of the mouse point from the left of the screen
        // console.log(event.clientY);     // this is the distance of the mouse point from the top of the screen

        if(event.clientX > table.offsetLeft + (table.offsetWidth)) {
            return;
        } 

        let mouseDistanceFromTop = event.clientY; // this is the distance of the mouse point from the top of the screen
        let distanceOfTableFromTop = table.offsetTop;
        
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        // console.log(mousePointControl);/
        paddleY = mousePointControl;
        
        // if bottom of the paddle touches bottom of the table return
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) {
            return;
        } 
        
        paddle.style.top = `${paddleY}px`;
    });
});