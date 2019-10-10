import React, {  Component } from "react";
import "./chip.css";
import ReactTags from "react-tag-autocomplete";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [
        {
          id: 1,
          name: "Nick Giannopouos",
          emailId: "n.giannopoulus@example.com"
        },
        {
          id: 2,
          name: "Narayana Garner",
          emailId: "n.garner@example.com"
        },
        {
          id: 3,
          name: "Anita Gros",
          emailId: "a.gros@example.com"
        },
        {
          id: 4,
          name: "Megan Smith",
          emailId: "m.smith@example.com",
        }
      ],
      tags: [],
    }
  }


  handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
    console.log("initial", this.state.suggestions)
    const suggestions = [].concat(this.state.tags, i)
    this.setState({suggestions})
    //this.state.suggestions.push(this.state.tags[0])
    console.log("update value",this.state.suggestions)
  }
 
  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
    this.state.suggestions.forEach((i) => {
      if(i.id === tag.id){
        this.state.suggestions.splice(i,1)
      }
    })
    console.log("on add",this.state.suggestions)
  }

  render() {
    return (
      <div>
        <ReactTags  
           tags={this.state.tags}
           suggestions={this.state.suggestions}
           handleDelete={this.handleDelete.bind(this)}
           handleAddition={this.handleAddition.bind(this)}
          placeholder="Search"
        />
        </div>
    )
  }
}

export default Chips;