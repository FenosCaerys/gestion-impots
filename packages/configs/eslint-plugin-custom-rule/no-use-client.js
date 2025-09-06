"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow 'use client' in page/layout/dr files",
      category: "Best Practices",
      recommended: false,
    },
    schema: [], // no options
  },
  create: function (context) {
    const handleProgram = (node) => {
      const sourceCode = context.sourceCode;
      const filename = context.filename;
      const firstLine = sourceCode.lines[0].trim();

      // Check if the file is a page or layout file
      const isTargetedFile = /(?:page|layout|dr)\.(ts|tsx|js|jsx)$/.test(
        filename,
      );

      // Si le fichier utilise des hooks React, on autorise 'use client'
      const hasReactHooks =
        sourceCode.text.includes("useState") ||
        sourceCode.text.includes("useEffect") ||
        sourceCode.text.includes("useRouter") ||
        sourceCode.text.includes("useSearchParams");

      // If it's the targeted file type and the first line is 'use client'
      if (isTargetedFile && firstLine === '"use client"' && !hasReactHooks) {
        context.report({
          node,
          message: "'use client' is not allowed in page or layout files.",
          loc: {
            start: { line: 1, column: 0 },
            end: { line: 1, column: firstLine.length - 1 },
          },
        });
      }
    };

    return {
      Program: handleProgram,
    };
  },
};
