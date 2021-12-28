function ordinal(number) {
   const englishOrdinalRules = new Intl.PluralRules("en", {
      type: "ordinal"
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
   }

   const suffix = suffixes[englishOrdinalRules.select(number)];
   return (number + suffix);
}