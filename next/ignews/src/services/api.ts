import { stripe } from './stripe';

export const useApi = () => {
   async function getPrice() {
      try {
         // const price = await stripe.prices.retrieve('price_1KAha1Hv33RNH5tKHMn4oTMa', {
         //    expand: ['product'] mostrar dados do produto
         // });
         const price = await stripe.prices.retrieve('price_1KAha1Hv33RNH5tKHMn4oTMa');

         return {
            price,
            status: 'OK!',
            error: false
         }
      } catch(err) {
         console.error('getPrice', {
            message: 'Error in API',
            locale: 'getPrice function',
            error: true,
         });
      }  
   }

   return {
      getPrice,
   }
};