interface Suffixes {
   one: string;
   two: string;
   few: string;
   many?: string;
   zero?: string;
   other: string;
}

export function ordinal(len: number) {
   const ordinalRules = new Intl.PluralRules("en", {
      type: "ordinal",
   });

   const suffixes: Suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
   };

   const suffix = suffixes[ordinalRules.select(len)];
   return (len + suffix);
}
