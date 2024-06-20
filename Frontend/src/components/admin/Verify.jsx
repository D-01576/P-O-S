import axios from "axios";
export function useVerify() {
    const token = localStorage.getItem("admintoken");
    console.log(token)
    const location = window.location.pathname
    console.log(location)
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/verify",{},{
                    headers: {
                        authorization: token
                    }
                });
                if (response.data.status === "success") {
                    if(location === "/admin/signin"){
                    window.location.pathname = "/admin/home";
                    }
                }
                else{
                    if(location === "/admin/signin"){
                        
                    }
                    else{
                        window.location.href = "/admin/signin";
                    }
                }
            } catch (error) {
                if(location !== "/admin/signin"){
                    window.location.href = "/admin/signin";
            }
            }
        };
        fetchData();
}
