export const useForm = () => {
   function checkFields(obj: Object) {
      let hasEmptyValue = false;
      const emptyValues: any[] = [];

      for(const [key, value] of Object.entries(obj)) {
         if(!value) {
            hasEmptyValue = true;
            emptyValues.push({
               key,
               value,
               message: `O campo ${key} está vazio!`
            });
         }
      }

      return {
         hasEmptyValue,
         emptyValues
      }
   }

   return {
      checkFields,
   }
};