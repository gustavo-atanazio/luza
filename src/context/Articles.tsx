import { createContext, useContext, useEffect, useState } from 'react';
import Article from 'types/Article';

type ArticlesContextType = {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};

const defaultValue = {
  articles: [],
  setArticles: () => null
};

const ArticlesContext = createContext<ArticlesContextType>(defaultValue);

function ArticlesContextProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://6737a5e74eb22e24fca5d1d5.mockapi.io/luza/articles');
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        alert('Erro ao obter dados.');
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const value = {
    articles,
    setArticles
  };

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}

function useArticlesContext() { return useContext(ArticlesContext); }

export { ArticlesContext, ArticlesContextProvider, useArticlesContext };