/**
 * @param {Number} len the number
 * @returns the number and suffix
 */
function ordinal(len) {
   const englishOrdinalRules = new Intl.PluralRules("en", {
      type: "ordinal"
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
   }

   const suffix = suffixes[englishOrdinalRules.select(len)];
   return (len + suffix);
}
