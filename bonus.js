var createCounter = function (init) {
    let firstValue = init
    function increment() {
        init++
        return init
    }
    function decrement() {
        init--
        return init    }
    function reset() {
        init = firstValue
        return firstValue        
    }

    return {increment,decrement,reset}
};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())