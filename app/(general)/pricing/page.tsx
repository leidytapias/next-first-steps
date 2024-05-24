
import { Metadata } from "next"
import { PageProps } from '../../../.next/types/app/(general)/contact/page';

export const metadata: Metadata = {
  title: 'Hola soy un titulo',
  description: 'Hola soy una descripcion',
 keywords: ['hola','saludo'],
}

export default function PricingPage(){
  return(
    <>
      <span className="text-7xl"> pricing</span>
    </>
  ) 
}
