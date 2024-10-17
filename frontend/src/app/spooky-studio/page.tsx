'use client';

import { useRouter } from 'next/navigation';

export default function SpookyStudioPage() {
  const router = useRouter();
  return router.push('/');
}
