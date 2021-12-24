import { useState } from 'react';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionModal } from './components/TransactionModal';

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);

  function handleManipulateNewTransactionModal(type: 'close' | 'open') {
    setIsNewTransactionModalOpen(
       type == 'close' ? false : true
    );
 }

  return (  
    <>
      <Header 
        onOpenTransactionModal={() => {
          handleManipulateNewTransactionModal('open');
        }}
      />
      <Dashboard />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onCloseModal={() => handleManipulateNewTransactionModal('close')}
      />
    </> 
  );
}