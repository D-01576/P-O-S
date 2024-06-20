import axios from "axios";
export function useVerify() {
    const token = localStorage.getItem("token");
    console.log(token)
    const location = window.location.pathname
    console.log(location)
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/user/verify",{},{
                    headers: {
                        authorization: token
                    }
                });
                if (response.data.status === "success") {
                    console.log("nut")
                    if(location === "/user/signin"){
                        console.log("yes")
                window.location.pathname = "/user/home";
                    }
                }
                else{
                    if(location === "/user/signin"){
                        
                    }
                    else{
                        console.log("js")
                        window.location.href = "/user/signin";
                    }
                }
            } catch (error) {
                if(location !== "/user/signin"){
                    window.location.href = "/user/signin";
            }
            }
        };
        fetchData();
}
