"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[80%] max-w-[330px] h-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-3xl text-black hover:scale-110 active:scale-95 transition cursor-pointer"
                  aria-label="Close modal"
                  type="button"
                >
                  X
                </button>
                <div className="mt-4">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
