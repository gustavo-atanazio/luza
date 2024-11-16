type Props = {
  label: string;
  type: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean
};

function Input({ label, type, name, value, setValue, required }: Props) {
  return (
    <div className='flex flex-col gap-1'>
      <label
        className='md:text-xl'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className='rounded py-2 px-4 outline-0 bg-zinc-600 text-neutral-200'
        type={type}
        name={name}
        value={value}
        onChange={e => setValue(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default Input;