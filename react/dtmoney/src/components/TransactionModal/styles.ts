import styled from 'styled-components';

export const Container = styled.form`
   display: flex;
   flex-direction: column;

   h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
   }

   input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background-color: #e7e9ee;
      border: 1px solid #d7d7d7;
      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
         color: var(--text-body);
      }

      & + input {
         margin-top: 1rem;
      }
   }

   div {
      display: flex;
      align-items: center;

      &.close-modal {
         justify-content: flex-end;

         button {
            background: transparent;
            border: 0;
            transition: filter 0.6s ease;

            &:hover {
               filter: brightness(0.8);
            }
         }
      }

      &.transaction-type {
         margin: 1rem 0;
         justify-content: space-between;

         div {
            width: 48%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 4rem;
            cursor: pointer;
            transition: filter ease .6s;
            border: 1px solid #d7d7d7;
            border-radius: 0.25rem;
            gap: 1rem;

            &:hover {
               filter: brightness(0.8);
            }

            img {}
            p { }

         }
      }

      &.active {
         background-color: #e7e9ee;
      }
   }

   button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: var(--shape);
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: filter ease .6s;

      &:hover {
         filter: brightness(0.8);
      }
   }
`;