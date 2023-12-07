<script>
    document.getElementById('confirmPaymentButton').addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var amount = document.getElementById('amount').value;

        // Check if all required fields are filled out
        if (name.trim() === '' || phoneNumber.trim() === '' || amount.trim() === '') {
            alert('Please fill out all fields before confirming payment.');
            return;
        }

        var paymentDetails = "Name: " + name + "\nPhone Number: " + phoneNumber + "\nAmount: " + amount;

        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: paymentDetails,
            width: 128,
            height: 128
        });

        // Create a URL with query parameters for the second page
        var secondPageURL = "second_page.html" +
            "?name=" + encodeURIComponent(name) +
            "&phoneNumber=" + encodeURIComponent(phoneNumber) +
            "&amount=" + encodeURIComponent(amount);

        // Open the second page in a new tab or window
        window.open(secondPageURL, "_blank");
    });
</script>
