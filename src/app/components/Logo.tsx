export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-40 md:w-56 lg:w-72 drop-shadow-xl"
      />
    </div>
  );
}