# shapes-1 Task Instructions

## Write a function createShape that takes arguments:

createShape: (numVertices: number) => Shape

## Where a shape is:

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

## For example

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
## Here's a quick reference for finding distanceFromOrigin
![reference](https://user-images.githubusercontent.com/92058204/157701338-3a7ce8b4-a27a-4b3d-b60b-7a45ce079359.png)
