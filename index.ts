type ShapeCreator = (numVertices: number) => Shape 

type Shape = {
  name: string; 
  numVertices: number;
  /*createConvexVertices: (sideLength: number) => Vertex[];
  findPerimeter: (sideLength: number) => number;*/ 
}

type Vertex = {
  x: number;
  y: number;
 }

let createShape: ShapeCreator = (numVertices) => {
 const shape: Shape = {
   name: 'asdl;fkjasdjf',
   numVertices: numVertices,
 }
 return(shape);
}