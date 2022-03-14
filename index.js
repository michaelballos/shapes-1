const degToRad = (degree) => (Math.PI * degree) / 180;
const intAngleSum = (numVertices) => (numVertices - 2) * 180;
const round = (unrounded) => Math.ceil(unrounded * 10000) / 10000;

const createShape = (numVertices) => {
  const angleSize = (numVertices - 2) * 180;
  const innerAngleSize = angleSize / (2 * numVertices)

  const shapeProperties = {
    name: "buttPlug",
    numVertices: numVertices,
    totalAngleSize: angleSize,
    innerAngleSize: innerAngleSize,
    createConvexVertices: (sideLength) => {
      let thetas = [];
      for(n=0; n<numVertices; n+=1) {
        const pushTheta = (360/numVertices) * n + 90;
        thetas.push(pushTheta);
      }
      const distanceFromOrigin = sideLength / (2 * Math.cos(degToRad(innerAngleSize)));
      console.log('distanceFromOrigin', distanceFromOrigin);
      console.log('thetas', thetas);
      const vertices = thetas.map(thetas => ({ 
        x: distanceFromOrigin * Math.cos(degToRad(thetas)),
        y: distanceFromOrigin * Math.sin(degToRad(thetas)),
      }));
      return vertices;
    },
    findPerimeter: (sideLength) => {
      perimeter = sideLength * numVertices;
      return perimeter;
    },
  };
  return(shapeProperties);
};


const testTriangle = () => {
  const triangleInterface = createShape(10);
  console.log('createShapeResult', triangleInterface);

  const trianglePerimeter = triangleInterface.findPerimeter(2);
  console.log(`Triangle perimeter: ${trianglePerimeter}`);

  const triangleVertices = triangleInterface.createConvexVertices(3);

  triangleVertices.forEach((vertex) => {
  console.log(`(${round(vertex.x)}, ${round(vertex.y)})`);
  });

};


testTriangle();