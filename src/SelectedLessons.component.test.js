import { shallow } from 'enzyme';
import SelectedLessons from './SelectedLessons.component'
import lessonItems from './all-lessons'


const props = {
  selectedLessons: {
    isLoading: false,
    data: []
  },
  allLessons: lessonItems
}

describe('<SelectedLessons /> component', () => {

  it('should render', () => {
    const component = shallow(<SelectedLessons {...props} />)
    expect(component).toBeTruthy()
  })

  it('should display the correct name for the first item', () => {
    expect(lessonItems[0].name).toBe('Ad Tech Explained Part 1')
    
  })

  it('should display the right number of items', () => {
    expect(lessonItems.length).toBe(lessonItems.length)
  })

  it('should disable form if the data is being saved', () => {
    const component = shallow(<SelectedLessons {...props} />)
    component.find('button')[0].simulate('submit').toBe('disabled');
  })

  it('should disable the submit button if there are no lessons selected', () => {
    const component = shallow(<SelectedLessons {...props} />)
    component.find('button')[0].simulate('submit').toBe('disabled');
  })

  it('should enable the submit button if there are any lessons selected', () => {
    const component = shallow(<SelectedLessons {...props} />)
    component.find('input[checked="true"]')

  })

})