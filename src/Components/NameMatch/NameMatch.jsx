const NameMatch = () => {
    const nameCalculator = () => {
        const name1 = document.getElementById("name1").value.trim();
        const name2 = document.getElementById("name2").value.trim();
        if (name1 === "" || name2 === "") {
            alert("Please enter both names.");
        } else {
            const percentage = Math.floor(Math.random() * 101);
            const result = document.getElementById("result");
            result.innerHTML = `${name1} and ${name2}'s name match: ${percentage}%`;

            if (percentage < 30) {
                result.innerHTML += "<br> Not a Great Match. Keep Looking for a great match!";
            } else if (percentage >= 30 && percentage < 70) {
                result.innerHTML += "<br> This is Potential. Give it a try!";
            } else {
                result.innerHTML += "<br> Great Match! Love is in the Air!";
            }
        }
    };

    return (
        <div style={{ padding: "120px", textAlign: 'center' }}>
            <h2 className="text-4xl pb-4">Perfect Pet Name Match</h2>
            <div className="overflow-x-auto">
                <div>
                    <label className="text-2xl" htmlFor="name1">Your Pet's Name</label>
                    <input id="name1" style={{ padding: "10px" }} type="text" placeholder='Enter Name' />
                    <br />
                    <label className="text-2xl" htmlFor="name2">Match Name</label>
                    <input id="name2" style={{ padding: "10px" }} type="text" placeholder='Enter Other Name ' />
                    <br />
                    <button className="text-3xl p-7" style={{ color: "blue" }} onClick={nameCalculator}>Calculate</button>
                    <div className="text-2xl" id="result">Result</div>
                </div>
            </div>
        </div>
    );
};

export default NameMatch;
