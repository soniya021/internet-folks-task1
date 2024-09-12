import React from 'react';
import './Articles.css';

const articles = [
  { title: 'Grilled Tomatoes', img: '/images/tomatoes.svg' },
  { title: 'Broccoli for Dinner', img: '/images/meals.svg' },
  { title: 'Plant-based Lasagna', img: '/images/meals1.svg' },
  { title: 'How to Grill Corn', img: '/images/tomatoes1.svg' },
  { title: 'Crunchwrap Supreme', img: '/images/curd.svg' },
  { title: 'Broccoli Cheese Soup', img: '/images/brocolli.svg' }
];

const Articles = () => {
  return (
    <section className="articles">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.img} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
