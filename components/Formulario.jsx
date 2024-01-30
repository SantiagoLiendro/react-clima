import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulariio = () => {

  const [alerta, setAlerta] = useState('')
  const { busqueda, datosBusqueda, consultarClima } = useClima()
  const { ciudad, pais } = busqueda

  const handelSubmit = (e) => {
    e.preventDefault()

    if (Object.values(busqueda).includes('')) {
      setAlerta("Todos los campos son obligatorios")
      return
    }
    setAlerta('')
    consultarClima(busqueda);
  }

  return (
    <div className="contenedor">
      {alerta && <p className="alerta">{alerta}</p>}

      <form action=""
        onSubmit={handelSubmit}
      >
        <div className="campo">
          <label htmlFor='ciudad'>Ciudad</label>
          <input
            type="text"
            id='ciudad'
            name='ciudad'
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor='pais'>País</label>
          <select
            id='pais'
            name='pais'
            onChange={datosBusqueda}
            value={pais}
          >
            <option value="" selected disabled> Seleccione Un País </option>
            <option value="US"> Estados Unidos </option>
            <option value="MX"> Mexico </option>
            <option value="AR"> Argentina </option>
            <option value="CO"> Colombia </option>
            <option value="CR"> Costa Rica </option>
            <option value="ES"> España </option>
            <option value="PE"> Peru </option>

          </select>
        </div>

        <input type="submit"
          value="Consultar Clima"
        />

      </form>
    </div>
  )
}

export default Formulariio