// object to store store values of different currencies
// USD is base currency, which means the rest of currenies's rates are according to USD
const currency = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    PKR : 280,
    INR : 74.57,
}

document.getElementById('converter-form').addEventListener('submit', function(e){
    e.preventDefault()
    let fromCurrency = document.getElementById('from').value // this takes the selected currency from dropdown of id="from"
    let toCurrency = document.getElementById('to').value  // this takes the selected currency from dropdown of id="to"
    let amount = document.getElementById('amount').value  // this takes the amount by user input from input field

    let fromAmount = currency[fromCurrency]; // this takes the value of the selected from currency from the object"
    let toAmount = currency[toCurrency]; // this takes the value of the selected to currency from the object"
    let baseAmount = amount / fromAmount; // converting to the base currency ( USD here is a base currency )
    let convertedAmount = baseAmount * toAmount;

    document.getElementById('result').textContent = (`Converted Amount: ${Math.round(convertedAmount)}`);

    // Output the converted amount with the appropriate currency symbol
    if (toCurrency === "USD") {
        document.getElementById('result').textContent = `Your Converted Amount is: $${Math.round(convertedAmount)}`;
    }
    else if (toCurrency === "EUR") {
        document.getElementById('result').textContent = `Your Converted Amount is: €${Math.round(convertedAmount)}`;
    }
    else if (toCurrency === "GBP") {
        document.getElementById('result').textContent = `Your Converted Amount is: £${Math.round(convertedAmount)}`;
    }
    else if (toCurrency === "INR") {
        document.getElementById('result').textContent = `Your Converted Amount is: ₹ ${Math.round(convertedAmount)}`;
    }
    else if (toCurrency === "PKR") {
        document.getElementById('result').textContent = `Your Converted Amount is: Rs ${Math.round(convertedAmount)}`;
    } else {
        document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`;
    }
});


