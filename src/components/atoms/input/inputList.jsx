import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {ChevronDownIcon, LocationMarkerIcon } from '@heroicons/react/solid'

const InputList =({label, data, location, zIndex})=> {
    
      const [selected, setSelected] = useState(data[0])
    
      return (
        <div className='sm:border-l sm:pl-3 mb-4'>
        <span className='text-sm from-neutral-500'>{label} <ChevronDownIcon className="w-5 h-5 inline text-blue-primary"/></span>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full pr-10 text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="text-base flex items-center ">{location && <LocationMarkerIcon className="w-4 h-4 inline mr-1 text-orange-custom " aria-hidden="true" /> } {selected.name}</span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options style={{zIndex : zIndex}} className={`absolute w-full py-1 mt-1overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
                  {data.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${active ? 'text-blue-primary bg-transparent-linear-blue' : 'text-gray-900'}
                        text-base cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-amber-600' : 'text-amber-600'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      )
    }


export default InputList;

