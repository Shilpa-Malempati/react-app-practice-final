// class 14: fetching the data from an API with react
import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://jsonplaceholder.typicode.com/todos/1",{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          }})
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}




export default App










