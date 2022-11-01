import { menuItems } from "../../Home/MenuItems";
import MenuItemComponent from "./MenuItemComponent";
import HeaderStyles from "./Header.module.css";
import { ContextClick, ContextClickValue } from "../../context/ContextClick";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  {useSelector} from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";


export function Header() {
    const cart = useSelector(state => state.cart.cart)
    const  navigate = useNavigate()

    function navigateToCart(e){
        // e.preventDefault()
        navigate('/cart')
    }
    let  total = 0;
    return (
        <section className={HeaderStyles.navbar}>
            <header>
                <h4 className={HeaderStyles.logo}>PETSHOP</h4>
                <nav>
                        <MenuItemComponent items={menuItems} />
                </nav>
            </header>
            <section style={{ float:'right',margin:30, color:'white'}}>
             <NavLink to="cart">
             <AddShoppingCartIcon  style={{cursor:'pointer'}} />
            {cart.forEach(item => {
                total += item.quantity
            })}
            </NavLink>   
          
            <span>{total}</span>
            </section>
        </section>
    )
}

