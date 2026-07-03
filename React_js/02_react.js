//original  React


  const React = {
    createElement: function(type,props,children){
        return {
            type: type ,
            props: {
                ...props ,
                children : children
            }
        }
    }
  }


//    const reactElement = {
//      type: "h1",
//      props: {     //element
//          className:"element",
//          id:"first",
//           style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//           children:"hello coder army"
     
//          }
//    }


  const ReactDOM = {
   render : function(reactElement , root){

    root.innerHTML = '';
     const element = document.createElement(reactElement.type); 
  const {props} = reactElement;

     for(const key in props){
        if(key === 'style'){
            Object.assign(element.style,props.style);
        }
        else if(key === 'children'){
            element.textContent = props[key];
        }
        else{
            element[key] = props[key];
        }
     }
     root.append(element);
   }
    }

const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"hello coder army")

const element2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"blue"}},"hello world")

ReactDOM.render(element1,document.getElementById('root'));
ReactDOM.render(element2,document.getElementById('root'));


//  const root = document.getElementById('root');
//  ReactDOM.render(element1,root);
  //ReactDOM.render(element2,root);