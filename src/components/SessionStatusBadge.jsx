import { useSessionUser } from "../hooks/useSessionUser.js";

function SessionStatusBadge({ forceOffline = false }) {
  const user = useSessionUser();
  const isOnline = !forceOffline && Boolean(user?.id);

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg transition-colors ${
        isOnline ? "bg-[#69b523] shadow-[#69b523]/25" : "bg-rose-500 shadow-rose-500/25"
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
      {isOnline ? "En linea" : "Fuera de linea"}
    </div>
  );
}

export default SessionStatusBadge;
