document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false; // when chance is false we put 0, when chance is true we put x

    let arr = Array(9).fill(undefined);
    
    outer.addEventListener("click", (e) => {        
        // console.log(e.target);

        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        // console.log(cellNumber);

        if(cell.getAttribute("data-clicked")) {
            return;
        }        
        cell.setAttribute("data-clicked", "true");

        if(chance == true) {
            cell.textContent = 'X';
            arr[cellNumber] = 'X';
            winingCombo('X');
        } else {
            cell.textContent = '0';
            arr[cellNumber] = '0';
            winingCombo('0');
        }

        console.log(arr);

        chance = !chance; // this toggle chance
    });

    function winingCombo(char) {    
        let result = document.getElementById("result");        
        
        // for rows   
        if(arr[0] == char && arr[1] == char && arr[2] == char) {
            // if 0th row is having char
            result.textContent = `${char} wins`;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char) {
            // if 1st row is having char
            result.textContent = `${char} wins`;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char) {
            // if 2nd row is having char
            result.textContent = `${char} wins`;
        }
        // for columns   
        else if(arr[0] == char && arr[3] == char && arr[6] == char) {
            // if 0th col is having char
            result.textContent = `${char} wins`;
        }
        else if(arr[1] == char && arr[4] == char && arr[7] == char) {
            // if 1st col is having char
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[5] == char && arr[8] == char) {
            // if 2nd col is having char
            result.textContent = `${char} wins`;
        }
        // for diagonals   
        else if(arr[0] == char && arr[4] == char && arr[8] == char) {
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[4] == char && arr[6] == char) {
            result.textContent = `${char} wins`;
        }
    }
});