import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-8 md:gap-16'>
      <h1 className='text-4xl font-bold'>
        Nada por aqui
      </h1>

      <img
        className='md:w-[20%]'
        src='/assets/img/404.png'
        alt='Homem mechendo em painéis de energia solar'
      />

      <span className='text-xl'>
        Que tal voltar onde estava?
      </span>

      <button
        className='flex gap-2 bg-green-600 py-2 px-4 w-fit rounded-lg self-center text-xl items-center'
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </div>
  );
}

export default NotFound;