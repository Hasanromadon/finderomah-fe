import React,{ useState,useEffect, useCallback } from 'react'
import { Disclosure } from '@headlessui/react'
import {MenuIcon, XIcon, } from '@heroicons/react/outline'
import Logo from 'components/atoms/logo'
import { Link } from 'react-router-dom'
import Button from 'components/atoms/button'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'How to Get', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            setShow(true);
        } else if (y < window.scrollY) {
            setShow(false);
        }
        setY(window.scrollY);
      }, [y]
    );
    
    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);

  return (
    <Disclosure as="nav" className={`sticky z-10 top-0 bg-white shadow-sm transition-transform duration-500 ${show ? 'translate-y-0 transition-transform' : '-translate-y-20 transition-transform'} `}>
      {({ open }) => (
        <>
          <div>
            <div className="relative top-0 flex items-center justify-between h-16 mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
               <div className='sm:hidden'>
               <Logo/>
               </div>
              </div>
              {/* end */}
              <div className="container">
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between ">
                    <Logo/>
                    <ul className='text-base hidden sm:flex items-center gap-8 text-gray-500'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>How to get</Link></li>
                        <li><Link to='/'>Product</Link></li>
                        <li><Link to='/'>Review</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                    </ul>
                    <div>
                    <Button outlined className="mr-2" title="Sign In"/>
                    <Button  primary title="Sign Up"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-primary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                    <Button outlined className="mr-2" title="Sign In"/>
                    <Button  primary title="Sign Up"/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}