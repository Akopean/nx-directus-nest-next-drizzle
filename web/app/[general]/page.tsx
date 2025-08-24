'use client';

import React, { useEffect, useState } from 'react';
import { DirectusService } from './../../services/directus.service';
import { formatError } from './../../shared/utils';
import { Page } from './../../types/page.types';

export default function Index({
  params,
}: {
  params: Promise<{ general: string }>;
}) {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const resolvedParams = React.use(params);
  const directus = new DirectusService();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!resolvedParams || !mounted) return;

    directus
      .fetchPageBySlug(resolvedParams.general)
      .then((page) => setData(page))
      .catch((err) => setError(formatError(err)))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedParams, mounted]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>{data?.title}</h1>
      {mounted ? (
        <>
          {loading && <p>Завантаження...</p>}
          {error && <p>Помилка: {error}</p>}
          {data && (
            <>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}
