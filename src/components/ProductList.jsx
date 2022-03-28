import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import Sheet from 'react-modal-sheet';
import { selectProduct } from '../features/products/productSlice';
import ModalProduct from './ModalProduct';

const ProductList = () => {
    const selectedSubcategory = useSelector((state) => state.menu.selectedSubcategory);
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const dispatch = useDispatch();

    const [isOpen, setOpen] = useState(false);

    const products = useSelector(state => state.product.products.filter(p => {
        if (p.parentId === selectedSubcategory) {
            return p;
        }
    }));

    const handleItemClick =(p)=>{
        let tmpP=JSON.parse(JSON.stringify(p));
        tmpP.count=1;
        dispatch(selectProduct(tmpP));
        setOpen(true);
    }

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open sheet</button>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <ModalProduct item={selectedProduct} setOpen={setOpen}/>
                        

                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
            </Sheet>
            {products.map(p => {
                return (
                    <div onClick={()=>{
                        handleItemClick(p);
                    }} className='hover:cursor-pointer hover:bg-slate-200'>
                        <Product item={p} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList