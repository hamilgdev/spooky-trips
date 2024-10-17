import { DropzoneForm } from '@/components';

export const HomeSection = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='l-layout'>
        <div className='flex flex-col lg:flex-row gap-4 h-full w-full'>
          <div className='min-w-96'>book section</div>
          <div className='flex-1 text-center'>
            <h1 className='text-4xl font-bold text-gray-800'>
              ¡Vacaciones aterradoras!
            </h1>
            <p className='mt-2 text-gray-600'>
              Transforma tus ultimas vacaciones en un relato de terror
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
