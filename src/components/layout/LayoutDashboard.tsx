import type { Metadata } from 'next';
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: 'LexGest - Gestión de Despachos Jurídicos',
  description: 'La solución completa para la gestión moderna de despachos jurídicos. Optimiza tu práctica legal con LexGest.',
  keywords: 'despacho jurídico, gestión legal, expedientes, facturación, abogados',
  authors: [{ name: 'LexGest Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className='dark'>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
