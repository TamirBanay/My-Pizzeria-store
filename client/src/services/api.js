import Axios from "axios";
const $axios = Axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

//Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("got error");
    console.error(error);

    throw error;
  }
);

class PurchaseDetailsService {
  static getPurchaseDetails(id) {
    return $axios
      .get(`PurchaseDetails/get-PurchaseDetails/${id}`)
      .then((response) => response.data);
  }
  static setPurchaseDetails(items, name, price, cardNumber, idOfPerson) {
    return $axios
      .get(
        `PurchaseDetails/get-PurchaseDetails/${items}/${name}/${price}/${cardNumber}/${idOfPerson}`
      )
      .then((response) => response.data);
  }
}

const service = {
  PurchaseDetailsService,
};

export default service;
