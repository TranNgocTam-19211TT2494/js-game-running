let canvasCreator = {
    id: 'canvas',
    zIndex: 1,
    contextMode: '2d',
    width: WIDTH,
    height: HEIGHT,
 

    create: function () {
        canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.id = this.id;
        canvas.style.zIndex = this.zIndex;
        
        context = canvas.getContext(this.contextMode);
        document.body.appendChild(canvas);

        return context;
    }
    
};
// let divBack = {
//     class: 'back-home',
    

//     create: function () {
//         back = document.createElement("a");
       
//         back.class = this.class;
//         context2 =  document.createTextNode("Hi there and greetings!"); 
//         document.body.appendChild(back);

//         return context2;
       
//     }
    
// };
