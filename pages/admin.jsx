import react from "react"
import { imageDb } from "../components/api"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

export default function Admin(){
    
    function handleUpload(event){
        console.log(event.target.files[0])
        const vesselsImgs = ref(imageDb, `vesselsImage${v4()}`)
        uploadBytes(vesselsImgs,e.target.files[0])
        .then(data=>{console.log(data,"vessels images")})
    }


    return(
        <div className="admin container">
            <div className="row">
                <form className=""> 
                    <div class="mb-3">
                        <label htmlFor="formType" class="form-label">Type</label>
                        <input type="text" class="form-control" id="forType"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="formDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="formDescription" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="formLocation" class="form-label">Price</label>
                        <input type="text" class="form-control" id="formLocation"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="formPrice" class="form-label">Price</label>
                        <input type="text" class="form-control" id="formPrice"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="formImage" class="form-label">upload an image</label>
                        <input type="file" class="form-control" id="formImage" onChange={(e)=>handleUpload(e)}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
