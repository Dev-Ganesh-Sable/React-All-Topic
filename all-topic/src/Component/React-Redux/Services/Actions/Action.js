
import {Add_To_Cart} from "../Constant"

export const addToCart = (data) => {
    return {
        type: "Add_To_Cart",
        data: data
    };
};

