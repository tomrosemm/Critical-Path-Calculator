class Graph {
  constructor() {
    // Adjacency list, from node to array of nodes that it has an edge with
    this.adjList = new Map();
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }
  addVertex(v) {
    this.adjList.set(v, [])
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    const get_keys = this.adjList.keys();

    // iterate over the vertices
    for (const i of get_keys) {
      // get the corresponding adjacency list
      // for the vertex
      let get_values = this.adjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (const j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
}

function graph(tableRows) {
  let graph = new Graph();
  for (i in tableRows) {
    row = tableRows[i].name
    graph.addVertex(row);
  }
  graph.printGraph();
}

function addEdge(list, v, w) {

}

function testing() {
  const tableInputRow = {
    name: "Task 1",
    predecessors: "Task 0",
    successors: "Task 2",
    duration: 5
};
  const tableRows = [tableInputRow];
  graph(tableRows);
}

testing();