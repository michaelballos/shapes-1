const createShape = function vertices(numVertices){
    const shape = {
        name: 'Shape',
        numVertices: numVertices,
        findPerimeter (sideLength){
          return 'Perimeter Calculation';     
        },
        createConvexVertices (sideLength){
          const vertex = {
            x: Number,
            y: Number,
          }; 
          return vertex;
        }
    };    
    return (shape);
};
