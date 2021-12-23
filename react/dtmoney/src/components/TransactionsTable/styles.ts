import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 4rem;

   table {
      width: 100%;
      border-spacing: 0 0.5rem;

      @media (max-width: 690px) {
         width: 690px;
         overflow-x: auto;
         display: block;
         max-width: 100%;
      }

      th {
         color: var(--text-body);
         font-weight: 400;
         padding: 1rem 2rem;
         text-align: left;
         line-height: 1.5rem;
      }

      td {
         padding: 1rem 2rem;
         border: 0;
         background: var(--shape);
         color: var(--text-body);

         &.income {
            color: var(--green);
         }
         &.outcome {
            color: var(--red);
         }
      }
   }
`;
