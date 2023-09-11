interface ErrorBlockProps {
  error: string;
}

function ErrorBlock({ error }: ErrorBlockProps) {
  return (
    <p className="text-center text-red-600 py-4 my-2 font-bold bg-gradient-to-l from-indigo-400/50">
      {error}
    </p>
  );
}
export { ErrorBlock };
