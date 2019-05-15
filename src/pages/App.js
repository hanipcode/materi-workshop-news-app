import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

import './App.css';

import { getNews } from '../data/api';

class App extends React.Component {
  state = {
    dataArticle: [],
    loading: true,
  };

  componentDidMount() {
    getNews().then(data => {
      console.log(data);
      this.setState({
        dataArticle: data.articles,
        loading: false,
      })
    })
  }

  renderLoading() {
    return <h3 className="mt-5 text-center">
      Loading...
    </h3>
  }

  render() {
    const { dataArticle, loading } = this.state;
    return (
      <div>
        <Header title="Beritaku" />
        {loading && this.renderLoading()}
        {!loading && (
          <div className="news-container px-5">
            {dataArticle.map((article) => {
              return <Card
                image={article.urlToImage}
                title={article.title}
                author={article.author}
                description={article.description}
                published={article.publishedAt}
              />
            })}
          </div>
        )}
      </div>
    )
  }
}

export default App;
