import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';

import Store from '../redux';

import Head from '../components/atom/Head';
import Button from '../components/atom/Button';

class Home extends Component {
  render() {
    const {props} = this

    return (
      <div className="Home">
        <Head />
        <h1>Welcome World</h1>
        <Button>Something</Button>
        {props.test &&
          <h2>Test is true</h2>
        }

        {props.author &&
          <h3>{props.author} is the Repo Author</h3>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.Test.testing,
    author: state.Test.repo.author,
  }
}

export default withRedux(Store, mapStateToProps, null)(Home);
