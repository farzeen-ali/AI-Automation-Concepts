const data = $json

// Parsing
const cleanFull = data.full_name.trim().replace(/\s+/g, ' ')
const parts = cleanFull.split(" ")
const first = parts[0] || ""
const last = parts[1] || ""

let email = data.email.trim().toLowerCase();

const rawAmount = data.amount;
const amountStr = String(rawAmount).trim().replace(/[^0-9.]/g, "");
const amount = parseFloat(amountStr) || 0;
let rawDate = data.date;
let msg = data.message.trim().replace(/\s+/g, ' ')

// Transformation
function cap(s){
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
const firstName = cap(first)
const lastName = cap(last)

const d = new Date(rawDate);
const niceDate = d.toDateString();

const subject = `Qoute Request from ${firstName} - Amount ${amount}`;

const cleanMsg = msg.charAt(0).toUpperCase() + msg.slice(1);

return {
  firstName,
  lastName,
  email,
  amount,
  niceDate,
  subject,
  cleanMsg
}
