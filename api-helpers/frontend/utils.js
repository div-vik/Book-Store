import axios from "axios"

export const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    if(res.status !== 200){
        return new Error("Internal Server Error");
    }
    const data = await res.data?.books;
    return data;
};

export const getFeaturedBooks = async () => {
    const books = await getAllBooks();
    if(books.length == 0){
        return [];
    }

    const featuredBooks = books.filter((book) => book.featured == true);
    return featuredBooks;
};

export const sendBook = async (data) => {
    const res = await axios.post("http://localhost:3000/api/books", {
        title: data.title,
        author: data.author,
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured),
        price: Number(data.price),
    });
    if(res.status !== 201){
        return new Error("Database Request Rejected");
    }
    const resData = await res.data;
    return resData;
};

export const getBookFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    if(res.status !== 200){
        return new Error("Unable To Fetch Book From Given ID");
    }
    const data = await res.data;
    return data.book;
};

export const updateBook = async (data, id) => {
    const res = await axios.put(`http://localhost:3000/api/book/${id}`, {
        title: data.title,
        author: data.author,
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured),
        price: Number(data.price),
    });
    if(res.status !== 200){
        return new Error("Unable To Update Book");
    }

    const resData = await res.data;
    return resData;
};

export const deleteBook = async () => {
    const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
    if(res.status !== 200){
        return new Error("Unable To Delete");
    }
    const resData = await res.data;
    return resData;
}