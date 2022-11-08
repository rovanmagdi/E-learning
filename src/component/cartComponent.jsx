import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "react-use-cart";
import { StyledGridCart } from "../styled/Grid";
import { StyledTypographyCart } from "../styled/Typography";
import emptyCart from "../assets/empty-cart.svg";
import { CartContext } from "../context";
function CartComponent(props) {
  const BASE_URL = "http://localhost:3200/users";
  const idLocal = JSON.parse(localStorage.getItem("user")).id;

  const [cart, setCart] = useState([]);
  var { removeItem } = useCart();

  useEffect(() => {
    axios.get(`${BASE_URL}/${idLocal}`).then((response) => {
      setCart(response.data.cart);
      // console.log(response.data.cart);
    });
  }, [idLocal]);

  var [filter, setFilter] = useState([]);
  useEffect(() => {
    console.log(filter)
    if (filter.length >= 0) {
      console.log("effect");

      const response = axios
        .patch(
          `http://localhost:3200/users/${
            JSON.parse(localStorage.getItem("user")).id
          }`,
          { cart: filter }
        )
        .catch((error) => console.log("Error: ", error));
      if (response && response.data) {
        console.log(response.data);
      }
    }
  }, [filter]);

  const handleDelete = (id) => {
    setFilter(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart }}>
      <Container>
        {cart?.length ? (
          cart.map((item) => {
            return (
              <StyledGridCart item container xs={12}>
                <Grid item xs={2.4}>
                  <Box
                    component="img"
                    src={`${item.imageBase}`}
                    sx={{ height: "120px" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography sx={{ fontSize: "1.3rem", fontWeight: "bolder" }}>
                    {item.title}
                  </Typography>
                  <Grid container item xs={12} sx={{ alignItems: "center" }}>
                    <Grid item xs={1}>
                      <Box
                        component="img"
                        src={item.imageAuthor}
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </Grid>

                    <Grid item xs={5}>
                      <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                        {item.author}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <StyledTypographyCart variant="body2">
                        {item.price} $
                      </StyledTypographyCart>
                    </Grid>
                  </Grid>
                </Grid>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    removeItem(item.id);
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </Button>
              </StyledGridCart>
            );
          })
        ) : (
          <Box
            component="img"
            src={emptyCart}
            height="400px"
            sx={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
        )}
      </Container>
    </CartContext.Provider>
  );
}

export default CartComponent;
