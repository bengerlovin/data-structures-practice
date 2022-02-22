const breadthFirstSearch = (graph, source) => {

    let queue = [source];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);

        for (let neighbor of graph[currentNode]) {
            queue.push(neighbor)
        }
    }


}

const depthFirstSearch = (graph, source) => {
    let stack = [source]

    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

depthFirstSearch(graph, 'a')


