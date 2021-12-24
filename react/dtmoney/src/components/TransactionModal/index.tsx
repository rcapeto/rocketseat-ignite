import { FunctionComponent, useState, FormEvent, ChangeEvent } from 'react';
import Modal from 'react-modal';

import { Transaction } from '../../@types/app';
import { Container } from './styles';
import IncomeImg from '../../images/assets/income.svg';
import OutcomeImg from '../../images/assets/outcome.svg';
import CloseImg from '../../images/assets/close.svg';
import { useForm } from '../../hooks/useForm';
import { useApi } from '../../api';
import { useApp } from '../../context';

interface Props {
   isOpen: boolean;
   onCloseModal: () => void;
}

interface TransactionsOptions {
   img: string;
   field: TransactionType;
   text: string;
};

interface TransactionState {
   category: string,
   title: string,
   type: TransactionType,
   value: number
};

type TransactionType = 'outcome' | 'income';

const initialTransaction: TransactionState = {
   category: '',
   title: '',
   type: 'income',
   value: 0
};

export const TransactionModal: FunctionComponent<Props> = ({ isOpen, onCloseModal }) => {
   const [transaction, setTransaction] = useState<TransactionState>(initialTransaction);

   const { checkFields } = useForm();
   const { postTransaction } = useApi();
   const { updateTransactions } = useApp();

   const transactionsTypes: TransactionsOptions[] = [
      {
         img: IncomeImg,
         text: 'Entrada',
         field: 'income'
      },
      {
         img: OutcomeImg,
         text: 'Saída',
         field: 'outcome'
      }
   ];

   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const { emptyValues, hasEmptyValue } = checkFields(transaction);

      if(!hasEmptyValue) {
         const newTransaction: Transaction = {
            date: new Date().toLocaleDateString(),
            id: Date.now(),
            ...transaction
         };

         try {
            const data = await postTransaction(newTransaction);
            
            if(data && Reflect.has(data, 'id')) {
               updateTransactions(data);
               window.alert('Transação cadastrada com sucesso!');
               onCloseModal();
            }

         } catch(err) {
            console.error('Error[Front-postTransaction]');
         }
      } else {
         const message = emptyValues.map(value => value.message);
   
         return window.alert(message.join('\n'));
      }
   }; 

   const changeValueText = (event: ChangeEvent<HTMLInputElement>) => {
      const { target: { value }} = event;
      const newValue = value.replace(/\D/g, '');

      setTransaction({...transaction, value: +newValue });
   };

   return(
      <Modal
         isOpen={isOpen}
         onRequestClose={onCloseModal}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <Container onSubmit={handleSubmit}>
            <div className="close-modal">
               <button
                  onClick={onCloseModal}
               >
                  <img src={CloseImg} alt="Fechar modal" />
               </button>
            </div>
            <h2>Cadastrar Transação</h2>

            <input 
               type="text" 
               placeholder="Título"
               value={transaction.title}
               onChange={({ target: { value }}) => setTransaction({...transaction, title: value })}
            />

            <input 
               type="text" 
               placeholder="Valor"
               value={transaction.value}
               onChange={changeValueText}
            />

            <div className="transaction-type">
               {
                  transactionsTypes.map((type, index) => (
                     <div
                        key={String(index)}
                        className={type.field === transaction.type ? 'active' : ''}
                        onClick={() => setTransaction({...transaction, type: type.field})}
                     >
                        <img src={type.img} alt={type.text} />
                        <p>{type.text}</p>
                     </div>
                  ))
               }
            </div>

            <input 
               type="text" 
               placeholder="Categoria"
               value={transaction.category}
               onChange={({ target: { value }}) => setTransaction({...transaction, category: value })}
            />

            <button type="submit">Cadastrar</button>

         </Container>
      </Modal> 
   );
};