import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const articles = [{ name: 'My article', price: 100 }];
    this.setState({
      articles: articles,
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="App">
        {
          articles.map((article, k) => {
            return (
              <Article key={k} name={article.name} price={article.price} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
