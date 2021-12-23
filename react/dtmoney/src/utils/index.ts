export const formatValue = (value: number): string => {
   return value.toLocaleString('pt-BR', {
      currency: 'brl',
      style: 'currency'
   });
}