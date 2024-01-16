import axiosClient from "../axiosClient";

const ListPoke = {
  list(limit: number, page: number) {
    return axiosClient.get("pokemons", {
      params: {
        limit,
        page,
      },
    });
  },
};

export default ListPoke;
