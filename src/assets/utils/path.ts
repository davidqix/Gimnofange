/**
 * Função que gera o caminho correto para ativos estáticos
 * considerando o base path configurado no Vite
 */
export function getAssetPath(path: string): string {
  // Remove a barra inicial se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Usa o import.meta.env.BASE_URL do Vite que contém o base configurado no vite.config.ts
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
