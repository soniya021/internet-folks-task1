import React from "react";
import "./Articles.css";

const articles = [
  {
    title: "Grilled Tomatoes at Home",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/tomatoIcon.svg",
  },
  {
    title: "Snacks For Travel",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/mealsIcon.svg",
  },
  {
    title: "Post-Workout Recipes",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/mealIcon.svg",
  },
  {
    title: "How To Grill Corn",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/tomatoesIcon.svg",
  },
  {
    title: "Crunchwrap Supreme",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/curdIcon.svg",
  },
  {
    title: "Brocoli Chese Soup",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s ,when an unknown printer took a galley of type and",
    button: "Read More",
    img: "/images/brocolliIcon.svg",
  },
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
            <p>{article.paragraph}</p>
            <button>{article.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
