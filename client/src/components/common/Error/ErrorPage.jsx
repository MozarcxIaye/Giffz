import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const errorMessage = error?.statusText || error?.message || "Unknown error occurred";

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen text-center bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm text-gray-500 italic">
        {errorMessage}
      </p>
    </div>
  );
}
