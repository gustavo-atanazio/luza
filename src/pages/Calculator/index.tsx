import { useEffect, useState } from 'react';
import Input from 'components/Input';

function Calculator() {
  const [consumption, setConsumption] = useState('');
  const [kwh, setKwh] = useState('');
  const [quantity, setQuantity] = useState('');
  const [oldConsumption, setOldConsumption] = useState('');
  const [newConsumption, setNewConsumption] = useState('');

  const [economy, setEconomy] = useState(0);
  const [impact, setImpact] = useState(
    Number(localStorage.getItem('IMPACTO_MENSAL')) || 0
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const economyPerUnit = Number(oldConsumption) - Number(newConsumption);
    const totalEconomy = economyPerUnit * Number(quantity);

    const totalImpactEconomy = (totalEconomy / Number(consumption)) * 100;

    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const monthlyEconomy = totalEconomy * daysInMonth;

    const cashEconomy = monthlyEconomy * Number(kwh);

    setEconomy(cashEconomy);
    setImpact(totalImpactEconomy);
  }

  useEffect(() => {
    localStorage.setItem('IMPACTO_MENSAL', JSON.stringify(impact));
  }, [impact]);

  return (
    <div className='md:px-64'>
      <div className='flex flex-col gap-2 md:flex-row justify-between items-center mb-6'>
        <h1 className='text-2xl font-semibold self-start md:self-center'>
          Calculadora de economia
        </h1>

        <span className='self-start md:self-center'>
          {`Último cálculo: ${impact !== 0 ? `economia mensal de ${impact}%` : 'nenhum'}`}
        </span>
      </div>

      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <Input
          label='Consumo mensal atual (kWh)'
          type='number'
          name='consumption'
          value={consumption}
          setValue={setConsumption}
          required
        />

        <Input
          label='Custo do kWh'
          type='number'
          name='kwh'
          value={kwh}
          setValue={setKwh}
          required
        />

        <Input
          label='Quantidade de itens'
          type='number'
          name='quantity'
          value={quantity}
          setValue={setQuantity}
          required
        />

        <Input
          label='Consumo do item antigo'
          type='number'
          name='old-consumption'
          value={oldConsumption}
          setValue={setOldConsumption}
          required
        />

        <Input
          label='Consumo do item novo'
          type='number'
          name='new-consumption'
          value={newConsumption}
          setValue={setNewConsumption}
          required
        />

        <button
          className='bg-green-600 py-2 px-4 w-fit rounded-lg self-center text-xl'
          type='submit'
        >
          Calcular
        </button>
      </form>

      {economy > 0 && (
        <div className='mt-6 text-xl text-center'>
          <h3>Economia mensal: R$ {economy.toFixed(2)}</h3>
          <p>Impacto no consumo total: {impact}%</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;