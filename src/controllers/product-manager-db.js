import ProductModel from "../models/product.js";


class ProductManager {

    async addProduct({title, description, price, thumbnail, code, stock})
    {
        try {
            if(!title || !description || !price || !thumbnail || !code || !stock) {
                console.log ("Debes ingregar todos los campos")
                return
            }

            const existeProducto = await ProductModel.findOne({code: code})

                if (existeProducto) {
                    console.log("el código debe ser único")
                    return
                }
            const nuevoProducto = new ProductModel ({
                title,
                description,
                price,
                thumbnail: "sin imagen",
                code,
                stock,
                status: true,

            });
            await nuevoProducto.save()

                 
        } catch (error) {
            console.log("error al agregar un producto", error)
            throw error
        }
    }

    async getProductById (id){
        try {
            const producto = await ProductModel.findById(id)
                if (!producto){
                    console.log("No se encontró producto por el ID")
                    return null
                }
            console.log("producto encontrado") 
            return producto   
        } catch (error) {
            console.log("error al encontrar un producto por ID", error)
            throw error
        }
    }

    async updateProduct (id, productoActualizado) {
        try {
            const updateProduct = await ProductModel.findByIdAndUpdate(id, productoActualizado)
                if (!updateProduct) {
                    console.log("No se encontro producto por el ID")
                    return null
                }
            console.log("Producto modificado")    
            return updateProduct
        } catch (error) {
            console.log("error al actualizar un producto por ID", error)
            throw error

        }
    }

    async deleteProduct (id) {
        try {
            const deleteProduct = await ProductModel.findByIdAndDelete(id)
                if (!deleteProduct){
                    console.log ("No se encontró producto por el ID")
                    return null
                }
            console.log("Producto eliminado")    
        } catch (error) {
            console.log("error al eliminar un producto por ID", error)
            throw error

        }
    }

    async getProducts () {
        try {
            const productos = await ProductModel.find()
            return productos
        } catch (error) {
            console.log("error al buscar productos", error)
            throw error
        }
    }
}

export default ProductManager