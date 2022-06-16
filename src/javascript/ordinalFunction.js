/**
 * @param {Number} len the number
 * @returns the number and suffix
 */
function ordinal(len) {
   const pluralRules = new Intl.PluralRules("en", {
      type: "ordinal"
   });

   const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
   }

   const suffix = suffixes[pluralRules.select(len)];
   return (len + suffix);
}
