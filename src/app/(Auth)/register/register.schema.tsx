import * as zod from 'zod';

export const schema = zod.object({
    name: zod.string().nonempty('Name is required').min(3, "Name must be at least 3 chars").max(10, "Max 10"),
    email: zod.email("Email isn't in format"),
    password: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
    rePassword: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"),
    phone:zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/,'Phone must be and egyptian number')
}).refine(function (object){
    return object.password=== object.rePassword;
},{
    path:['rePassword'],
    error:"Passwords are not-match"
})

