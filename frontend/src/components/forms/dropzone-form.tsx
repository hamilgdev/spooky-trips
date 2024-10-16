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
    <div className='flex items-center justify-center w-full'>
      <div
        {...getRootProps()}
        className={clsx(
          'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50',
          isFocused || isDragAccept
            ? 'border-green-500 bg-green-50'
            : 'hover:bg-gray-100'
        )}
      >
        <input {...getInputProps()} accept='application/pdf' />
        <div className='mb-2'>
          <FileUploadIcon />
        </div>

        <div className='flex flex-col gap-2 justify-center items-center'>
          {!isDragActive && !isLoading && (
            <div className='text-center'>
              <p className=' text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Click para cargar</span> o
                arrastra tu foto aquí
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Solo imagenes *(png, jpg, jpeg, webp)
              </p>
            </div>
          )}

          {isDragActive && isDragAccept && (
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Suelta el archivo aqui...
            </p>
          )}

          {isDragActive && !isDragAccept && (
            <p className='text-sm text-red-500 dark:text-red-400'>
              Solo se permiten imagenes
            </p>
          )}

          {isLoading && (
            <div className='flex flex-col justify-center items-center'>
              <ReloadIcon className='animate-spin' />
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Cargando imagen...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
