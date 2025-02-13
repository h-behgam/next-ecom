import React from 'react';

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <main className="container-home">
    <h1>SingleProductPage and id is: {(await params).id}</h1>
  </main>;
}
