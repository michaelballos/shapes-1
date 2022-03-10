# shapes-1 Task Instructions

##Write a function createShape that takes arguments:

createShape: (numVertices: number) => Shape

##Where a shape is:

type Vertex = {
  x: number;
  y: number;
};

type Shape = {
  name: string;
  numVertices: number;
  createConvexVertices: (sideLength: number) => Vertex[];
  findPerimeter: (sideLength: number) => number;
}

##For example

input: createShape(3); output:

{
  name: 'Triangle',
  numVertices: 3,
  angleSize: 60,
  createConvexVertices: (sideLength) => {
    const angles = [0, 120, 240]
    const distanceFromOrigin = ????

    /**
     * Given the distance from origin and angle, find position
     */
    const vertices = angles.map(angle => {
      ????
    });
    return(vertices);
  },
  

}
