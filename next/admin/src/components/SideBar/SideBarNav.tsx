import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';

import { SectionProps } from './Section';

const Section = dynamic(() => import('./Section'), { ssr: false });

const sections: SectionProps[] = [
   {
      title: 'GERAL',
      items: [
         {
            icon: RiDashboardLine,
            text: 'Dashboard',
            href: '/dashboard',
         },
         {
            icon: RiContactsLine,
            text: 'Usuários',
            href: '/users',
         }
      ]
   },
   {
      title: 'AUTOMAÇÃO',
      items: [
         {
            icon: RiInputMethodLine,
            text: 'Formulários',
            href: '/forms',
         },
         {
            icon: RiGitMergeLine,
            text: 'Automação',
            href: '/automation',
         }
      ]
   }
];

export function SideBarNav() {
   return(
      <Stack spacing="12" align="flex-start">
         {
            sections.map((section, key) => (
            <Section {...section} key={String(key)} />
            ))
         }
      </Stack>
   );
}