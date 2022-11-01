
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"
import { ShoppingCard } from "../ui/Card"
const dogImage = require('../../src/assets/bg1.jpg')
const catImage = require('../../src/assets/cat.jpg')

function Pets(){
    const dispatch = useDispatch()
    const cartHandler = (pet) => {
        console.log(pet)
        dispatch(addToCart(pet))
    }
    const pets = [{id:1,name:'Dog',imageUrl:dogImage},{ id:2, name:'catImage', imageUrl:catImage}]
    return(
        <div style={{margin:30, display: 'flex',  flexDirection:'row', flexBasis:'auto', gap:40}}>
            {pets.map(pet => (
              <>
             <ShoppingCard
              key={pet.id} 
               imageUrl={pet.imageUrl}
               description="It Will make Good Pet"
               name={pet.name}
               width={300}
               price={1000}
               height={300}
               showButtons={true}
               cartHandler={cartHandler}
               />
           
               </>  
            ))}
           
        </div>
    )
}

export default Pets