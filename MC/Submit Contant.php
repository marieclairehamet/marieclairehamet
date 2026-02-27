<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Your email
    $to = "marieclairehamet@gmail.com"; 

    // Music selections
    $music = isset($_POST['music']) ? implode(", ", $_POST['music']) : "No selections";

    // Message text
    $message_body = isset($_POST['message']) ? $_POST['message'] : "";

    // Email subject
    $subject = "New Connect With Me Submission";

    // Build email content
    $message = "Favorite Music Genres: " . $music . "\n\n";
    $message .= "Message:\n" . $message_body;

    // Email headers
    $headers = "From: noreply@yourwebsite.com\r\n";
    $headers .= "Reply-To: marieclairehamet@gmail.com\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='contactme.html';</script>";
    } else {
        echo "<script>alert('Sorry, there was an error sending your message. Please try again later.'); window.location.href='contactme.html';</script>";
    }

} else {
    header("Location: contactme.html");
    exit();
}
?>
