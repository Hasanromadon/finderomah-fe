import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import './style.css';
import SearchInput from '../search';
import InputList from 'components/atoms/input/inputList';

const Tabs = () => {

  const tabSelectedStyle = (selected) => (
    selected ? 'bg-blue-500 text-white px-4 py-2' : 'inactive-tab'
  );

  const dataInput = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Hellen Schmidt' },
  ];

  return (
    <Tab.Group>
    <Tab.List>
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={
              `${tabSelectedStyle(selected)} rounded-tl-md `
            }
          >
           BUY
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={
              `${tabSelectedStyle(selected)} rounded-tr-md`
            }
          >
           RENT
          </button>
        )}
      </Tab>
      {/* ...  */}
    </Tab.List>
    <Tab.Panels className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-9 tab-pannel">
      <Tab.Panel>
        <div className='grid grid-cols-4'>
            <InputList location label="Based Location" data={dataInput}/>
            <InputList label="Property Type" data={dataInput}/>
            <InputList label="Avearge Price" data={dataInput}/>
            <div  className="mt-2">
              <SearchInput placeholder='Buy Home'/>
            </div>
        </div>
       
      </Tab.Panel>
      <Tab.Panel>
      <div className='grid grid-cols-4'>
            <InputList location label="Based Location" data={dataInput}/>
            <InputList label="Property Type" data={dataInput}/>
            <InputList label="Rent Price" data={dataInput}/>
            <div  className="mt-2">
              <SearchInput placeholder='Rent Home'/>
            </div>
        </div>
      </Tab.Panel>
      {/* ... */}
    </Tab.Panels>
  </Tab.Group>
  )
}

export default Tabs;