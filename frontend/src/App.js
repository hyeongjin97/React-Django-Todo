import React, { Component } from 'react';
import  Modal  from './components/Modal';
import Modal_detail from './components/Modal_detail'
import api from './api';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      modal_detail:false,
      activeItem: {
        title: " ",    
        description:" ",
        completed: false
      }
    };
  }
  componentDidMount(){
    this.refreshList();
  }
  refreshList = async() =>{
    const results = await api.getAllTodo()
    this.setState({todoList:results.data})
  
  }
  toggle = () => {
    this.setState({modal: !this.state.modal});
  };
  toggle2 = () =>{
    this.setState({modal_detail:!this.state.modal_detail})
  } 
  handleSubmit = async(item) => {
    
    this.toggle();
    if(item.id) {
      await api.editTodo(item)
      this.refreshList()
      return;
    }
    await api.createTodo(item)
    this.refreshList()
  }

  handleDelete = async(item) => {
    await api.deleteTodo(item)
    this.refreshList()
  }
  createItem = () =>{
    const item = {title:"", description:"",completed:false,image:""}
    this.setState({activeItem:item, modal: !this.state.modal})
  }
  editItem = (item) =>{
    this.setState({activeItem:item, modal:!this.state.modal})
  }
  displayCompleted = (status) =>{
    if(status){
      
      return this.setState({viewCompleted:true});
    }
    return this.setState({viewCompleted:false});
  
  }
  displayDetail = (item) => {
    
    this.setState({activeItem:item,modal_detail:!this.state.modal_detail})
  }
  renderTabList = () =>{
    return(
      <div className="nav nav-tabs">
        <span className={this.state.viewCompleted? "nav-link activate": "nav-link"}
              onClick = {()=>this.displayCompleted(true)}
        >
          Complete
        </span>
        <span className={this.state.viewCompleted? "nav-link": "nav-link activate"}
              onClick = {()=>this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>


    );
  };
  renderItems = () =>{
    const {viewCompleted} = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted
    );
    return newItems.map((item)=>(
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo":""}`}
          title={item.description}

        >
          <button className="btn btn-primary" onClick={()=>this.displayDetail(item)}>{item.title}</button>
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={()=>this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
      
      ));
  };
  
  render() {
    return (
      <main className="container">
      <h1 className="text-black text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={this.createItem}
              >
                Add task
              </button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush border-top-0">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
      {this.state.modal?(
        <Modal 
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handleSubmit}
        ></Modal>
      ):null}
       {this.state.modal_detail?(
        <Modal_detail 
          activeItem={this.state.activeItem}
          toggle={this.toggle2}
        ></Modal_detail>
      ):null}
    </main>
    );
  }
}

export default App;