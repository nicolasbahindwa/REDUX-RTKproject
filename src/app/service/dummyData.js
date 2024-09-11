import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        // reading the data
        getAllProduct:  builder.query({
            query: () => '/products'
        }),

        // get product by id
        getProductById : builder.query({
            query: (id) => `/products/${id}`
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newProduct)
            }),
            invalidatesTags: ['products']
        }),

        updateProduct: builder.mutation({
            query: ({id, updatedProduct}) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(updatedProduct)
            }),
            invalidatesTags: ['products']
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['products']
        })

        //... more endpoints here...


    })
})


export const {
    useGetAllProductQuery, 
    useGetProductByIdQuery, 
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi