'use client';

import { Button } from '@/components/ui';
import { uiStore } from '@/store';

export default function Home() {
  const { count, decrement, increment } = uiStore();

  return (
    <div className=''>
      <h1>Hello world</h1>
      <h2>{count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
