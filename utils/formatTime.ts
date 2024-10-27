// Función para formatear la hora en formato de 12 horas con AM/PM
export const formatTimeTo12Hour = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convertir 0 a 12 para formato de 12 horas
  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
