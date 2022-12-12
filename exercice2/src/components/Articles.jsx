import React from "react";
import Article from "./Article";

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

      id: 1,
    },

    {
      title: "Titre de l'article 2",

      image:
        "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

      subtitle: "Sous-titre de l'article 2",

      date: new Date("2021-01-01"),

      content: "Contenu de l'article 2",

      published: false,

      id: 2,
    },

    {
      title: "Titre de l'article 3",

      image:
        "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

      subtitle: "Sous-titre de l'article 3",

      date: new Date("2021-01-01"),

      content: "Contenu de l'article 3",

      published: true,

      id: 3,
    },
  ];

  const publishedArticles = articles.filter(
    (article) => article.published === true
  );

  return (
    <section>
      {publishedArticles.map((article) => {
        return <Article currentArticle={article} />;
      })}
    </section>
  );
};

export default Articles;
