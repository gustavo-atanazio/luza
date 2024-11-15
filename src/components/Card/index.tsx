import { Link } from 'react-router-dom';

function Card({ title, text, link }: { title: string, text: string, link: string }) {
  return (
    <div className='flex flex-col gap-4 p-4 bg-zinc-800 rounded-lg'>
      <h4 className='text-lg'>
        {title}
      </h4>

      <p>
        {text}
      </p>

      <Link
        className='bg-green-600 py-1 px-6 w-fit rounded-lg self-center'
        to={link}
      >
        Veja
      </Link>
    </div>
  );
}

export default Card;