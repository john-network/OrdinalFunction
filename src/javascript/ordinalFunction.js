/**
 * @param {number} counting
 * @returns the number and the suffix
 */
function generateOrdinal(counting) {
   const pluralRules = new Intl.PluralRules("en", {
      type: "ordinal"
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
   }

   const suffix = suffixes[pluralRules.select(counting)];
   return (counting + suffix);
}
