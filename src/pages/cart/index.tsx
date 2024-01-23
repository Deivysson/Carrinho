export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                src="https://images.macrumors.com/t/jeSIj6IH-yMuFn6CI44qwcc9Q4o=/800x0/smart/article-new/2019/10/airpods-pro-roundup.jpg?lossy"
                alt="logo do produto"
                className="w-28"
                />

                <strong>Preço: R$1000</strong>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        -
                    </button>
                    3
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        +
                    </button>
                </div>

                <strong className="float-right">
                        Subtotal: R$3000
                    </strong>
            </section>

            <p className="font-bold mt-4">Total: R$3000</p>
        </div>
    )
}