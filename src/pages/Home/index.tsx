import { ArrowRight } from 'lucide-react';
import Card from 'components/Card';

function Home() {
  return (
    <>
      <div className='h-[75dvh] flex flex-col justify-around p-6'>
        <h1 className='text-5xl text-center font-bold'>
          Energia limpa ao seu alcance
        </h1>

        <p className='text-xl text-center max-w-2xl mx-auto'>
          Explore ferramentas e informações que ajudam você a economizar, adotar
          práticas sustentáveis e entender melhor o mundo das energias renováveis.
        </p>

        <a
          className='flex gap-2 bg-green-600 py-2 px-4 w-fit rounded-lg self-center text-xl items-center'
          href='#resources'
        >
          Ver recursos
          <ArrowRight className='mt-1'/>
        </a>
      </div>

      <section className='flex flex-col gap-6 p-6'>
        <h2 className='text-3xl text-center font-semibold'>
          Por que energia limpa?
        </h2>

        <p className='text-center text-lg max-w-3xl mx-auto'>
          A transição para fontes renováveis de energia é essencial para reduzir
          impactos ambientais, economizar recursos e garantir um futuro mais
          sustentável para todos. Cada pequeno passo conta!
        </p>
      </section>

      <section id='resources' className='flex flex-col gap-6 mt-20 md:px-48'>
        <h2 className='text-3xl text-center font-semibold px-6'>
          Descubra nossas ferramentas
        </h2>

        <p className='text-center text-lg max-w-3xl mx-auto px-6'>
          Nossas ferramentas foram criadas para empoderar você com dados e
          insights práticos sobre consumo e sustentabilidade. Conheça as opções
          abaixo e comece sua jornada hoje!
        </p>

        <div className='grid grid-cols-2 gap-6'>
          <Card
            title='Calculadora'
            text='Veja e meça quanto você pode economizar com energia renovável!'
            link='/calculator'
          />

          <Card
            title='Blog'
            text='Fique por dentro das tendências e aprendizados sobre energia limpa.'
            link='/blog'
          />
        </div>
      </section>
    </>
  );
}

export default Home;