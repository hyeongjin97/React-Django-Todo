import axios from "axios";


export default{
    getAllTodo(){
        return axios.get('/api/todos/')
    },
    createTodo(item){
        return axios.post('/api//todos/',item)
    },
    editTodo(item){
        return axios.put(`/api/todos/${item.id}/`,item)
    },
    deleteTodo(item){
        return axios.delete(`/api/todos/${item.id}`)
    }
}