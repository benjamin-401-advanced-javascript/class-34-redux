import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.category = '';
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({category: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewCategory(this.state.category);
  };

  render() {
    return (
      <>
        {
          this.props.categories.map(category =>
            <li>{category}</li> )
        }

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.category}
            onChange={this.handleChange}
            placeholder='Enter a Category'
          />
          <button type='submit'> Create a Category </button>
        </form>
      </>
    );
  }
}

// Vinicio - this function lets you READ from the state
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
};

// Vinicio - this function lets you send ACTIONS to the store
const mapDispatchToProps = (dispatch) => {
  return {
    createNewCategory : (categoryName) => {
      dispatch({
        type: 'CATEGORY_CREATE',
        payload: categoryName,
      });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

























