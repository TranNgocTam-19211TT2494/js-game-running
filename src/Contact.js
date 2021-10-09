   //Ajax Contact
   $(document).ready(function () {
    $(document).on('click', '#sendLetter', function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        if (message) {
            $.ajax({
                type: "POST",
                url: "https://script.google.com/macros/s/AKfycbx71jTdOU_bl-wDz786Smoh4XkdHqKABk623MLwZ_TpDUlXZzWXEHyA9a0uVY9UNEwMUQ/exec",
                data: {
                    "_token": "{{ csrf_token() }}",
                    name: name,
                    email: email,
                    message: message
                },
                dataType: 'json',
                success: function (response) {
                    swal({
                        title: "Notification",
                        text: response.message,
                        icon: 'success',
                        button: 'OK',
                    })
                },
                error: function (response) {
                    swal({
                        title: "Notification",
                        text: response.error,
                        icon: 'error',
                        button: 'OK',
                    })
                }
            })
            reset();
        } else {
            swal({
                title: "Notification",
                text: "The field must have a value",
                icon: 'error',
                button: 'OK',
            })
            reset();
        }
    });
});

function reset() {
    $("#name").val('');
    $("#email").val('');
    $("#message").val('');
}