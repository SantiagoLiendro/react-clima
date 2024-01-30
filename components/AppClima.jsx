import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"

const AppClima = () => {
    const { resultado, cargando, noResultado } = useClima()
    return (
        <>
            <main className="dos-columnas">
                <Formulario />
                {
                    cargando ? <Spinner /> :
                        resultado?.name ? <Resultado /> :
                            noResultado ? <p className="text-center">{noResultado}</p> :
                                <p className="text-center">El clima se mostrara aqui</p>

                }
            </main>
        </>
    )
}

export default AppClima