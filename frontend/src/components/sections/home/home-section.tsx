import { BookCard, DropzoneForm } from '@/components';

export const HomeSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#09203f] to-[#09203f]'>
      <h1
        className='absolute text-white font-bold text-8xl text-center top-16 font-henny-penny pointer-events-none'
        style={{
          textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        Spooky Trips
      </h1>
      <div
        className='pointer-events-none w-full h-full absolute -top-20 -left-6'
        style={{
          backgroundImage: 'url(/assets/svgs/spider-left.svg)',
          backgroundSize: 'contain',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />
      <div
        className='min-h-screen w-full absolute -bottom-20 left-16 pointer-events-none'
        style={{
          backgroundImage: 'url(/assets/svgs/halloween-night-bg.svg)',
          backgroundSize: '100%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />
      <div className='max-w-screen-xl'>
        <div className='flex flex-col lg:flex-row gap-8 h-full w-full relative'>
          <div className='min-w-96'>
            <BookCard />
          </div>
          <div className='flex-1 text-center text-white flex justify-center flex-col'>
            <h2 className='font-bold text-4xl shadow-lg-cyan-500/50'>
              ¡Vacaciones Aterradoras!
            </h2>
            <p className='mt-2 text-md font-semibold'>
              Transforma tus vacaciones en un relato de terror
            </p>
            <div className='mt-4'>
              <DropzoneForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
