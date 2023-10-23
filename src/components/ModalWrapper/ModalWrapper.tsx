import { Fragment, FC } from 'react';
import { Transition, Dialog } from '@headlessui/react';

import { ModalWrapperProps } from './types';

const ModalWrapper: FC<ModalWrapperProps> = ({
  isOpen,
  children,
  onModalClose = () => {},
  handleModalClose = () => {},
  containerClassName
}: ModalWrapperProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment} afterLeave={onModalClose}>
      <Dialog as='div' className='fixed inset-0 z-30 overflow-y-auto' onClose={handleModalClose}>
        <div className={`min-h-screen text-center flex justify-center items-center`}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              as='div'
              className='fixed inset-0 bg-black bg-opacity-50 min-h-screen text-center flex justify-center items-center'
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              className={`max-w-full ${containerClassName || 'w-11/12 sm:w-[544px]'}
              transition-all transform shadow-xl rounded-lg`}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalWrapper;
