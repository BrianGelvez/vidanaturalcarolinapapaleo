process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { NextResponse } from 'next/server';

export async function GET() {
  const appId = process.env.NEXT_PUBLIC_X_APP_ID;
  const appKey = process.env.NEXT_PUBLIC_X_APP_KEY;

  if (!appId || !appKey) {
    console.error('Variables de entorno no definidas');
    return NextResponse.json({ error: 'Variables de entorno no definidas.' }, { status: 500 });
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}`, {
      method: 'GET',
      headers: {
        'x-app-id': appId,
        'x-app-key': appKey,
      },
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('Error en la respuesta de la API:', errorDetails);
      return NextResponse.json({ error: `Error en la respuesta de la API: ${errorDetails}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    return NextResponse.json({ error: `Error al hacer la solicitud: ${error.message}` }, { status: 500 });
  }
}
