import React, { Component } from 'react';
import CheckboxList from './CheckboxList.component'
import { connect } from 'react-redux'
import moize from 'moize'
import { updateSelectedLessons } from './updateSelectedLessons.action'

// Add code in this file to create a component for the main view:
// You may want to connect component to store props & dispatch 

class SelectedLessonsComponent extends Component {
  state= {
     disabled:false
  }

  Submit = (e,id) => {
   this.props.success(id)
   e.preventDefault()
   this.setState({ disabled: false })
  }

  checkedHandler(lesson){
     this.props.selected(lesson.id,lesson.status)
     this.setState({ disabled: true })
  }

  render() {
    const allLessons = this.props.allLessons;
    return (
      <div>
         <h1>Lessons List</h1>
         <form disabled>
         <CheckboxList list={allLessons} checkedHandler={this.checkedHandler.bind(this)} />
         <button id="button" disabled={!this.state.disabled} onClick={this.Submit.bind(this)}>Submit</button>
         </form>
         <span><small>Sorry, I have never used Redux 😟</small></span>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    allLessons: state.allLessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selected:(id,status) => {dispatch({type: "UPDATE_SELECTED_LESSONS_REQUEST", id:id, status:status})},
    success: (id) => {dispatch({type: "UPDATE_SELECTED_LESSONS_SUCCESS", id:id})}
  }
}

const SelectedLessons = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedLessonsComponent)

export default connect(mapStateToProps, mapDispatchToProps)(SelectedLessons)