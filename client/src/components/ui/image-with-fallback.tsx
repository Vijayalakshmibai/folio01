import React, { useState } from 'react';
import { Award, FileText, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: 'award' | 'file' | 'image';
  fallbackText?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackIcon = 'image',
  fallbackText 
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const FallbackIcon = {
    award: Award,
    file: FileText,
    image: ImageIcon
  }[fallbackIcon];

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-700 rounded-lg p-8 ${className}`}>
        <FallbackIcon className="h-16 w-16 text-gray-400 mb-4" />
        <p className="text-gray-400 text-center">
          {fallbackText || alt}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-700 rounded-lg ${className}`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}