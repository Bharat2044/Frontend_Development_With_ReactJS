import { Fragment } from "react";

function DogDescription({description}) {
    return (
        <Fragment>
            {description}
        </Fragment>
    );
}

export default DogDescription;


// function DogDescription() {
//     return (
//         <Fragment>
//             This is a preety cute dog, isn't it ? :)
//         </Fragment>
//     );
// }


/*
function DogDescription() {
    return (
        <>
            This is a preety cute dog, isn't it ? :)
        </>
    );
}

export default DogDescription;
*/