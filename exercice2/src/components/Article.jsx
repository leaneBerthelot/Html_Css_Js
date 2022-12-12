import React from "react";

const Article = (props) => {
  const article = props.thisArticle;

  return (
    <article key={article.id}>
      <h1>{props.thisArticle.title}</h1>
      <h2>{article.subtitle}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.date.toLocaleDateString("fr")}</p>
    </article>
  );
};

export default Article;
