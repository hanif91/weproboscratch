'use client';

import menuData from '@/data/NavMenuData';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import UseStateMenu from '@/hooks/UseStateMenu';

export default function NavMobile({ handletoogle }: any) {
  const datatoggleSubmenu = UseStateMenu();

  const [toggleSubmenu, setToggleSubmenu] =
    useState<Boolean[]>(datatoggleSubmenu);

  const handleSubmenu = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const array = toggleSubmenu.slice();
    array[index] = !array[index];
    setToggleSubmenu(array);
  };

  return (
    <>
      <p className="h-4">
        <br></br>
      </p>
      {menuData.map((menu, index) =>
        !menu.path ? (
          <div
            className="mx-auto w-full h-auto  "
            key={menu.id}
            onClick={(e) => handleSubmenu(e, index)}
          >
            <motion.div
              animate={
                toggleSubmenu[index] ? { height: 'auto' } : { height: '28px' }
              }
              initial={{ height: '28px' }}
              className="flex flex-col cursor-pointer overflow-hidden "
            >
              <div className="flex items-center mx-4 justify-between my-auto h-full px-4  border-b-2 border-myprimary-700 rounded-full">
                {menu.title}

                <motion.div
                  className="flex mx-2  items-center justify-center p-0.5"
                  animate={
                    toggleSubmenu[index]
                      ? { opacity: [0, 1, 1], rotate: 180 }
                      : { opacity: [0, 1], rotate: 0 }
                  }
                  transition={{
                    opacity: { duration: 1.5 },
                    rotate: { duration: 0.3 },
                  }}
                  initial={{ rotate: 0, opacity: 1 }}
                >
                  <ArrowDown className="h-[22px] w-[22px]" />
                </motion.div>
              </div>

              <div className="mx-4 flex flex-col">
                {menu.submenu?.map((smenu) => (
                  <Link
                    href={smenu.path || '/'}
                    className="items-center my-auto h-full ml-7 pl-3 border-b-2 rounded-2xl border-myprimary-700"
                    key={smenu.id}
                    onClick={handletoogle}
                  >
                    {smenu.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="mx-auto  w-full h-7 cursor-pointer" key={menu.id}>
            <Link
              href={menu.path || '/'}
              className="flex items-center  mx-4 border-b-2 rounded-full border-myprimary-700 justify-start my-auto h-full px-4 "
              onClick={handletoogle}
            >
              {menu.title}
            </Link>
          </div>
        )
      )}
      <p className="mx-4 mb-4 border-b-[1px] h-5 border-myprimary-950">
        <br></br>
      </p>

      <Link
        href={'/sign-in'}
        className="mx-4 bg-myprimary-500 py-2 px-4 mb-[2px] rounded-full text-myprimary-50 hover:bg-myprimary-600 active:bg-myprimary-700 "
        onClick={handletoogle}
      >
        Masuk
      </Link>
    </>
  );
}
