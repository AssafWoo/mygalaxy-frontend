export function formatNumberWithCommas(numberString) {
  if (!numberString || isNaN(numberString)) {
    return "Invalid Number";
  }

  const num = Number(numberString).toString();

  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
