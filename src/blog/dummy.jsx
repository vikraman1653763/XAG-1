import React from 'react';

function Dummy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-red-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">My React App</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow bg-white-100 py-8">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-2xl font-semibold  mb-4">Welcome to my app!</h2>
          <p className="mb-4">
            This is a simple example of a React component styled with Tailwind CSS.
          </p>
          <p>
            You can customize this layout and add more components as needed.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My React App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dummy;
