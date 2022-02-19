const message = "in global";
console.log("global message: " + message)

const a = function () {
    const message = "inside a";
    console.log("a message: " + message)
    b()
}

function b() {
    console.log("b message: " + message)
}

a();