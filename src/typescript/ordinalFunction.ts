interface Suffixes {
   zero?: string;
   one: string;
   two: string;
   few: string;
   many?: string;
   other: string;
}

function getOrdinal(count: number) {
   const pluralRules = new Intl.PluralRules("en", {
      type: "ordinal",
   });

   const suffixes: Suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
   };

   const adjective = suffixes[pluralRules.select(count)];
   return (count + adjective);
}
