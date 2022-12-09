import { Alert, Button, Card, CardActions, CardContent, Snackbar, Typography } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react'
import { deleteBook } from '../api-helpers/frontend/utils';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookItem = ({title, id, author, imageUrl, featured, price}) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        deleteBook(id)
        .then(()=>setOpen(true))
        .catch((err)=>console.log(err));
    };
    return (
        <Fragment>
            <Card 
                sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "5px 5px 10px #ccc",
                        ":hover":{
                            boxShadow: "10px 10px 20px #ccc"
                        }
                }}
            >
                    <div style={{width: '100%', height: '50%', position: "relative"}}>
                        {featured && (
                            <div style={{position: "absolute", top: '0', background: "#c83576", color: "white", width: "70px", padding: "2px"}}>
                                Featured
                            </div>
                        )}
                        <img src={imageUrl} alt={title} width={"100%"} height={"100%"} />
                    </div>
                    <CardContent sx={{width: "100%", height: "30%"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {author}
                    </Typography>
                    <Typography sx={{mt: 1}} fontWeight="bold" fontFamily="monospace" variant="body2" color="text.secondary">
                        {`Best Buy $${price}`}
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Link href={`/books/${id}`}>
                            {" "}
                        <Button endIcon={<EditIcon />} size="small" color="warning">
                            EDIT
                        </Button>
                    </Link>
                    
                    <Button endIcon={<DeleteIcon />} onClick={handleDelete} size="small" color="error">
                        DELETE
                    </Button>
                </CardActions>
            </Card>
            {open && (
                <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={()=>{
                    setOpen(false);
                    router.push("/books");
                }}>
                    <Alert onClose={()=> setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Successfully Deleted!
                    </Alert>
                </Snackbar>
            )}
        </Fragment>
    )
}

export default BookItem