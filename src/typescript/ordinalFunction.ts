export function ordinal(n: number) {
   const englishOrdinalRules = new Intl.PluralRules("en", {
      type: "ordinal",
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
   };

   const suffix = suffixes[englishOrdinalRules.select(n)];
   return (n + suffix);
}