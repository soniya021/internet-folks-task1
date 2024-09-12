import React from 'react';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const blogPosts = [
    {
      title: 'The Ultimate Chocolate Cake Recipe',
      description: 'Discover the secret to making the perfect chocolate cake.',
      date: 'September 10, 2024',
    },
    {
      title: 'Healthy Smoothie Recipes for Weight Loss',
      description: 'Delicious and nutritious smoothie recipes for your fitness journey.',
      date: 'August 20, 2024',
    },
    {
      title: '10 Must-Try Pasta Dishes from Around the World',
      description: 'Explore global pasta dishes that will leave you craving more.',
      date: 'July 5, 2024',
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to the Food Blog</h1>
      <p>Discover delicious recipes and food stories!</p>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
