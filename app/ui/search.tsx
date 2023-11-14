'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('find', term);
    } else {
      params.delete('find');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return <>
    <input
    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    placeholder={placeholder}
    onChange={(e) => {
      handleSearch(e.target.value);
    }}
    defaultValue={searchParams.get('query')?.toString()}
  />
  </>
}