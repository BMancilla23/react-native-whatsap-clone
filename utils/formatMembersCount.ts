// Función para formatear el número de miembros
export const formatMembersCount = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`; // Para millones
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`; // Para los miles
  }
  return count.toString(); // Para menos de mil
};
