/**
 * @param {number} count
 * @returns the number and the suffix
 */
function getOrdinal(count) {
   const pluralRules = new Intl.PluralRules("en", {
      type: "ordinal"
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
   }

   const adjective = suffixes[pluralRules.select(count)];
   return (count + adjective);
}
