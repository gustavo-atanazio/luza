import Card from 'components/Card';
import { useArticlesContext } from 'context/Articles';

function Blog() {
  const { articles } = useArticlesContext();

  return (
    <div className='grid grid-cols-2 gap-6 md:px-48'>
      {articles.map(({ id, title, text }) => (
        <Card
          title={title}
          text={text}
          link={`/blog/${id}`}
          key={id}
        />
      ))}
    </div>
  );
}

export default Blog;