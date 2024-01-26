/* eslint no-unused-vars: "off" */

/**
 * @param {Object} student
 * @param {number} student.age
 * @param {booelan} student.hasLivedInCaliforniaAtLeastTwoYears
 * @param {booelan} student.haveParentsPaidCaliforniaTaxAtLeastOneYear
 * @returns {number|string}
 */
const decisionForScholarship = ({
  age,
  hasLivedInCaliforniaAtLeastTwoYears,
  haveParentsPaidCaliforniaTaxAtLeastOneYear,
  hasWorkedPartTimeAtLeastSixMonthsInRelevantField,
  isHouseHoldIncomeLessThanFiveThousand,
  hasVolunteered,
}) => {
  const ELIGIBLE_FOR_SCHOLARSHIP = 1;
  const NOT_ELIGIBLE_FOR_SCHOLARSHIP = 0;
  const DEAN_FOR_CONSIDERATION = 'Dean for consideration';
  if (age < 18 || age > 24) {
    return NOT_ELIGIBLE_FOR_SCHOLARSHIP;
  }
  if (!hasLivedInCaliforniaAtLeastTwoYears && !haveParentsPaidCaliforniaTaxAtLeastOneYear) {
    return NOT_ELIGIBLE_FOR_SCHOLARSHIP;
  }
  if (!haveParentsPaidCaliforniaTaxAtLeastOneYear) {
    return NOT_ELIGIBLE_FOR_SCHOLARSHIP;
  }
  if (!hasWorkedPartTimeAtLeastSixMonthsInRelevantField && !hasVolunteered) {
    return NOT_ELIGIBLE_FOR_SCHOLARSHIP;
  }
  if (!hasVolunteered) {
    return NOT_ELIGIBLE_FOR_SCHOLARSHIP;
  }
  if (!hasWorkedPartTimeAtLeastSixMonthsInRelevantField && isHouseHoldIncomeLessThanFiveThousand) {
    return DEAN_FOR_CONSIDERATION;
  }
  return ELIGIBLE_FOR_SCHOLARSHIP;
};
