export function ordinal(n: number) {
   const ordinalRules = new Intl.PluralRules("en", {
      type: "ordinal",
   });
   
   interface Suffixes {
      one: string;
      two: string;
      few: string;
      other: string;
   }

   const suffixes: Suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
   };

   const suffix = suffixes[ordinalRules.select(n)];
   return (n + suffix);
}
