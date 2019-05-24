import React from 'react';

class Article extends React.Component
{
  render() {
    const { name, price } = this.props;

    return (
      <div>
        {name} - {price}
      </div>
    )
  }
}

export default Article;