"use client";

export function Button({ children, phoneNumber = "1234567890", ...props }) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      {...props}
      onClick={handleCall}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
} 