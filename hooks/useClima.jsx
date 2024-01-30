import { useContext } from "react";
import ClimaContext from "../contexs/ClimaProviders";

const useClima = () => {
    return useContext(ClimaContext)
}

export default useClima