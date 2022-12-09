import React from 'react';
import { Grid } from "@mui/material"
import BookItem from './BookItem';

const BookList = ({data, featuredPage}) => {
    return (
        <div>
            <Grid padding={1} spacing={2} container>
                {data.map((book) => (
                    <Grid xs={6} sm={4} md={3} lg={2} height={featuredPage ? "500px" : "400px"} width={"100%"} item key={book._id}>
                        <BookItem title={book.title} author={book.author} id={book._id} imageUrl={book.imageUrl} featured={book.featured} price={book.price} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default BookList;