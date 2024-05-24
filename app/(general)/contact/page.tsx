import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Soy un titulo',
  description: 'soy una descripción',
  keywords: ['hola'],
}



export default function contactPage() {
  return (
    <>
      <span className="text-7xl"> Contact Page</span>
    </>
  )
}