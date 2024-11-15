import { useNavigate, useParams } from 'react-router-dom';
import { useArticlesContext } from 'context/Articles';

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles } = useArticlesContext();

  if (articles.length === 0) {
    return (
      <h1 className='text-4xl text-center'>
        Carregando...
      </h1>
    );
  }

  const { title, content } = articles.find(art => art.id === Number(id)) || articles[0];

  return (
    <div className='flex flex-col gap-6 md:gap-24'>
      <h1 className='text-4xl text-center'>
        {title}
      </h1>

      <p className='text-lg text-justify md:px-24 md:text-2xl'>
        {content}
      </p>

      <button
        className='flex gap-2 bg-green-600 py-2 px-4 w-fit rounded-lg self-center text-xl items-center'
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </div>
  );
}

export default Article;