import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and merges Tailwind CSS classes using tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a string to a URL-friendly slug
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export function stringToSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // Normalize diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim() // Remove leading and trailing whitespace
}

/**
 * Calculates the time between two dates and returns a human-readable string
 * @param date1 The first date
 * @param date2 The second date (defaults to current date)
 * @returns A human-readable string representing the time between the two dates
 */
export function getTimeBetween(date1: Date, date2: Date = new Date()): string {
  const milliseconds = Math.abs(date2.getTime() - date1.getTime())
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  // Use default French terms if no dictionary is provided
  const defaultTerms = {
    year: "an",
    years: "ans",
    month: "mois",
    months: "mois",
    day: "jour",
    days: "jours",
    hour: "heure",
    hours: "heures",
    minute: "minute",
    minutes: "minutes",
    second: "seconde",
    seconds: "secondes",
    now: "maintenant",
  }

  // We're not actually using the dictionary object directly since it has a complex structure
  // Instead, we just use our default terms

  if (years > 0) {
    return years === 1 ? `1 ${defaultTerms.year}` : `${years} ${defaultTerms.years}`
  } else if (months > 0) {
    return months === 1 ? `1 ${defaultTerms.month}` : `${months} ${defaultTerms.months}`
  } else if (days > 0) {
    return days === 1 ? `1 ${defaultTerms.day}` : `${days} ${defaultTerms.days}`
  } else if (hours > 0) {
    return hours === 1 ? `1 ${defaultTerms.hour}` : `${hours} ${defaultTerms.hours}`
  } else if (minutes > 0) {
    return minutes === 1 ? `1 ${defaultTerms.minute}` : `${minutes} ${defaultTerms.minutes}`
  } else if (seconds > 0) {
    return seconds === 1 ? `1 ${defaultTerms.second}` : `${seconds} ${defaultTerms.seconds}`
  } else {
    return defaultTerms.now
  }
}

/**
 * Converts bytes to megabytes with a specified precision
 * @param bytes The number of bytes to convert
 * @param formatAsString If true, returns a formatted string; if false or a number, specifies decimal precision
 * @returns The number of megabytes (as a number or formatted string)
 */
export function bytesToMegabytes(bytes: number, formatAsString: boolean | number = 2): string | number {
  const precision = typeof formatAsString === "number" ? formatAsString : 2
  const megabytes = Number((bytes / (1024 * 1024)).toFixed(precision))

  return typeof formatAsString === "boolean" && formatAsString ? megabytes.toString() : megabytes
}
