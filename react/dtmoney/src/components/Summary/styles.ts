import styled from 'styled-components';

export const Container = styled.div`
   padding: 2.5rem 1rem;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin-top: -10rem;

   @media (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 2.5rem 1rem 1rem 1rem;
   }

   div {
      display: flex;
      flex-direction: column;
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;

      header {
         display: flex;
         align-items: center;
         justify-content: space-between;

         p {
            color: var(--text-title);
         }
      }

      strong {
         display: block;
         font-size: 2rem;
         margin-top: 1rem;
         color: var(--text-title);
         line-height: 3rem;
      }
   }
`;