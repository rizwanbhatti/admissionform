// import Cookies from "js-cookie";




export const getAllUsers = async () => {

try{

const res = await fetch("/api/students" ,{
    method: "GET",
});

const data = await res.json();
return data;

}
catch(error){

    console.log("error-->",error)

}

}

export const findUserByCNIC = async (cnic) => {
    try {
      const response = await fetch(`/api/findCnic?cnic=${cnic}`, {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ cnic }),
      });
  
    //   if (response.ok) {
        const data = await response.json();
        return data
        //  { success: true, user: data.studentWithCnic };
    //   } else {
        // const errorData = await response.json();
        // return { success: false, message: errorData.message };
    //   }
    } catch (error) {
      console.log('Error finding user:', error);
    //   return { success: false, message: 'Error finding user' };
    }
  };
  


// export const getUserWithCnic = async (cnicToFind) => {
//     console.log('cnicToFind -->', cnicToFind);
//     try {
//         const response = await fetch(`/api/findCnic?cnicToFind=${cnicToFind}`, {
//             method: "GET",
//         });
//         if (!response.ok) {
//             // Handle non-200 status code
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log("error-->", error);
//         throw error; // Rethrow the error for the caller to handle
//     }
// };

