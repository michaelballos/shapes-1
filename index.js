const shapeCreator = function shapeCreator(numVertices){  // vertices = 4
    const shapeProperties = {
        name: 'buttPlug',
        numVertices: numVertices,
        angleSize: 30,
        findPerimeter: (sideLength) => {  //sidelength = 4 
          perimeter = sideLength * numVertices; 
          return perimeter;    
        },
        createConvexVertices: (sideLength) => { 
          const angles = [60, 60, 60];
          const distanceFromOrigin = sideLength / (2 * Math.sin(30));
          const vertices = angles.map(angle => {
            xVertexPosition = sideLength / 2;
            yVertexPoisition = math.sqrt(distanceFromOrigin - (xVertexPosition * xVertexPosition));
          });
          return (vertices);
        }
      };
    };

degToRad = (degree) => (Math.PI * degree) / 180;
intAngleSum = (numVertices) => numVertices - 2 * 180;

