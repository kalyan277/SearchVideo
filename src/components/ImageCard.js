import React, { Component } from 'react'

// Creating Ref at very first time then using the value to manipulate
export default class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state={spans:0};
        this.imgRef= React.createRef();
    }
    componentDidMount(){
       // console.log(this.imgRef);
       this.imgRef.current.addEventListener('load',this.setSpans); 
    }
    setSpans=()=>{
        const height =this.imgRef.current.clientHeight;
      //  console.log(height);return;
        const spans=Math.ceil(height/10);
        this.setState({spans});
    }
    render() {
        return (
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img
              ref={this.imgRef}
              alt={this.props.image.description}
              src={this.props.image.urls.regular}
            />
          </div>
        );
    }
}
