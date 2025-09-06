const buildMap = (offsetUpper: number, offsetLower: number) => {
  const map: Record<string, string> = {}
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(offsetUpper + i)
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(offsetLower + i)
  }
  return map
}

const boldMap = buildMap(0x1d400, 0x1d41a)
const italicMap = buildMap(0x1d434, 0x1d44e)
const scriptMap = buildMap(0x1d4d0, 0x1d4ea)
const frakturMap = buildMap(0x1d504, 0x1d51e)

function stylize(text: string, styleMap: Record<string, string>): string {
  return text
    .split("")
    .map((c) => styleMap[c] || c)
    .join("")
}

function strikethrough(text: string): string {
  return text
    .split("")
    .map((c) => c + "\u0336")
    .join("")
}

export function parseUnicodeMarkdown(text: string): string {
  // Utiliser une approche qui préserve les espaces et les sauts de ligne
  // Traiter chaque ligne séparément pour préserver les paragraphes
  const lines = text.split("\n")

  const processedLines = lines.map((line) => {
    // Appliquer par priorité décroissante de complexité
    let processedLine = line
    processedLine = processedLine.replace(/\^\^(.+?)\^\^/g, (_, t) => stylize(t, frakturMap)) // ^^fraktur^^
    processedLine = processedLine.replace(/`(.+?)`/g, (_, t) => stylize(t, scriptMap)) // `script`
    processedLine = processedLine.replace(/~~(.+?)~~/g, (_, t) => strikethrough(t)) // ~~barré~~
    processedLine = processedLine.replace(/\*\*(.+?)\*\*/g, (_, t) => stylize(t, boldMap)) // **gras**
    processedLine = processedLine.replace(/\*(.+?)\*/g, (_, t) => stylize(t, italicMap)) // *italique*
    return processedLine
  })

  // Rejoindre les lignes en préservant les sauts de ligne
  return processedLines.join("\n")
}

// Fonctions auxiliaires pour la barre d'outils
export function wrapSelectedText(text: string, selectionStart: number, selectionEnd: number, wrapper: string): string {
  const before = text.substring(0, selectionStart)
  const selected = text.substring(selectionStart, selectionEnd)
  const after = text.substring(selectionEnd)

  // Si le texte est déjà entouré par le wrapper, on le retire
  const wrapperRegex = new RegExp(`^${wrapper}(.+?)${wrapper}$`)
  const match = selected.match(wrapperRegex)

  if (match) {
    return before + match[1] + after
  } else {
    return before + wrapper + selected + wrapper + after
  }
}

// Interface pour les paramètres de la fonction getNewCursorPosition
interface CursorPositionParams {
  originalText: string
  newText: string
  selectionStart: number
  selectionEnd: number
  wrapper: string
}

// Fonction pour obtenir la nouvelle position du curseur après l'application d'un style
export function getNewCursorPosition(params: CursorPositionParams): { start: number; end: number } {
  const { originalText, selectionStart, selectionEnd, wrapper } = params
  const wrapperLength = wrapper.length
  const wrapperRegex = new RegExp(`^${wrapper}(.+?)${wrapper}$`)
  const selected = originalText.substring(selectionStart, selectionEnd)
  const match = selected.match(wrapperRegex)

  if (match) {
    // Si on retire le style, le curseur recule
    return {
      start: selectionStart,
      end: selectionEnd - 2 * wrapperLength,
    }
  } else {
    // Si on ajoute le style, le curseur avance
    return {
      start: selectionStart,
      end: selectionEnd + 2 * wrapperLength,
    }
  }
}
