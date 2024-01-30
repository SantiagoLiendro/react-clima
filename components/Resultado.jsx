import useClima from "../hooks/useClima"

const Resultado = () => {
    const { resultado } = useClima()

    const { name, main } = resultado

    return (
        <div className="contenedor clima">
            <h2>El Clima de {name} es: </h2>
            <p>
                {parseInt(main.temp - 273.15)} <span>&#x2103;</span>
            </p>

            <div className="temp_min_max">

                <p>
                    Min: {parseInt(main.temp_min - 273.15)} <span>&#x2103;</span>
                </p>

                <p>
                    Max: {parseInt(main.temp_max - 273.15)} <span>&#x2103;</span>
                </p>
            </div>


        </div>
    )
}

export default Resultado