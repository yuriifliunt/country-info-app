'use client';

export default function CustomError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-red-600">
        An error occurred while fetching country data. Please try again later.
      </h1>
    </div>
  );
}
