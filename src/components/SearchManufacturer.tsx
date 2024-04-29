'use client'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'
import { useState, Fragment, useEffect } from 'react'
import { manufacturers } from '@/constants'
import { CheckIcon } from '@heroicons/react/20/solid'

const SearchManufacturer = ({ selected, setSelected }: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers = manufacturers.filter(item =>
        item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    )

    return (
        <div className='search-manufacturer'>
            <Combobox value={selected} onChange={setSelected}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" alt="car logo" width={20} height={20} className='ml-4' />
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input" placeholder='Volkswagen' displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}>
                        <Combobox.Options className="relative">
                            {
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {item}
                                                </span>
                                                {
                                                    selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span >) : null
                                                }
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox >
        </div >
    )
}

export default SearchManufacturer