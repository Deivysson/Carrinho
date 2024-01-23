import { useEffect, useState } from "react"
import { BsCartPlus } from "react-icons/bs"

import { api } from "../../services/api"

interface ProductProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){

const [products, setProducts] = useState<ProductProps[]>([])

useEffect(() => {
    async function getProducts() {
        const response = await api.get("/products")
        setProducts(response.data)
    }

    getProducts();
}, [])


return(
    <div>
        <main className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <section className="w-full">
                    <img 
                    className="w-full rounded-lg max-h-70 mb-2"
                    src="https://images.macrumors.com/t/jeSIj6IH-yMuFn6CI44qwcc9Q4o=/800x0/smart/article-new/2019/10/airpods-pro-roundup.jpg?lossy"
                    alt="Logo do produto"
                    />
                    <p className="font-medium mt-1 mb-2">Airpods Pro</p>

                    <div className="flex gap-3 items-center">
                        <strong className="text-zinc-700/90">
                            R$ 1000
                        </strong>
                        <button className="bg-zinc-900 p-1 rounded">
                            <BsCartPlus size={20} color="#fff"/>
                        </button>
                    </div>

                </section>
            </div>
        </main>
    </div>
    )
}