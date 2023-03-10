// import React, { useState } from "react";
// import { Input, Button } from "antd";
// import { UserOutlined, 
//     UnlockOutlined, 
//     MailOutlined,
// } from "@ant-design/icons";
// import "../index.css";
// import { useForm, Controller } from "react-hook-form";
// import Header from "../Header";

// export interface LoginInterface {
//     username: string;
//     email: string;
//     password: string;
// }

// const LoginPage: React.FC = () => {
//     const { handleSubmit, formState: { errors }, control } = useForm<LoginInterface>();
//     const [item, setItem] = useState<LoginInterface>();
//     const onSubmited = (data: LoginInterface) => {
//         setItem(data);

//     }
//     console.log(item);
    
//     return (
//         <div className="login-page">
//             <div className="container">
//                 <h1>User Login</h1>
//                 <form className="login-form" onSubmit={handleSubmit(onSubmited)}>
//                     <Controller
//                         name="username"
//                         control={control}
//                         defaultValue=""
//                         rules={{
//                             required: "Please input username",
//                         }}
//                         render={({ field: { onChange, value } }) => (
//                             <Input
//                                 onChange={onChange}
//                                 value={value}
//                                 allowClear={true}
//                                 placeholder="Username"
//                                 prefix= { <UserOutlined/> }
//                                 style={{
//                                     color: "#2C3333",
//                                     border: "none",
//                                 }}
//                             />
//                         )}
//                     />
//                     <p>{errors.username?.message}</p>
//                     <Controller
//                         name="email"
//                         control={control}
//                         defaultValue=""
//                         rules={{
//                             required: "Please input your email"
//                         }}
//                         render={({ field: {onChange, value}}) => (
//                             <Input
//                                 onChange={onChange}
//                                 value={value}
//                                 allowClear={true}
//                                 placeholder="email"
//                                 prefix= { <MailOutlined /> }
//                                 style={{
//                                     color: "#2C3333",
//                                     border: "none",
//                                     margin: "10px 0",
//                                 }}
//                             />
//                         )}
//                     />
//                     <p>{errors.email?.message}</p>
//                     <Controller
//                         name="password"
//                         control={control}
//                         defaultValue=""
//                         rules={{
//                             required: "Please input password"
//                         }}
//                         render={({ field: { onChange, value }}) => (
//                             <Input
//                                 onChange={onChange}
//                                 value={value}
//                                 allowClear={true}
//                                 placeholder="Password"
//                                 prefix={<UnlockOutlined/>}
//                                 style={{
//                                     color: "#2C3333",
//                                     border: "none",
//                                 }}
//                             />
//                         )}
//                     />
//                     <p>{errors.password?.message}</p>
//                     <Button
//                         htmlType="submit"
//                         color="#2C3333"
//                         style={{
//                             marginTop: "100px",
//                             width: "50%",
//                             backgroundColor: "#2C3333",
//                             color: "#CBE4DE",
//                         }}
//                     >
//                         Log In
//                     </Button>
//                 </form>
//             </div>
//             <Header data={item}/>
//         </div>
//     )
// }

// export default LoginPage;

import React from "react";

const LoginPage = () => {
    return (
        <div></div>
    )
}

export default LoginPage;