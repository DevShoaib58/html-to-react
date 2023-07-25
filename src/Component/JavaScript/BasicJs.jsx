const BasicJs = () => {
    const operator = () => {
        console.log("This Is A Function");
        const a = 10
        const b = 5
        const c = 3
        return <fragment>  {a == b ? <h1>Hello</h1> : <h2>Bye{cnpm}</h2>}</fragment>;

    }
    return (
        <div className="container text-center">
            <h1>Basic Js</h1>
            <p style={{ fontSize: "20px" }}>Hello this is Just a Basic JS Page</p>
            {operator()}
        </div>
    );
};

export default BasicJs;