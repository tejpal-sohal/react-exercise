import React, { Component } from 'react';
// create a component for a list of checkbox items here: 

class CheckboxList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map((lesson) => {
              return <li key={lesson.id}><input type="checkbox" onClick={()=>this.props.checkedHandler(lesson)} />{lesson.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


export default CheckboxList;