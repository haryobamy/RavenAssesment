import { Suspense } from 'react';

// eslint-disable-next-line react/prop-types
export function Suspensed({ children, ...props }) {
  return (
    <Suspense
      fallback={
        <div className="suspense__center" {...props}>
          Loading.....{' '}
        </div>
      }
    >
      {children}{' '}
    </Suspense>
  );
}
