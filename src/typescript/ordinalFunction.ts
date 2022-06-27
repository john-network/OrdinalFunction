interface Suffixes {
   zero?: string;
   one: string;
   two: string;
   few: string;
   many?: string;
   other: string;
}

function generateOrdinal(counting: number) {
   const pluralRules = new Intl.PluralRules("en", {
      type: "ordinal",
   });

   const suffixes: Suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
   };

   const suffix = suffixes[pluralRules.select(counting)];
   return (counting + suffix);
}
