"use client";

import dynamic from 'next/dynamic';

// Φορτώνουμε τον πραγματικό WebGL καμβά αποκλειστικά στον browser
const CanvasView = dynamic(() => import('./CanvasView'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#030712] -z-50 w-screen h-screen" />
});

export default function DynamicCanvas() {
  return (
    // Διορθώθηκε: Εξασφαλίζουμε ότι το parent div έχει 100% ύψος και πλάτος οθόνης
    <div className="fixed inset-0 -z-50 w-screen h-screen pointer-events-none bg-transparent block">
      <CanvasView />
    </div>
  );
}