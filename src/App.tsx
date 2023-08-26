import { useEffect, useState } from 'react';
import { ReactComponent as DividerDesktop } from './assets/pattern-divider-desktop.svg';
import { ReactComponent as DividerMobile } from './assets/pattern-divider-mobile.svg';
import { ReactComponent as Dice } from './assets/icon.svg';
import axios from 'axios';

interface IAdvice {
  id: number;
  advice: string;
}

const App = () => {
  const [advice, setAdvice] = useState<IAdvice>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const rollRandomAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const data: IAdvice = await response.data?.slip;
      setAdvice(data);
      setDisabled(true);
      setLoading(true);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setDisabled(false);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(data?.slip);
        setDisabled(true);
        setLoading(true);
      } finally {
        setTimeout(() => {
          setDisabled(false);
          setLoading(false);
        }, 2000);
      }
    };
    response();
  }, []);
  console.log(advice?.advice.length);

  return (
    <div className='h-[100vh]  flex justify-center items-center bg-defaultBg relative'>
      <div className='h-full sm:h-[800px]  sm:w-[640px] pt-36 pb-56  relative flex flex-col justify-center items-center mx-4 '>
        <div className='h-full w-full rounded-2xl bg-primaryBg text-textColor flex justify-start items-center  flex-col pt-12 px-4 mx-6 text-center relative '>
          <h3 className='text-primary font-manropeSemiBold tracking-[0.25em] text-ms sm:text-md mb-8 sm:mb-16 whitespace-nowrap'>
            Advice #{advice?.id}
          </h3>
          <h1
            className={`text-textColor font-manropeXtraBold font-light tracking-wide  ${
              advice?.advice.length! <= 23
                ? 'text-3xl'
                : advice?.advice.length! <= 13
                ? 'text-4xl'
                : advice?.advice.length! <= 4
                ? 'text-9xl'
                : 'text-xl'
            } sm:2xl  whitespace-normal`}
          >
            {advice?.advice}
          </h1>
          <div className='absolute bottom-[20%] translate-y-1/2    '>
            <DividerDesktop className='hidden sm:block ' />
            <DividerMobile className='sm:hidden ' />
          </div>
        </div>
        <button
          className='h-16 w-16 flex items-center justify-center bg-primary rounded-full p-3 translate-y-[-50%] disabled:bg-textColor disabled:pointer-events-none transition duration-1000   hover:shadow-[0_0_25px_5px_#52FFA8]'
          disabled={disabled}
          onClick={() => rollRandomAdvice()}
        >
          <Dice className={`${loading && 'animate-spin'}`} />
        </button>
      </div>
    </div>
  );
};

export default App;
