
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-extrabold text-gold drop-shadow-lg">404</h1>
        <h2 className="text-3xl mt-4 text-white">Oops! Page not found</h2>
        <p className="mt-2 text-gray-400">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 text-black bg-gold rounded-full shadow hover:scale-105 transform transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
