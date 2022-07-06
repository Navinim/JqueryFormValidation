jQuery('#frm').validate({
    rules: {
        name:{
            required: true,
            minlength: 3
        },
        email: "required",
        phone:{ 
            required: true,
            minlength: 10,
            maxlength: 10
        },
        password:{
            required: true,
            minlength: 6
        },
    }, messages: {
        name:{
            required: "Please enter your name",
            name: "Name must be at least 3 characters"
        },
        email:{
            required: "Please Enter Your Email",
            email: "Please enter valid email"
        },
        phone:{
            required: "Please Enter Your Phone",
            minlength: "Phone must be 10 char long",
    
        },
        password:{
            required: "Please Enter Your Password",
            minlength: "Password must be 6 char long"
        },
    },
    submitHandler:function(form){
		form.submit();
	}
});