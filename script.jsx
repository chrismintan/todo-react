class ListMaker extends React.Component {

  constructor() {
    super();
    this.typing = this.typing.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      input: '',
      lists: [],
      error: 'Item is too short!',
      showError: false,
    }
  }

  typing(event) {
    this.setState({
      input: event.target.value,
    })
  }

  addTask(event) {
    if ( this.state.input.length > 5 ) {
      let arr = this.state.lists;
      this.setState({
        lists: [...this.state.lists, this.state.input],
        input: '',
        showError: false,
      })
    } else {
      this.setState({
        showError: true,
      })
    }
  }

  showError() {
    this.setState((prevState, props) => {
      return {
        showError: !prevState.showError}
    })
  }

  render() {
    let list = this.state.lists.map((lists, index) => {
      return (
        <div key={index}>{index + 1}: {lists}</div>
      )
    })

    if ( this.state.showError == true ) {
      var message = this.state.error;
    } else {
      var message = '';
    }

    return (
      <div>
        <div>{message}</div>
        <input onChange={this.typing} value={this.state.input} />
        <button onClick={this.addTask}>Add to list</button>
        {list}
      </div>
    )
  }
}

// class List extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//         input: '',
//         lists: [],
//     }
//   }

//   // this.changeHandler = this.changeHandler.bind( this );


//   changeHandler(event){
//     this.setState({word:event.target.value});
//     console.log("change", event.target.value);
//   }

//   render() {
//       // render the list with a map() here

//       console.log("rendering");
//       return (
//         <div className="list">
//           <input onChange={this.changeHandler} value={this.state.word}/>
//           <button>add item</button>
//         </div>
//       );
//   }
// }

ReactDOM.render(
    <ListMaker/>,
    document.getElementById('root')
);

