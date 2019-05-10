    let defaultCity ='泉州'
    try {
        if(localStorage.city){
            defaultCity=localStorage.city
        }
    } catch (error) {
        
    }
export default {
    city:defaultCity
}