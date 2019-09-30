import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.insect = '';
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ insect: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewInsect(this.state.insect);
  };

  // handleUpdate = (event) => {
  //   console.log('clicked')
  //   this.props.updateInsect(this.state.insect);
  // };

  render() {
    return (
      <>
        <h3>Click list items to update</h3>
        <form onSubmit={this.handleSubmit}>
          {
            this.props.insects.map((insect, key) =>
              <li key={key} name={insect.id} onClick={e => {
                this.props.updateInsect({ id: insect.id, name: 'updated name' })
              }}>
                {insect.name}
                <button type='button' onClick={e => {
                this.props.deleteInsect(insect.id)
              }}> X </button>
              </li>
            )
          }
          <input
            type='text'
            value={this.state.insect}
            onChange={this.handleChange}
            placeholder='Enter a Insect'
          />
          <button type='submit'> Create a Insect </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    insects: state.insects,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    createNewInsect: (insectName) => {
      dispatch({
        type: 'INSECT_CREATE',
        payload: insectName,
      });
    },

    deleteInsect: (insect) => {
      dispatch({
        type: 'INSECT_DELETE',
        payload: insect,
      });
    },

    updateInsect: (insect) => {
      dispatch({
        type: 'INSECT_UPDATE',
        payload: insect,
      });
    },

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

























