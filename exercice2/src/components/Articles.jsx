import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "Titre de l'article 1",

      image:
        "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

      subtitle: "Sous-titre de l'article 1",

      date: new Date("2021-01-01"),

      content: "Contenu de l'article 1",

      published: true,
    },

    {
      title: "Titre de l'article 2",

      image:
        "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

      subtitle: "Sous-titre de l'article 2",

      date: new Date("2021-01-01"),

      content: "Contenu de l'article 2",

      published: false,
    },

    {
      title: "Titre de l'article 3",

      image:
        "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

      subtitle: "Sous-titre de l'article 3",

      date: new Date("2021-01-01"),

      content: "Contenu de l'article 3",

      published: true,
    },
  ];

  const publishedArticles = articles.filter(
    (article) => article.published === true
  );

  return (
    <div>
      {publishedArticles.map((article) => {
        return (
          <article key={article.title}>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <img src={article.image} alt="image article" />
            <p>{article.date.toLocaleDateString("fr")}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Articles;
