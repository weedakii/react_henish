import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const links = [
  {
    name: "الرئيسية",
    link: "#home",
  },
  {
    name: "عني",
    link: "#about",
  },
  {
    name: "الخدمات",
    link: "#services",
  },
  {
    name: "المواعيد",
    link: "#sceduling",
  },
  {
    name: "التواصل",
    link: "#contact",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [params, setparams] = useState("#home");

  return (
    <header className="bg-white z-50 shadow-[0px_4px_5px_-2px_#ddd] h-[60px] sticky top-0 left-0 right-0">
      <nav
        className="mx-auto h-full flex max-w-7xl items-center justify-between px-6 py-2  lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            محمد حنيش
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((e, i) => (
            <a
              key={i}
              href={e.link}
              onClick={() => setparams(e.link)}
              className={`${
                params === e.link ? "bg-blue-200" : ""
              }  text-sm hover:bg-blue-200 px-3 py-2 rounded-md font-semibold leading-6 text-gray-900`}
            >
              {e.name}
            </a>
          ))}
        </Popover.Group>
      </nav>
      {/* Sidebar */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((e, i) => (
                  <a
                    key={i}
                    href={e.link}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {e.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
