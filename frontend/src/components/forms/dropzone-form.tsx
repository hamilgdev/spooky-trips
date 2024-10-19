'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';

import { useUploadFile } from '@/hooks';
import { ReloadIcon, FileUploadIcon } from '@/components';

export const DropzoneForm = () => {
  const { handleUploadFile, isLoading } = useUploadFile();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        handleUploadFile(file);
      }
    },
    [handleUploadFile]
  );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isFocused } =
    useDropzone({
      onDrop,
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      },
    });

  return (
    <div className='flex items-center justify-center w-full shadow-2xl'>
      <div
        {...getRootProps()}
        className={clsx(
          'flex flex-col items-center justify-center w-full h-64 border border-orange-600 border-dashed rounded-lg cursor-pointer bg-gradient-to-r from-yellow-500',
          isFocused || isDragAccept
            ? 'border-orange-800 bg-orange-500'
            : 'hover:bg-orange-400'
        )}
      >
        <input {...getInputProps()} accept='application/pdf' />
        <div className='mb-2'>
          <FileUploadIcon />
        </div>

        <div className='flex flex-col gap-2 justify-center items-center'>
          {!isDragActive && !isLoading && (
            <div className='text-center'>
              <p className=' text-sm text-gray-800'>
                <span className='font-semibold'>Click para cargar</span> o
                arrastra tu foto aquí
              </p>
              <p className='text-xs text-gray-800'>
                Solo imagenes *(png, jpg, jpeg, webp)
              </p>
            </div>
          )}

          {isDragActive && isDragAccept && (
            <p className='text-sm text-gray-800'>Suelta el archivo aqui...</p>
          )}

          {isDragActive && !isDragAccept && (
            <p className='text-sm text-red-700'>Solo se permiten imagenes</p>
          )}

          {isLoading && (
            <div className='flex flex-col justify-center items-center'>
              <ReloadIcon className='animate-spin' />
              <p className='text-sm text-black'>Cargando imagen...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
