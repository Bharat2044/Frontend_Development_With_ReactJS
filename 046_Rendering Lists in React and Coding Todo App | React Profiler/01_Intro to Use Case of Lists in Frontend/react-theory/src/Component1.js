function Component1() {
    // const arr = ["abc", "def", "ghi", "jkl"];
    const arr = [<li>abc</li>, <li>def</li>, <li>ghi</li>, <li>jkl</li>];

    return (
        <div>
            {/* {arr} */}
            <ul> {arr} </ul>
        </div>
    );
}

export default Component1;