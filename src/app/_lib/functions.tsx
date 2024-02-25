import { CaracterThumbnail } from "../_types/caracter_thumbnail";


export function getCaracterThumbnail({thumbnail}: {
  thumbnail: CaracterThumbnail
}): string {
  return `${thumbnail.path}.${thumbnail.extension}`;
}

export function normalizeHistory(history: string): string {
  return history.length > 210 ? history.slice(0, 210) + '...' : history
}