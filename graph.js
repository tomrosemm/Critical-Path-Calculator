class Graph {
  constructor() {
    // Adjacency list, from string to array of strings representing
    // tasks that it has an edge with
    this.adjList = new Map();
  }

  // function to add an edge FROM v TO w
  addEdge(v, w) {
    if (!this.adjList.get(v).includes(w)) {
      this.adjList.get(v).push(w);
    }
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

      // print the vertex and its adjacency list, or NULL if it has no outgoing edges
      if (!conc) conc = "NULL"
      console.log(i + " -> " + conc);
    }
  }
}

function newGraph(tableRows) {
  // Initialize an empty graph
  let graph = new Graph();
  // Loop over every row, and add it as a vertex
  for (const i in tableRows) {
    const row = tableRows[i]
    graph.addVertex(row.name);
    // Loop over every successor and attempt to add it as an edge
    for (let s in row.successors) {
      const successor = row.successors[s];
      graph.addEdge(row.name, successor);
    }
    // Loop over every predecessor and attempt to add it as an edge
    for (const p in row.predecessors) {
      const predecessor = row.predecessors[p];
      graph.addEdge(predecessor, row.name);
    }
  }
  return graph
}

function testing() {
  // Initialize table row sample data
  // TODO: Change these to user input
  const task0 = {
    name: "Task 0",
    predecessors: [],
    successors: ["Task 1"],
    duration: 2
  };
  const task1 = {
    name: "Task 1",
    predecessors: ["Task 0"],
    successors: ["Task 2"],
    duration: 5
  };
  const task2 = {
    name: "Task 2",
    predecessors: ["Task 1"],
    successors: [],
    duration: 3
  };
  const tableRows = [task0, task1, task2]; // Encapsulate in array
  const g = newGraph(tableRows); // Run function
  g.printGraph();
  createGraph(tableRows);
}

function vertices(arr) {
  let output = [];
  for (let i in arr) {
    let currRow = arr[i];
    let color = (currRow.slack == 0) ? "#900" : "#FFF"
    let currObj = {key: parseInt(i), text: currRow.name, color: color};
    output.push(currObj);
  }
  return output;
}

function edges(arr) {
  let output = [];
  let g = newGraph(arr);
  for (const i in arr) {
    let successors = g.adjList.get(arr[i].name);
    for (const j in successors) {
      s = successors[j];
      index = arr.findIndex((elem) => elem.name == s);
      currObj = {from: parseInt(i), to: index};
      output.push(currObj);
    }
  }
  return output;
}

function createGraph(arr) {
  let diagram = new go.Diagram("graph");
  // the node template describes how each Node should be constructed
  diagram.nodeTemplate =
    new go.Node("Auto")
      .add(  // the Shape will go around the TextBlock
        new go.Shape("RoundedRectangle")
          // Shape.fill is bound to Node.data.color
          .bind("fill", "color"),
        new go.TextBlock({ margin: 8 }) // Specify a margin to add some room around the text
          // TextBlock.text is bound to Node.data.key
          .bind("text")
      );

  // the Model holds only the essential information describing the diagram
  diagram.model = new go.GraphLinksModel(vertices(arr), edges(arr));
  console.log(diagram.model);

  // enable Ctrl-Z to undo and Ctrl-Y to redo
  diagram.undoManager.isEnabled = true;
}

// TODO: Make this reliant on calculate button press
testing(); // Run testing as a script for now