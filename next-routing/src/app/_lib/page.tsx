export default function PrivateRoute() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-md rounded-xl mt-15">
      <h2 className="text-3xl font-bold mb-4">Private Route</h2>
      <p className="text-gray-700 text-lg">
        This is a private route that requires authentication.
      </p>
    </div>
  );
}