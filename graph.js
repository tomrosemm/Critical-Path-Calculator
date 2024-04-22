class Graph {
  constructor() {
    // Adjacency list, from string to array of strings representing
    // tasks that it has an edge with
    this.adjList = new Map();
  }

  // function to add an edge FROM v TO w
  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }
  // Function to add a new vertex to the graph
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
  // Initialize an empty graph
  let graph = new Graph();
  // Loop over every row, and add it as a vertex
  for (i in tableRows) {
    row = tableRows[i].name
    graph.addVertex(row);
    // TODO: Add successors as edges from this to the task (Or check if it already exists)
    // TODO: Add predecessors as edges from the task to this (Or check if it already exists)
  }
  graph.printGraph();
}

function testing() {
  // Initialize table row sample data
  const tableInputRow = {
    name: "Task 1",
    predecessors: "Task 0",
    successors: "Task 2",
    duration: 5
};
  const tableRows = [tableInputRow]; // Encapsulate in array
  graph(tableRows); // Run function
}

// TODO: Remove this call later
testing(); // Run testing as a script for now